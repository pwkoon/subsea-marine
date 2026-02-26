import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy (request: NextRequest) {
  const nonce = generateNonce();

  const response = NextResponse.next();

  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self';
      script-src 'self' 'nonce-${nonce}';
      object-src 'none';
      style-src 'self' 'unsafe-inline';
      frame-src https://www.google.com/maps/;
    `.replace(/\n/g, ''),
  );

  response.headers.set('x-nonce', nonce);

  return response;
}

function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

export const config = {
  matcher: '/:path*',
};
