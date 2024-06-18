import { NextRequest, NextResponse } from 'next/server';

// create a middleware
export const middleware = async (request: NextRequest) => {
  console.log('middleware', request);

  return NextResponse.next();
};