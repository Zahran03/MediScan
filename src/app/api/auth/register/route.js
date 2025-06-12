import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { username, password } = await req.json();

  // Cek apakah username sudah ada
  const { data: existingUser } = await supabase
    .from("users")
    .select("username")
    .eq("username", username)
    .single();

  if (existingUser) {
    return NextResponse.json(
      { error: "Username already exists" },
      { status: 400 }
    );
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Simpan ke Supabase
  const { error } = await supabase
    .from("users")
    .insert([{ username, password: hashedPassword }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 200 }
  );
}
