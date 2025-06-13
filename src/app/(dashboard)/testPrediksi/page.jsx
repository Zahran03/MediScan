"use client";
import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

export default function PrediksiPage() {
  const [model, setModel] = useState(null);
  const [hasil, setHasil] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const m = await tf.loadLayersModel("/models/heart/model.json");
        setModel(m);
        console.log("✅ Model berhasil dimuat:", m.inputs[0].shape);
      } catch (err) {
        console.error("❌ Gagal load model:", err);
      }
    };
    loadModel();
    console.log("TFJS Version:", tf.version.tfjs);
  }, []);

  const handlePrediksi = () => {
    if (!model) return alert("Model belum siap");

    // Contoh input dummy: [[1 timestep, 13 fitur]]
    const input = tf.tensor3d(
      [[63, 1, 3, 145, 233, 1, 0, 150, 0, 2.3, 0, 0, 1]],
      [1, 1, 13]
    ); // [batch, timeStep, features]

    const pred = model.predict(input);
    pred.data().then((result) => {
      console.log("Prediksi:", result);
      setHasil(result[0] > 0.5 ? "Berisiko" : "Tidak Berisiko");
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Prediksi Penyakit Jantung</h1>
      <button
        onClick={handlePrediksi}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Mulai Prediksi
      </button>
      {hasil && (
        <div className="mt-4 text-lg font-semibold">Hasil: {hasil}</div>
      )}
    </div>
  );
}
