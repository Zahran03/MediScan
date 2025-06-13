import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // pastikan path ini sesuai

export async function GET() {
  // Ambil data dari Supabase
  const { data, error } = await supabase
    .from("prediksi_penyakit_jantung")
    .select("*")
    .order("created_at", { ascending: false }); // contoh: urutkan terbaru dulu

  if (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
