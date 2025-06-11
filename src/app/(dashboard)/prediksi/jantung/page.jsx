import React from "react";
import Sidebar from "../../components/Sidebar";

const page = () => {
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
              <form action="" className="w-full flex flex-col">
                <div className="w-full flex gap-4">
                  <div className="w-1/2 flex flex-col ">
                    <div className="mb-4">
                      <label htmlFor="">Umur</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Skala Nyeri Dada</label>
                      <input
                        type="text"
                        className="w-full  mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Kadar Kolesterol</label>
                      <input
                        type="text"
                        className="w-full  mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">EKG Saat Istirahat</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Angina Saat Olahraga</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Kemiringan Segmen ST</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Jenis Talasemia</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <div className="mb-4">
                      <label htmlFor="">Jenis Kelamin</label>
                      <input
                        type="text"
                        className="w-full  mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Tekanan Darah Saat Istirahat</label>
                      <input
                        type="text"
                        className="w-full  mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Gula Darah Puasa &gt; 120mg</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Detak Jantung Maksimum</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Depresi ST</label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">
                        Jumlah Pembulu Darah Utama yang diwarnai
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1.5 bg-white rounded"
                      />
                    </div>
                  </div>
                </div>
                {/* right section */}
                <div className="w-full flex justify-center mt-4">
                  <button className="w-[35%] bg-[#3191E6] text-white border-2 border-white rounded-lg px-4 py-2 hover:bg-white hover:text-[#13273c] transition-colors">
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

export default page;
