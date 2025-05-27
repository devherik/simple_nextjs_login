'use server'
import { redirect } from "next/navigation";
import { createSession, deleteSession } from '@/app/lib/session';

// Dummy user database lookup
async function verifyCredentials(email: string, pass: string) {
    // In a real app, you'd look this up in your database.
    // Never store passwords in plain text. Always use a hashing library like bcrypt.
    if (email === 'user@example.com' && pass === 'password123') {
        return { id: '1', name: 'Alice' };
    }
    return null;
}

export async function login(formData: FormData) {
    const name = formData.get("name");
    const password = formData.get("password");
    // logic to login and get the user id
    /*const user = await verifyCredentials(name as string, password as string);
    if (!user) {
        // You can return an error message to the client here
        console.log("Invalid credentials");
        return;
    }
    await createSession(user.id);*/
    const data = {id: name};
    redirect(`/pages/dashboard/${data.id}`);
}

export async function signup(formData: FormData) {
  // Logic to sign up a new user would go here...
  // For this example, we'll just log it.
  console.log('Signup functionality not implemented.');
}

export async function logout() {
  await deleteSession();
  redirect('/pages/login');
}