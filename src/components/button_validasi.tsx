    import React from 'react';
    import { useState } from 'react';

    interface ButtonValidasiProps {
        title: string;
        selected: boolean;
        count: number
        onClick: () => void;
    }

    export default function ButtonValidasi({ title, selected, count, onClick }: ButtonValidasiProps) {

    return (
        <div 
        className={`w-1/6 rounded-lg ${selected ? 'bg-blue-500' : 'bg-blue-gray-50'} border border-gray-50 justify-center items-center px-5 py-2 mb-5`}
        onClick={onClick}>
        <p className={`w-full h-auto text-center ${selected ? 'text-white' : 'text-gray-600'}`}>{title}</p>
        <button className={`w-full h-auto text-7xl ${selected ? 'text-white' : 'text-gray-600'}`}>{count}</button>
        <p className={`w-full h-auto text-center ${selected ? 'text-white' : 'text-gray-600'}`}>Berkas</p>
        </div>
    );
    }
