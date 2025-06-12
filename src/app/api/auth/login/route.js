import { NextResponse } from "next/server";
import { supabase } from "../../../../../lib/supabase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req) {
  const { username, password } = await req.json();

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();

  if (error || !user) {
    return NextResponse.json(
      { message: "Username tidak ditemukan" },
      { status: 401 }
    );
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ message: "Password salah" }, { status: 401 });
  }

  const token = jwt.sign(
    { user_id: user.user_id, username: user.username },
    SECRET_KEY,
    { expiresIn: "1d" }
  );

  const response = NextResponse.json({ message: "Login berhasil!" });
  cookies().set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 hari
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production", // true di production
  });

  return response;
}
