import React, { ChangeEvent, useState } from "react";
import UploadFile from "./uploadFile";
import { all } from "axios";

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

export default function ModalEditFoto({
  isvisible,
  onClose,
  data,
  role,
}: ModalProps): JSX.Element | "" {
  const [uploadedFileName, setUploadedFileName] = React.useState("");

  
  if (!isvisible) {
    return "";
}


  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 5 * 1024 * 1024; // Ubah batasan ukuran menjadi 5 MB
      const allowedExtensions = ["jpg", "jpeg", "png"];

      if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
        alert(
          "Hanya file dengan format JPG, JPEG, atau PNG yang dapat diunggah!"
        );
        event.target.value = ""; // Reset input file
        setUploadedFileName("");
      } else if (fileSize > maxFileSize) {
        alert("Ukuran file terlalu besar. Maksimal ukuran file adalah 5 MB.");
        event.target.value = ""; // Reset input file
        setUploadedFileName("");
      } else {
        setUploadedFileName(fileName);
      }
    }
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 5 * 1024 * 1024; // Ubah batasan ukuran menjadi 5 MB
      const allowedExtensions = ["jpg", "jpeg", "png"];

      if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
        alert(
          "Hanya file dengan format JPG, JPEG, atau PNG yang dapat diunggah!"
        );
        setUploadedFileName("");
      } else if (fileSize > maxFileSize) {
        alert("Ukuran file terlalu besar. Maksimal ukuran file adalah 5 MB.");
        setUploadedFileName("");
      } else {
        setUploadedFileName(fileName);
      }
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full lg:w-[150%] bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold">Ubah Foto Profil</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <div>
            <UploadFile
              handleFileUpload={handleFileUpload}
              handleDrop={handleDrop}
              handleDragOver={handleDragOver}
              uploadedFileName={uploadedFileName}
              type={".jpg, .jpeg, .png"}
              maxFileSize={"5 MB"}
            />
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
          </div>
        </div>
      </div>
    </div>
  );
}
