import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar';
import { EmptyLayout } from '@/components/layout';


export default function Home() {
  return (
    <EmptyLayout pageTitle='Landing Page'>
      <div
        className="bg-center bg-auto lg:w-screen lg:h-screen h-fit m-font"
        style={{
          backgroundImage: "url('../../bg-landing.png')",
        }}
      >
    <div className='w-full h-screen  flex flex-col justify-center items-center '>
      <h1 className="font-display max-w-[704px] bg-gradient-to-br from-blue-900 to-blue-500 bg-clip-text p-4 pb-0 text-center text-4xl font-bold tracking-[-0.02em] text-slate-900 text-transparent drop-shadow-sm m-4">Selamat Datang di Sistem informasi <br />Informatika Universitas Diponegoro!</h1>
      <p className='m-2'>Silakan masuk untuk mendapatkan akses.</p>
      <a href="/login" type="button" className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-200 w-1/5 text-center">Login</a>
      
    </div>
    </div>
    </EmptyLayout>
  )
}
