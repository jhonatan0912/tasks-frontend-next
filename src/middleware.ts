import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const authToken = request.cookies.get('auth_token');

  if (!authToken && request.nextUrl.pathname.startsWith('/tasks')) {
    return Response.redirect(new URL('/auth/login', request.url));
  }

  if (authToken && request.nextUrl.pathname.startsWith('/auth/login')) {
    return Response.redirect(new URL('/tasks', request.url));
  }

  return NextResponse.next();
};