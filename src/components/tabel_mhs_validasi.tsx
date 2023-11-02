import React from 'react';
import { mhsValidasi } from '../config/mahasiswa_validasi_config';
import { Button } from '@material-tailwind/react';

const TabelMahasiswa = () => {
  const dataMahasiswa = mhsValidasi.mahasiswa;

  return (
    <div className=''>
      <table className='w-full border border-gray-400 border-separate rounded-xl'>
        <thead>
          <tr>
            <th className='border border-gray-400'>NIM</th>
            <th className='border border-gray-400'>Nama</th>
            <th className='border border-gray-400'>Semester</th>
            <th className='border border-gray-400'>IRS</th>
          </tr>
        </thead>
        <tbody>
          {dataMahasiswa.map((mahasiswa, index) => (
            <tr key={index}>
              <td className='text-center border border-gray-400'>{mahasiswa.NIM}</td>
              <td className='text-center border border-gray-400'>{mahasiswa.Nama}</td>
              <td className='text-center border border-gray-400'>{mahasiswa.Semester}</td>
              <td className='text-center border border-gray-400'>
                <button className='text-white bg-blue-500 hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-200'>
                    Lihat IRS
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
