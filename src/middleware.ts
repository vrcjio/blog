import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === ("/login") || path === ("/signup")

    const token = request.cookies.get(process.env.LOGIN_TOKEN! || "loginToken")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/user', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/login',
        '/signup',
        '/user/:path*',

    ]
}