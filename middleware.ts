import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })

  if (/^(\/dashboard|\/games|\/stores)/.test(request.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/api/rawg')) {
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }
}

export const config = {
  matcher: ['/:path+'],
}
