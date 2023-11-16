import React, { useState } from 'react';
import { EmptyLayout } from '@/components/layout'
import Sidebar from '@/components/sidebar'
import { Input, Select, Option, Button, Typography } from '@material-tailwind/react';
import {Bell} from 'tabler-icons-react'
import CountRekap from '../../components/countRekap';
import { PKL } from "@/config/Data_IRS_KHS_PKL_Skripsi";
import TabelPKL from '../../components/tabelPKL';

const TABLE_HEAD = ["NIM", "Nama", "Angkatan", "Nilai"];

export default function ViewPKLWali() {
    const userData = {
        role: 'doswal',
        name: 'Andi Kurnia',
        idNumber: '199603032022041001',
    };

    const [select, setSelect] = useState("");
    const [isTableVisible, setTableVisibility] = useState(false);

    const handleSelect = (option: string) => {
        if (select === option) {
            setSelect('');
            setTableVisibility(false);
        } else {
            setSelect(option);
            setTableVisibility(true);
        }
    }

    return (
        <EmptyLayout pageTitle="Perwalian">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
            <Sidebar data={userData} />
            <div className="w-full pb-16 p-10">
                <div className='flex w-full justify-between'>
                    <h2 className='font-semibold text-lg'>PKL Perwalian</h2>
                    <Bell size={28} strokeWidth={1.5}></Bell>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-center gap-16'>
                        <CountRekap angkatan={2016} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                        <CountRekap angkatan={2017} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                        <CountRekap angkatan={2018} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                        <CountRekap angkatan={2019} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                    </div>
                    <div className='flex justify-center gap-16 mt-5'>
                        <CountRekap angkatan={2020} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                        <CountRekap angkatan={2021} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                        <CountRekap angkatan={2022} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                        <CountRekap angkatan={2023} sudah={45} belum={87} onSelect={handleSelect} isActive={select}></CountRekap>
                    </div>
                    <div className='mt-10 justify-center flex'>
                        <Button size='sm' color='blue' onClick={() => window.print()}>Cetak</Button>
                    </div>
                </div>
                <div className='shadow-lg shadow-blue-500/20 rounded-lg p-4 mt-5'>
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
                        {isTableVisible && <TabelPKL PKL={PKL} select={select}></TabelPKL>}
                    </div>
                </div>
            </div>
        </div>
        </EmptyLayout>
    )
}
