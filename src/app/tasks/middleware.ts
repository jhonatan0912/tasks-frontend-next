import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  console.log('middleware', request);

  return NextResponse.next();
};