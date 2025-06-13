"use client";

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    user_id: "123e4567-e89b-12d3-a456-426614174000", // contoh UUID, ganti sesuai user login
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/prediksi_jantung", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          age: parseInt(formData.age),
          sex: parseInt(formData.sex),
          cp: parseInt(formData.cp),
          trestbps: parseInt(formData.trestbps),
          chol: parseInt(formData.chol),
          fbs: parseInt(formData.fbs),
          restecg: parseInt(formData.restecg),
          thalach: parseInt(formData.thalach),
          exang: parseInt(formData.exang),
          oldpeak: parseFloat(formData.oldpeak),
          slope: parseInt(formData.slope),
          ca: parseInt(formData.ca),
          thal: parseInt(formData.thal),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(`Error: ${result.error}`);
      } else {
        alert("Data berhasil disimpan!");
        router.push("/history");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat submit data");
    }
  };

  return (
    <div className="flex h-screen font-[Inter]">
      <Sidebar />
      <div className="flex-1 p-12 bg-[#13273c] text-white box-border justify-center items-center">
        <div className="absolute top-5 right-8 text-lg font-bold">Admin</div>
        <div className="w-full h-[2px] bg-white opacity-60 my-4"></div>
        <div className="w-full flex justify-center items-center">
          <div className="mt-12 w-[60%] flex flex-col rounded-lg p-8 border-white border-2 items-center">
            <h1 className="text-3xl max-w-[500px] text-center">
              Input Data Kesehatan Prediksi Penyakit Jantung
            </h1>

            <div className="w-full flex gap-4 mt-4">
              <form onSubmit={handleSubmit} className="w-full flex flex-col">
                <div className="w-full flex gap-4">
                  <div className="w-1/2 flex flex-col ">
                    <div className="mb-4">
                      <label>Umur</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data Umur"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Skala Nyeri Dada</label>
                      <select
                        name="cp"
                        value={formData.cp}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                      >
                        <option value="">Pilih Skala</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label>Kadar Kolesterol</label>
                      <input
                        type="number"
                        name="chol"
                        value={formData.chol}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data Kadar Kolesterol"
                      />
                    </div>
                    <div className="mb-4">
                      <label>EKG Saat Istirahat</label>
                      <input
                        type="number"
                        name="restecg"
                        value={formData.restecg}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data EKG Saat Istirahat"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Angina Saat Olahraga</label>
                      <input
                        type="number"
                        name="exang"
                        value={formData.exang}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data Angina Saat Olahraga"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Kemiringan Segmen ST</label>
                      <input
                        type="number"
                        name="slope"
                        value={formData.slope}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data Kemiringan Segmen ST"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Jenis Talasemia</label>
                      <select
                        name="thal"
                        value={formData.thal}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                      >
                        <option value="">Pilih</option>
                        <option value="0">Normal</option>
                        <option value="1">Cacat Tetap</option>
                        <option value="2">Cacat yang Dapat Dipulihkan</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <div className="mb-4">
                      <label>Jenis Kelamin</label>
                      <select
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="1">Laki-laki</option>
                        <option value="0">Perempuan</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label>Tekanan Darah Saat Istirahat</label>
                      <input
                        type="number"
                        name="trestbps"
                        value={formData.trestbps}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data Tekanan Darah Saat Istirahat"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Gula Darah Puasa &gt; 120mg</label>
                      <select
                        name="fbs"
                        value={formData.fbs}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                      >
                        <option value="">Pilih</option>
                        <option value="1">Iya</option>
                        <option value="0">Tidak</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label>Detak Jantung Maksimum</label>
                      <input
                        type="number"
                        name="thalach"
                        value={formData.thalach}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        placeholder="Masukkan data Detak Jantung Maksimum"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Depresi ST</label>
                      <input
                        type="number"
                        name="oldpeak"
                        value={formData.oldpeak}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                        step="0.1"
                        placeholder="Masukkan data Depresi ST"
                      />
                    </div>
                    <div className="mb-4">
                      <label>Jumlah Pembulu Darah Utama yang diwarnai</label>
                      <select
                        name="ca"
                        value={formData.ca}
                        onChange={handleChange}
                        className="w-full mt-1.5 bg-white rounded text-black"
                      >
                        <option value="">Pilih</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <button
                    type="submit"
                    className="w-[35%] bg-[#3191E6] text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#13273c] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
