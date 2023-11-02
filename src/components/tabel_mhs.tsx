import React from 'react';

interface TabelMahasiswaProps {
  mhsValidasi: {
    NIM: string;
    Nama: string;
    Semester: string;
  }[];
}

const TabelMahasiswa = ({ mhsValidasi }: TabelMahasiswaProps) => {
  const columns = Object.keys(mhsValidasi[0]) as (keyof typeof mhsValidasi[0])[];

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
                  <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
                    Validasi
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelMahasiswa;
