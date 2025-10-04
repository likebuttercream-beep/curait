import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_PATHS = ['/account'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requiresAuth = PROTECTED_PATHS.some((path) => pathname.startsWith(path));
  if (!requiresAuth) {
    return NextResponse.next();
  }

  const hasSession = request.cookies.has('curait-session');
  if (!hasSession) {
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*']
};
