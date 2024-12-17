import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME } from './lib/constants'

export function middleware(request: NextRequest): NextResponse | void {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
