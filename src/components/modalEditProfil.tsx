import React, { ChangeEvent, useState } from "react";

type Data = {
    [key: string]: {
        title: string;
        value: string;
    }[];
};

type ModalProps = {
    isvisible: boolean;
    onClose: () => void;
    data: Data;
    role: string;
};

export default function ModalEditProfil({ isvisible, onClose, data, role }: ModalProps): JSX.Element | null {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (!isvisible) {
        return null;
    }

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full lg:w-[150%] bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-2xl font-semibold">Ubah Data</h3>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <form>
                            <div className="grid grid-cols-2 gap-3 ">
                                {data[role].map((item: { title: string; value: string }) => (
                                    <div key={item.title}>
                                        <label className="block text-sm font-bold text-gray-700">
                                            {item.title}
                                        </label>
                                        <input
                                            type="text"
                                            name={item.title}
                                            value={formData[item.title] || item.value}
                                            placeholder={item.title}
                                            onChange={handleInputChange}
                                            className="border-2 mb-3 p-2 w-full rounded-lg"
                                            disabled={
                                                item.title === "Nama" ||
                                                item.title === "NIM" ||
                                                item.title === "Email" ||
                                                item.title === "NIP" ||
                                                item.title === "Angkatan" 
                                            } 
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className="bg-red-500 text-white active:bg-red-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={() => onClose()}
                                >
                                    Batalkan
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white active:bg-green-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={() => onClose()}
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


