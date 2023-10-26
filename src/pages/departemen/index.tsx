import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/sidebar';
import { EmptyLayout } from '@/components/layout';
import TopProfile from '@/components/top_profile';
import ProfileContainer from '@/components/profileContainer';
import { profileData } from '@/config/profile_config';
import { Bell } from 'tabler-icons-react';

export default function Home() {
    const userData = {
        role: 'departemen', 
        name: 'Departemen Informatika',
        idNumber: 'Fakultas Sains dan Matematika',
    };
    return (
        <EmptyLayout pageTitle="Dashboard">
            <div className="flex w-full h-full backdrop-blur-3xl">
                <Sidebar data={userData} />
                <div className="w-full pb-16 p-10">
                    <div className='flex w-full justify-between'>
                        <h2 className='font-semibold text-lg'>Profil</h2>
                        <Bell size={28} strokeWidth={1.5}></Bell>
                    </div>
                    <div className='relative top-[-50px]'>
                        <TopProfile data={userData}/>
                        <div className='mt-5 w-full bg-blue-50 text-sm p-4 rounded-lg shadow-lg shadow-blue-500/20 '>
                            <h2 className='font-bold text-md'>Visi</h2>
                            <p>Pada tahun 2025 Program Studi Informatika menjadi program studi berbasis riset yang unggul dan bereputasi internasional di bidang algoritma, komputasi cerdas, dan data analytics.</p>
                        </div>
                        <div className='mt-5 w-full bg-blue-50 text-sm p-4 rounded-lg shadow-lg shadow-blue-500/20 '>
                            <h2 className='font-bold text-md'>Misi</h2>
                            <ol className='list-decimal px-4'>
                                <li>Melakukan peningkatan kualitas pendidikan melalui akselerasi keilmuan tenaga akademik dan mahasiswa yang diwujudkan dengan pembelajaran berbasis riset sehingga menghasilkan lulusan berkualitas unggul serta berdaya saing sesuai tuntutan kompetitif pasar kerja nasional maupun internasional.</li>
                                <li>Melaksanakan penelitian dan pengembangan keilmuan bidang informatika yang memiliki jangkauan, kualitas, serta skala internasional.</li>
                                <li>Melaksanakan kegiatan pengabdian masyarakat berupa pemberian solusi permasalahan di bidang informatika yang disesuaikan dengan kebutuhan masyarakat lokal maupun nasional sebagai wujud diseminasi penelitian.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </EmptyLayout>
    )
}
