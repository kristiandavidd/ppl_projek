import React from 'react'
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import {Bell} from 'tabler-icons-react'

export default function ResetPassword() {
    const userData = {
        role: 'operator', 
        name: 'Mario Susanti',
        idNumber: '199603032022041005',
    };
    return (
        <EmptyLayout pageTitle="Reset Password">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
            <Sidebar data={userData} />
            <div className="w-full pb-16 p-10">
            <div className='flex w-full justify-between'>
                <h2 className='font-semibold text-lg'>Reset Password</h2>
                <Bell size={28} strokeWidth={1.5}></Bell>
            </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
