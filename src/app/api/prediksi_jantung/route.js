import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    // Ambil token dari cookie
    const cookieStore = cookies();
    const token = await cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Verifikasi token
    let payload;
    try {
      payload = jwt.verify(token, SECRET_KEY);
    } catch (err) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const { user_id } = payload;

    // Ambil data input dari body
    const data = await req.json();

    // Insert ke table
    const { error } = await supabase.from("prediksi_penyakit_jantung").insert([
      {
        user_id,
        age: data.age,
        sex: data.sex,
        cp: data.cp,
        trestbps: data.trestbps,
        chol: data.chol,
        fbs: data.fbs,
        restecg: data.restecg,
        thalach: data.thalach,
        exang: data.exang,
        oldpeak: data.oldpeak,
        slope: data.slope,
        ca: data.ca,
        thal: data.thal,
      },
    ]);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Data prediksi berhasil disimpan" });
  } catch (err) {
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
