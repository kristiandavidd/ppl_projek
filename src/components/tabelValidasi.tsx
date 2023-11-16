import React, { useState } from 'react';
import ModalValidasi from './modalValidasi';
import { Button, Typography } from '@material-tailwind/react';

interface MahasiswaData {
  NIM: string;
  Nama: string;
  Semester: string;
  Angkatan: string;
  [key: string]: string;
}

interface TabelValidasiProps {
  mhsValidasi: MahasiswaData[];
}

const TabelValidasi = ({ mhsValidasi }: TabelValidasiProps) => {
  const columns = Object.keys(mhsValidasi[0]).slice(0, 4);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<MahasiswaData>({
    NIM: '',
    Nama: '',
    Semester: '',
    Angkatan: '',
  });

  const openModal = (data: MahasiswaData) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (
    <div className="mt-4">
      <div className="">
        <table className="w-full min-w-max table-auto text-center border rounded-xl overflow-hidden">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {column}
                  </Typography>
                </th>
              ))}
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {mhsValidasi.map((data, rowIndex) => (
              <tr key={rowIndex} className="even:bg-blue-gray-50/50">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data[column]}
                    </Typography>
                  </td>
                ))}
                <td className="p-4">
                  <Button
                    variant="filled"
                    color="blue"
                    size="sm"
                    onClick={() => openModal(data)}
                  >
                    Validasi
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalValidasi
        isvisible={showModal}
        onClose={() => setShowModal(false)}
        data={selectedData}
      />
    </div>
  );
};

export default TabelValidasi;
