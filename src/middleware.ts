import { NextRequest, NextResponse } from "next/server";
import { PageRoute } from "./config";

export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === (PageRoute?.login || "/login") || path === (PageRoute?.singup || "/signup")

    const token = request.cookies.get(process.env.LOGIN_TOKEN! || "loginToken")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL(PageRoute?.dashboard || '/user', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL(PageRoute?.login || '/login', request.nextUrl))
    }

}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        PageRoute?.login || '/login',
        PageRoute?.singup || '/signup',
        PageRoute?.dashboard+"/:path*" || '/user/:path*',

    ]
}