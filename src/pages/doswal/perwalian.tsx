import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import { Input, Select, Option } from '@material-tailwind/react';
import {Bell} from 'tabler-icons-react'

export default function Perwalian() {
    const userData = {
        role: 'doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
    };
    return (
        <EmptyLayout pageTitle="Perwalian">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
            <Sidebar data={userData} />
            <div className="w-full pb-16 p-10">
                <div className='flex w-full justify-between'>
                    <h2 className='font-semibold text-lg'>Perwalian</h2>
                    <Bell size={28} strokeWidth={1.5}></Bell>
                </div>
                <div className='bg-blue-50 shadow-lg shadow-blue-500/20 rounded-lg p-4 mt-5'>
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
                    </div>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
