import { NextResponse } from "next/server";

export function middleware(req) {
    return NextResponse.redirect(new URL("/login",req.url))
    
}
export const config={
    matcher:["/about/:path*","/studentlist/:path*"]
}
