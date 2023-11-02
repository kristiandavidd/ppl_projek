import React, { useState } from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import {Bell} from 'tabler-icons-react'
import { Input, Select, Option } from '@material-tailwind/react';
import TabelMahasiswa from '@/components/tabel_mhs';
// import { mhsTabel } from '../../config/mahasiswa_tabel_config';
import { mhsValidasi  } from '../../config/mahasiswa_validasi_config';
import ButtonValidasi from '../../components/button_validasi';

export default function Validasi() {
    const userData = {
        role: 'doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
    };
    const [selectedTableData, setSelectedTableData] = useState(null);
    const [selectedVldData, setSelectedVldData] = useState(null);
    
    const handleButtonValidasiClick = (data) => {
        if (selectedTableData === data) {
            setSelectedTableData(null); // Tombol sudah aktif, klik lagi untuk menonaktifkannya
        } else {
        setSelectedTableData(data); // Aktifkan tombol yang lain
        setSelectedVldData(data)
        }
    };

    return (
        <EmptyLayout pageTitle="Validasi">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
            <Sidebar data={userData} />
            <div className="w-full pb-16 p-10">
                <div className='flex w-full justify-between'>
                    <h2 className='font-semibold text-lg'>Validasi</h2>
                    <Bell size={28} strokeWidth={1.5}></Bell>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-center gap-10'>
                    <ButtonValidasi
                        data={mhsValidasi.IRS}
                        title={'IRS'}
                        onClick={() => handleButtonValidasiClick(mhsValidasi.IRS)}
                        selected={selectedTableData === mhsValidasi.IRS }
                    />
                    <ButtonValidasi
                        data={mhsValidasi.KHS}
                        title={'KHS'}
                        onClick={() => handleButtonValidasiClick(mhsValidasi.KHS)}
                        selected={selectedTableData === mhsValidasi.KHS}
                    />
                    <ButtonValidasi
                        data={mhsValidasi.PKL}
                        title={'PKL'}
                        onClick={() => handleButtonValidasiClick(mhsValidasi.PKL)}
                        selected={selectedTableData === mhsValidasi.PKL}
                    />
                    <ButtonValidasi
                        data={mhsValidasi.Skripsi}
                        title={'Skripsi'}
                        onClick={() => handleButtonValidasiClick(mhsValidasi.Skripsi)}
                        selected={selectedTableData === mhsValidasi.Skripsi}
                    />
                    </div>
                    <div className='bg-blue-50 shadow-lg shadow-blue-500/20 rounded-lg p-4'>
                        <div className='flex'>
                            <div className='flex w-5/6'>
                                <Input
                                    color='blue'
                                    label='Cari Mahasiswa'
                                    type='text'
                                    className='border border-gray-300 rounded-md'>
                                </Input>
                            </div>
                            <div className='w-1/4 flex items-center justify-center rounded-md ml-3'>
                                <Select variant="outlined" label="Urutkan">
                                    <Option>NIM</Option>
                                    <Option>Angkatan</Option>
                                </Select>
                            </div>
                        </div>
                        <div className='mt-4'>
                            {selectedTableData && <TabelMahasiswa mhsValidasi={selectedTableData}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
