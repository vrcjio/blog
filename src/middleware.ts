import { NextRequest, NextResponse } from "next/server";

export const middleware = (request:NextRequest) =>{
    const path = request.nextUrl.pathname;
    const isPublicPath =  path==="/signin" || path==="/signup"

    const token = request.cookies.get(process.env.LOGIN_TOKEN!||"loginToken")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/user', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/signin', request.nextUrl))
    }

}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/signin',
        '/signup',
        '/user/:path*',

    ]
}