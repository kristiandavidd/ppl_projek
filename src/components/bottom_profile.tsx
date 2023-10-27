import React, { Fragment, useState } from 'react';
import Modal from './modal'; 

export default function BottomProfile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
        <div className='w-full flex gap-4 bg-blue-50 mt-5 justify-center shadow-lg shadow-blue-500/20 p-2'>
        <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-200"
        >
            Ubah Foto
        </button>
        <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-200"
        >
            Ubah Data
        </button>
        <Modal isvisible={showModal} onClose={()=> setShowModal(false)} />
        </div>
    </Fragment>
  );
}
