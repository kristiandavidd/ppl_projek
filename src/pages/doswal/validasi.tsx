import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import {Bell, Select, Table} from 'tabler-icons-react'
import { Input } from '@material-tailwind/react';
import TabelMahasiswa from '@/components/tabel_mhs_validasi';

export default function Validasi() {
    const userData = {
        role: 'doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
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
                    <div className='bg-blue-gray-50 shadow-lg shadow-blue-500/20 rounded-lg p-4'>
                        <div className='flex'>
                            <div className='flex w-5/6'>
                                <Input
                                    color='blue'
                                    label='Cari Mahasiswa'
                                    type='text'
                                    className='border border-gray-300 rounded-md'>
                                </Input>
                            </div>
                            <div className='w-1/6 flex items-center justify-center border border-gray-400 rounded-md ml-5'>
                                <select className='bg-blue-gray-50 text-sm'>
                                    <option>Urutkan</option>
                                    <option value={'NIM'}>NIM</option>
                                    <option value={'Semester'}>Semester</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <TabelMahasiswa />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
