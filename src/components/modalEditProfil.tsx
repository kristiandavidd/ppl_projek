import React, { ChangeEvent, useEffect, useState } from "react";

type Data = {
  [key: string]: {
    title: string;
    value: string;
  }[];
};

type ModalProps = {
  isvisible: boolean;
  onClose: () => void;
  data: Data;
  role: string;
};

export default function ModalEditProfil({
  isvisible,
  onClose,
  data,
  role,
}: ModalProps): JSX.Element | null {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [provinces, setProvinces] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleProvinceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setSelectedCity(""); // Reset pilihan kabupaten/kota
    fetchCities(provinceId);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((data) => setProvinces(data));
  }, []);

  const fetchCities = (provinceId: string) => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
  };
  

  if (!isvisible) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full lg:w-[150%] bg-white max-w-4xl outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold">Ubah Data</h3>
          </div>
          <div className="relative p-6 flex-auto ">
            <form>
              <div className="grid grid-cols-2 gap-3 ">
                {data[role].map((item: { title: string; value: string }) => (
                  <div key={item.title}>
                    <label className="block text-sm font-bold text-gray-700">
                      {item.title}
                    </label>
                    {item.title === "Status" ? (
                      <select
                        name={item.title}
                        value={formData[item.title] || item.value}
                        onChange={(e) =>
                          handleSelectChange(item.title, e.target.value)
                        }
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                      >
                        <option value="Aktif">Aktif</option>
                        <option value="Cuti">Cuti</option>
                        <option value="Mangkir">Mangkir</option>
                        <option value="Drop Out">Drop Out</option>
                        <option value="Undur Diri">Undur Diri</option>
                        <option value="Lulus">Lulus</option>
                        <option value="Meninggal Dunia">Meninggal Dunia</option>
                      </select>
                    ) : item.title === "Semester" ? (
                      <select
                        name={item.title}
                        value={formData[item.title] || item.value}
                        onChange={(e) =>
                          handleSelectChange(item.title, e.target.value)
                        }
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                      >
                        {Array.from({ length: 14 }, (_, i) => (
                          <option key={i} value={(i + 1).toString()}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    ) : item.title === "Jalur Masuk" ? (
                      <select
                        name={item.title}
                        value={formData[item.title] || item.value}
                        onChange={(e) =>
                          handleSelectChange(item.title, e.target.value)
                        }
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                      >
                        <option value="SNMPTN">SNMPTN</option>
                        <option value="SBMPTN">SBMPTN</option>
                        <option value="Mandiri">Mandiri</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    ) : item.title === "Provinsi" ? (
                      <select
                        value={selectedProvince}
                        onChange={handleProvinceChange}
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                      >
                        {provinces.length > 0 ? (
                          provinces.map((province: any) => (
                            <option key={province.id} value={province.id}>
                              {province.name}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>
                            Memuat...
                          </option>
                        )}
                      </select>
                    ) : item.title === "Kab/Kota" ? (
                      <select
                        name={item.title}
                        value={selectedCity}
                        onChange={(e) =>
                          handleCityChange(e)
                        }
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                      >
                        {cities.map((city: any) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        name={item.title}
                        value={formData[item.title] || item.value}
                        placeholder={item.title}
                        onChange={handleInputChange}
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                        disabled={
                          item.title === "Nama" ||
                          item.title === "NIM" ||
                          item.title === "Email" ||
                          item.title === "NIP" ||
                          item.title === "Angkatan"
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-red-500 text-white active-bg-red-600 font-bold text-xs px-3 py-2 rounded shadow hover-shadow-lg outline-none focus-outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => onClose()}
                >
                  Batalkan
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white active-bg-green-600 font-bold text-xs px-3 py-2 rounded shadow hover-shadow-lg outline-none focus-outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => onClose()}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
