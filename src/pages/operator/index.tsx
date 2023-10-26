import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/sidebar';

export default function Home() {
    const userData = {
        role: 'operator', 
        name: 'Mario Susanti',
        idNumber: '199603032022041005',
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
