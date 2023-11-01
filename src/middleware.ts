import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export default async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    if (path === '/') {
        return NextResponse.next()
    }

    const session = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const isProtected = path.includes('/dashboard')

    if (!session && isProtected) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else if (session && path === '/login') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
}