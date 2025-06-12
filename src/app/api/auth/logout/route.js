import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const response = NextResponse.redirect(
    new URL(
      "/login",
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    )
  );
  response.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0, // hapus cookie
  });
  return response;
}
