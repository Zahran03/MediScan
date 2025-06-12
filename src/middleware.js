// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const protectedRoutes = [
  "/dashboard/:path*",
  "/dashboard",
  "/prediksi/:path*",
  "/prediksi",
  "/histori/:path*",
  "/history",
  "/riwayat/:path*",
  "/riwayat",
  "/pengaturan/:path*",
  "/pengaturan",
  "/profil/:path*",
  "/profil",
  "/akun/:path*",
  "/akun",
];

// Fungsi untuk memverifikasi token JWT
async function verifyJWT(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  // Lindungi route yang diawali /dashboard
  if (isProtectedRoute) {
    const token = request.cookies.get("token")?.value;

    // Jika tidak ada token, redirect ke /login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const isValid = await verifyJWT(token);

    // Jika token invalid, redirect juga
    if (!isValid) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set("token", "", { maxAge: 0 }); // opsional: hapus token
      return response; // ← ✅ tambahkan ini
    }
  }

  // Jika semua valid, teruskan request
  return NextResponse.next();
}

// Tentukan matcher agar middleware hanya dijalankan pada route tertentu
// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/dashboard",
//     "/prediksi/:path*",
//     "/prediksi",
//     "/histori/:path*",
//     "/history",
//     "/riwayat/:path*",
//     "/riwayat",
//     "/pengaturan/:path*",
//     "/pengaturan",
//     "/profil/:path*",
//     "/profil",
//     "/akun/:path*",
//     "/akun",
//   ],
// };
