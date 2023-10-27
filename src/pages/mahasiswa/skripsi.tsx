import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import {Bell} from 'tabler-icons-react'

export default function Skripsi() {
    const userData = {
        role: 'mhs',
        name: 'Susanto Situmeang',
        idNumber: '24060121130092',
    };
    return (
        <EmptyLayout pageTitle="Skripsi">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
            <Sidebar data={userData} />
            <div className="w-full pb-16 p-10">
            <div className='flex w-full justify-between'>
                <h2 className='font-semibold text-lg'>Skripsi</h2>
                <Bell size={28} strokeWidth={1.5}></Bell>
            </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
