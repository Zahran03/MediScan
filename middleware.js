// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  console.log("TOKEN:", token);
  console.log("Middleware running for:", req.nextUrl.pathname);
  console.log("Token found:", !!token);

  const dashboardPath = req.nextUrl.pathname.startsWith("/dashboard");

  if (dashboardPath) {
    if (!token) {
      console.log("No token, redirecting to login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      console.log("Token verified for user:", payload.username);
      return NextResponse.next();
    } catch (e) {
      console.log("Token verification failed:", e.message);
      // Clear the invalid token
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
