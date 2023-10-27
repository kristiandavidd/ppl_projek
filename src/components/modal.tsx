import { on } from "events";
import React, { useState } from "react";

export default function Modal({isvisible, onClose} ) {
    if (!isvisible) return null;
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    email: "",
    address: "",
    angkatan: "",
    semester: "",
    jalurMasuk: "",
    nomorTelepon: "",
    alamat: "",
    kabupatenKota: "",
    provinsi: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
  };

  return (
    <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full lg:w-[150%] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Ubah Data</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        {/* Nama */}
                        <label className="block text-sm font-bold text-gray-700">
                          Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nama"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                          disabled
                        />
                        {/* NIM */}
                        <label className="block text-sm font-bold text-gray-700">
                          NIM
                        </label>
                        <input
                          type="text"
                          name="nim"
                          value={formData.nim}
                          onChange={handleInputChange}
                          placeholder="NIM"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                          disabled
                        />
                        {/* Email */}
                        <label className="block text-sm font-bold text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                          disabled
                        />
                        {/* Angkatan */}
                        <label className="block text-sm font-bold text-gray-700">
                          Angkatan
                        </label>
                        <input
                          type="text"
                          name="angkatan"
                          value={formData.angkatan}
                          onChange={handleInputChange}
                          placeholder="Angkatan"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                        {/* Semester */}
                        <label className="block text-sm font-bold text-gray-700">
                          Semester
                        </label>
                        <input
                          type="text"
                          name="semester"
                          value={formData.semester}
                          onChange={handleInputChange}
                          placeholder="Semester"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                      </div>
                      <div>
                        {/* Jalur Masuk */}
                        <label className="block text-sm font-bold text-gray-700">
                          Jalur Masuk
                        </label>
                        <input
                          type="text"
                          name="jalurMasuk"
                          value={formData.jalurMasuk}
                          onChange={handleInputChange}
                          placeholder="Jalur Masuk"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                        {/* Nomor Telepon */}
                        <label className="block text-sm font-bold text-gray-700">
                          Nomor Telepon
                        </label>
                        <input
                          type="text"
                          name="nomorTelepon"
                          value={formData.nomorTelepon}
                          onChange={handleInputChange}
                          placeholder="Nomor Telepon"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                        {/* Alamat */}
                        <label className="block text-sm font-bold text-gray-700">
                          Alamat
                        </label>
                        <input
                          type="text"
                          name="alamat"
                          value={formData.alamat}
                          onChange={handleInputChange}
                          placeholder="Alamat"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                        {/* Kabupaten/Kota */}
                        <label className="block text-sm font-bold text-gray-700">
                          Kab/Kota
                        </label>
                        <input
                          type="text"
                          name="kabupatenKota"
                          value={formData.kabupatenKota}
                          onChange={handleInputChange}
                          placeholder="Kabupaten/Kota"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                        {/* Provinsi */}
                        <label className="block text-sm font-bold text-gray-700">
                          Provinsi
                        </label>
                        <input
                          type="text"
                          name="provinsi"
                          value={formData.provinsi}
                          onChange={handleInputChange}
                          placeholder="Provinsi"
                          className="border-2 mb-3 p-2 w-full rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">

                        <button
                            type="submit"
                            className="bg-red-500 text-white active:bg-red-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={()=> onClose()}
                            >
                            Batalkan
                            </button>
                            <button
                            type="submit"
                            className="bg-green-500 text-white active:bg-green-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={()=> onClose()}
                            >
                            Simpan
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
