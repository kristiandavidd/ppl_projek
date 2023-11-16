import React from 'react';

interface CountRekapProps {
  angkatan: number;
  sudah: number;
  belum: number;
  onSelect: (type: string) => void;
  isActive: string;
}

export default function CountRekap({
  angkatan,
  sudah,
  belum,
  onSelect,
  isActive,
}: CountRekapProps) {
  return (
    <div className="rounded bg-blue-gray-50 px-5 py-2 justify-center items-center">
      <p className="w-full h-auto text-4xl text-gray-600 mt-3 text-center">
        {angkatan}
      </p>
      <div className="flex mt-3">
        <button
          className={`bg-green-500 rounded-md px-1 ${
            isActive === "sudah" ? 'bg-opacity-50' : ''
          }`}
          onClick={() => onSelect('sudah')}
        >
          <p className="w-full h-auto text-center text-gray-100">Sudah</p>
          <p className="w-full h-auto text-center text-gray-100 text-lg font-bold">
            {sudah}
          </p>
        </button>
        <button
          className={`bg-red-400 rounded-md px-1 ml-1 ${
            isActive === "belum" ? 'bg-opacity-50' : ''
          }`}
          onClick={() => onSelect('belum')}
        >
          <p className="w-full h-auto text-center text-gray-100">Belum</p>
          <p className="w-full h-auto text-center text-gray-100 text-lg font-bold">
            {belum}
          </p>
        </button>
      </div>
    </div>
  );
}
