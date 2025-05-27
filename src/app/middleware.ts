// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/app/lib/session';

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // If there's no session and the user is trying to access a protected route
  if (!session && request.nextUrl.pathname.startsWith('/users')) {
    // Redirect them to the login page
    return NextResponse.redirect(new URL('/pages/login', request.url));
  }
  
  if (!session && request.nextUrl.pathname.startsWith('/pages/dashboard')) {
      return NextResponse.redirect(new URL('/pages/login', request.url));
  }

  return NextResponse.next();
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: ['/users/:path*', '/pages/dashboard'],
};