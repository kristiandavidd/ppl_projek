import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import {Bell} from 'tabler-icons-react'

export default function BeritaAcara() {
    const userData = {
        role: 'departemen', 
        name: 'Departemen Informatika',
        idNumber: 'Fakultas Sains dan Matematika',
    };
    return (
        <EmptyLayout pageTitle="Berita Acara">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
            <Sidebar data={userData} />
            <div className="w-full pb-16 p-10">
            <div className='flex w-full justify-between'>
                <h2 className='font-semibold text-lg'>Berita Acara</h2>
                <Bell size={28} strokeWidth={1.5}></Bell>
            </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
