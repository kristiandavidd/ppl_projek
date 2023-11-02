import React, { useState } from 'react';
import ModalValidasi from './modalValidasi';

interface TabelMahasiswaProps {
  mhsValidasi: {
    NIM: string;
    Nama: string;
    Semester: string;
    SKS_Semester: string;
    IP_Semester: string;
    SKS_Kumulatif: string;
    IP_Kumulatif: string;
  }[];
}

const TabelMahasiswa = ({ mhsValidasi }: TabelMahasiswaProps) => {
  const columns = Object.keys(mhsValidasi[0]).slice(0, 4);
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const openModal = (data: any) => {
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
                <td className='flex justify-center'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
                  onClick={() => openModal(data)}
                >
                  Validasi
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalValidasi isvisible={showModal} onClose={() => setShowModal(false)} data={mhsValidasi} />
    </div>
  );
};

export default TabelMahasiswa;
