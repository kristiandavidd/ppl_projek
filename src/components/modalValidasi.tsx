import { Select, Option, Input } from "@material-tailwind/react";
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
  const [selectedStatus, setSelectedStatus] = useState(data.Status);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatusChange = (e: any) => {
    setSelectedStatus(e);
    setEditedData((prevData) => ({
      ...prevData,
      Status: e,
    }));
  }

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
          <div className="relative p-6 flex-auto flex w-auto">
            <div className="w-full pr-4">
              <div className="justify-center">
                <embed type="application/pdf" src="../../../test.pdf" className="h-96 w-full"></embed>
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <form>
                {Object.keys(data).map((key) => {
                  if (!["NIM", "Nama", "Semester", "Angkatan", "Status", "Nilai"].includes(key)) {
                    return (
                      <div key={key} className="mt-5 w-full" >
                        <Input
                          type="text"
                          label={key}
                          name={key}
                          value={editedData[key] || data[key]}
                          onChange={handleInputChange}
                          disabled={(data.Status !== "Lulus")?(key === "Nilai" || key === "Tanggal_Studi" || key === "Tanggal_Lulus" || key === "Lama_Studi") : false}
                        />
                      </div>
                    );
                  }
                  if (["Status"].includes(key)){
                    return (
                      <div key={key} className="mb-3">
                        <Select 
                          variant="outlined" 
                          label="Nilai" 
                          value={data.Nilai} 
                          name="Nilai"
                          onChange={(e) => handleStatusChange(e)}
                          >
                          <Option value="A">A</Option>
                          <Option value="B">B</Option>
                          <Option value="C">C</Option>
                          <Option value="D">D</Option>
                          <Option value="E">E</Option>
                        </Select>
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
    </div>
  );
};

export default ModalValidasi;
