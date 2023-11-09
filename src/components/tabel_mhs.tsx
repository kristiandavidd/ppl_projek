import React, { useState } from 'react';
import ModalValidasi from './modalValidasi';
import { Button } from '@material-tailwind/react';

interface MahasiswaData {
  NIM: string;
  Nama: string;
  Semester: string;
  Angkatan: string;
  [key: string]: string;
}

interface TabelMahasiswaProps {
  mhsValidasi: MahasiswaData[];
}

const TabelMahasiswa = ({ mhsValidasi }: TabelMahasiswaProps) => {
  const columns = Object.keys(mhsValidasi[0]).slice(0, 4);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<MahasiswaData>({
    NIM: "",
    Nama: "",
    Semester: "",
    Angkatan: "",
  });

  const openModal = (data: MahasiswaData) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (
    <div className=''>
      <table className='w-full rounded-xl'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className=' bg-blue-100'>
                {column}
              </th>
            ))}
            <th className='bg-blue-100'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {mhsValidasi.map((data, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className='text-center'>
                  {data[column]}
                </td>
              ))}
              <td className='flex justify-center py-2'>
                <Button
                  className='bg-blue-500 hover-bg-blue-700 text-white py-2 px-4 rounded'
                  onClick={() => openModal(data)}
                >
                  Validasi
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalValidasi isvisible={showModal} onClose={() => setShowModal(false)} data={selectedData} />
    </div>
  );
};

export default TabelMahasiswa;
