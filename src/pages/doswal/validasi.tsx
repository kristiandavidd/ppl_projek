import React, { useState } from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import {Bell} from 'tabler-icons-react'
import { Input, Select, Option } from '@material-tailwind/react';
import TabelMahasiswa from '@/components/tabel_mhs';
import ButtonValidasi from '../../components/button_validasi';
import { IRS, KHS, PKL, Skripsi } from '../../config/Data_IRS_KHS_PKL_Skripsi';

export default function Validasi() {
    const userData = {
        role: 'doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
    };

    const [selectedData, setSelectedData] = useState(null);

    const handleButtonValidasiClick = (data: any) => {
        if (selectedData === data) {
        setSelectedData(null);
        } else {
        setSelectedData(data);
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
                        title={'IRS'}
                        onClick={() => handleButtonValidasiClick(IRS)}
                        selected={selectedData === IRS}
                        count={IRS.length}
                    />
                    <ButtonValidasi
                        title={'KHS'}
                        onClick={() => handleButtonValidasiClick(KHS)}
                        selected={selectedData === KHS}
                        count={KHS.length}
                    />
                    <ButtonValidasi
                        title={'PKL'}
                        onClick={() => handleButtonValidasiClick(PKL)}
                        selected={selectedData === PKL}
                        count={PKL.length}
                    />
                    <ButtonValidasi
                        title={'Skripsi'}
                        onClick={() => handleButtonValidasiClick(Skripsi)}
                        selected={selectedData === Skripsi}
                        count={Skripsi.length}
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
                            {selectedData && <TabelMahasiswa mhsValidasi={selectedData}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
