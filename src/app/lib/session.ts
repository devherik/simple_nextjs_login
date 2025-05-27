import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

//const secretKey = process.env.SESSION_SECRET;
const secretKey = "your-super-secret-key-that-is-at-least-32-characters-long";
const encodedKey = new TextEncoder().encode(secretKey);

// Defines the structure of session payload
interface SessionPayload {
    userId: string;
    expiresAt: Date;
}

// Function to create the payload and the session
export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    // In a more robust validation, here are the place to check the database for the
    // user payload received before log in
    const session = await new SignJWT({ userId, expiresAt })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('7 d')
        .setIssuedAt()
        .sign(encodedKey);
    
    (await cookies()).set('session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
  });
}
// Function to get the current session from the cookie
export async function getSession() {
  const sessionCookie = (await (cookies)()).get('session')?.value;

  if (!sessionCookie) {
    return null;
  }

  try {
    const { payload } = await jwtVerify<SessionPayload>(sessionCookie, encodedKey, {
      algorithms: ['HS256'],
    });

    // Refresh the session expiration
    if (new Date() > new Date(payload.expiresAt)) {
        // Here you could also re-validate the user against the database
        // before re-issuing a new session token.
        console.log("Session expired. Re-creating...");
        await createSession(payload.userId); // Re-create session
    }


    return payload;
  } catch (error) {
    console.error('Failed to verify session:', error);
    return null;
  }
}

// Function to delete the session
export async function deleteSession() {
  (await (cookies)()).delete('session');
}