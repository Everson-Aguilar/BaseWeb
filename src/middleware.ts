import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api')) {
    const apiKey = req.headers.get('x-api-key');
    const publicKey = process.env.NEXT_PUBLIC_API_KEY_CLIENT;

    if (apiKey !== publicKey) {
      return new NextResponse('page not found', { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
