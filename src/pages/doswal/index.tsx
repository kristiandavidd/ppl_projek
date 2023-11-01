import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/sidebar';
import { sidebarData } from '@/config/sidebar_config';
import { EmptyLayout } from '@/components/layout';
import TopProfile from '@/components/top_profile';
import ProfileContainer from '@/components/profileContainer';
import { profileData } from '@/config/profile_config';
import { profileDataMerge } from '@/config/profile_data_merge';
import { Bell } from 'tabler-icons-react';
import BottomProfile from '@/components/bottom_profile';

export default function Home() {
    const userData = {
        role: 'Doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
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
                        <div className='flex gap-4'>
                            <ProfileContainer data={...profileData.leftDoswal} />
                            <ProfileContainer data={...profileData.rightDoswal} />
                        </div>
                        <BottomProfile data={profileDataMerge} role={userData.role}/>
                    </div>
                </div>
            </div>
        </EmptyLayout>
        
    )
}
