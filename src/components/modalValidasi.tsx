import React, { ChangeEvent, useState } from "react";

type MahasiswaData = {
  NIM: string;
  Nama: string;
  Semester: string;
  Angkatan: string;
  [key: string]: string; // Additional properties other than NIM, Nama, Semester, Angkatan
};

type ModalValidasiProps = {
  isvisible: boolean;
  onClose: () => void;
  data: MahasiswaData;
};

const ModalValidasi: React.FC<ModalValidasiProps> = ({ isvisible, onClose, data }) => {
  const [editedData, setEditedData] = useState<MahasiswaData>(data); // Initialize with the entire data object

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isvisible) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full lg:w-[150%] bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold">Validasi</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <form>
              {Object.keys(data).map((key) => {
                if (!["NIM", "Nama", "Semester", "Angkatan"].includes(key)) {
                  return (
                    <div key={key}>
                      <label className="block text-sm font-bold text-gray-700">{key}</label>
                      <input
                        type="text"
                        name={key}
                        value={data[key]}
                        onChange={handleInputChange}
                        className="border-2 mb-3 p-2 w-full rounded-lg"
                      />
                    </div>
                  );
                }
                return null;
              })}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-red-500 text-white active:bg-red-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => onClose()}
                >
                  Batalkan
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white active:bg-green-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={() => {
                    // Handle the save action here, e.g., call an API to update the data
                    onClose();
                  }}
                >
                  Konfirmasi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalValidasi;
