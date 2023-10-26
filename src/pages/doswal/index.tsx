import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/sidebar';
import { sidebarData } from '@/config/sidebar_config';

export default function Home() {
    const userData = {
        role: 'doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
    };
    return (
        <>
        <div className="flex w-full h-full backdrop-blur-3xl">
            <Sidebar data={userData}/>
            <div className="w-full pb-16 p-7">
            </div>
        </div>
        </>
    )
}
