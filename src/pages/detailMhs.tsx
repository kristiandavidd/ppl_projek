/* eslint-disable @next/next/no-img-element */
import React from "react";
import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import { Bell } from "tabler-icons-react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import BlueBoxModal from "@/components/blueBoxModal";
import GreenBoxModal from "@/components/greenBoxModal";
import YellowBoxModal from "@/components/yellowBoxModal";
import { ProgIrs, ProgKhs, ProgPkl, ProgSkripsi } from "@/config/progres_irs";

const data = {
  name: "Yusuf Febrian",
  nim: "24060121130073",
  angkatan: "2021",
  doswal: "Satriyo Adhy, S.Si, M.T",
};



export default function DetailMhs() {
  const [isBlueModalOpen, setBlueModalOpen] = React.useState(false);
  const [isGreenModalOpen, setGreenModalOpen] = React.useState(false);
  const [isYellowModalOpen, setYellowModalOpen] = React.useState(false);


  const userData = {
    role: "doswal",
    name: "Andi Kurnia",
    idNumber: "199603032022041001",
  };

  const handleBoxClick = (index: any) => {
    const boxColor = determineBoxColor(index);
  
    if (boxColor.includes("bg-blue-500")) {
      setBlueModalOpen(true);
    } else if (boxColor.includes("bg-yellow-500")) {
      setYellowModalOpen(true);
    } else if (boxColor.includes("bg-green-500")) {
      setGreenModalOpen(true);
    } else if (boxColor.includes("bg-red-500")) {
      // Tampilkan pesan kesalahan atau abaikan klik pada box merah
      console.log("Box merah tidak dapat diklik");
    }
  };
  

  const renderBoxes = () => {
    const totalBoxes = 14;
    const boxesPerRow = 5;
    const rows = Math.ceil(totalBoxes / boxesPerRow);

    const boxes = [];
    var isGreen = false;

    for (let row = 0; row < rows; row++) {
      const rowBoxes = [];
      for (let col = 0; col < boxesPerRow; col++) {
        const boxIndex = row * boxesPerRow + col;
        if (!isGreen) {
          const boxColor = determineBoxColor(boxIndex); // You need to implement determineBoxColor based on your criteria
          if (boxColor === "bg-green-500") {
            isGreen = true;
          }
          if (boxIndex < totalBoxes) {
            rowBoxes.push(
              <div
              key={boxIndex}
              className={`w-20 h-20 m-2 cursor-pointer flex items-center justify-center rounded-lg ${boxColor} hover:shadow-md`}
              onClick={() => handleBoxClick(boxIndex)}
              >
              <Typography className="text-white text-lg">
                {boxIndex + 1}
              </Typography>
            </div>
          );
          console.log(isGreen)
        }
      } else{
        const boxColor = "bg-red-500"; // You need to implement determineBoxColor based on your criteria
        if (boxIndex < totalBoxes) {
          rowBoxes.push(
            <div
            key={boxIndex}
            className={`w-20 h-20 m-2 cursor-pointer flex items-center justify-center rounded-lg ${boxColor} cursor-default`}
            // onClick={() => handleBoxClick(boxIndex)}
            >
            <Typography className="text-white text-lg">
              {boxIndex + 1}
            </Typography>
          </div>
        );
      }
      console.log(isGreen)
      }
    }
      boxes.push(
        <div key={row} className="flex justify-center">
          {rowBoxes}
        </div>
      );
    }

    return boxes;
  };

  const determineBoxColor = (index: number) => {
    const semester_aktif = determineSemesterAktif(index).toString(); // Mengonversi ke string
  
    // Temukan IRS terkait berdasarkan semester aktif
    const irs = ProgIrs.find((prog) => prog.semester_aktif === semester_aktif);
    const khs = ProgIrs.find((prog) => prog.semester_aktif === semester_aktif);
    const pkl = ProgIrs.find((prog) => prog.semester_aktif === semester_aktif);
    const skripsi = ProgIrs.find((prog) => prog.semester_aktif === semester_aktif);
  
    // Jika IRS ditemukan dan status_konfirmasi adalah "Disetujui"
   
      const irsCompleted = ProgIrs.some((prog) => prog.semester_aktif === semester_aktif);
      const khsCompleted = ProgKhs.some((prog) => prog.semester_aktif === semester_aktif);
      const pklCompleted = ProgPkl.some((prog) => prog.semester === semester_aktif);
      const skripsiCompleted = ProgSkripsi.some((prog) => prog.semester === semester_aktif);
  
      const isGreenBox = irsCompleted && khsCompleted && skripsiCompleted;
      const isYellowBox = irsCompleted && khsCompleted && pklCompleted;
  
      if (isGreenBox) {
        return "bg-green-500"; // Semua sudah selesai
      } else if (isYellowBox) {
        return "bg-yellow-500"; // IRS, KHS, dan PKL sudah selesai
      } else if (irsCompleted && khsCompleted) {
        return "bg-blue-500"; // IRS dan KHS sudah selesai
      } else{
        return "bg-red-500";
      }
  
    // Jika tidak memenuhi kondisi di atas, kembalikan warna default
  };
  
  
  
  // Fungsi determineSemesterAktif tetap sama seperti sebelumnya
  const determineSemesterAktif = (index: number): string => {
    const totalSemesters = ProgIrs.length;
    const semesterIndex = index % totalSemesters;
    // console.log(se,)
    console.log(ProgIrs[semesterIndex].semester_aktif);
    return ProgIrs[semesterIndex].semester_aktif;
  };
  
  

  return (
    <EmptyLayout pageTitle="Detail Mahasiswa">
      <div className="flex w-full min-h-screen backdrop-blur-3xl">
        <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">Progress Studi Mahasiswa</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <div className="">
            <Card className="mt-6 w-full">
              <CardBody>
                <div className="absolute top-0 ml-[-25px] bg-blue-500 h-36 w-full transform rounded-md"></div>
                <div className="flex justify-start ml-12 mt-11 items-center relative">
                  <div>
                    <img
                      src="/default_profile.jpg"
                      alt="Picture of the author"
                      className="rounded-full h-36 w-36 flex items-center justify-center"
                    />
                  </div>
                  <div className="ml-8">
                    <Typography
                      className="font-semibold text-2xl"
                      color="white"
                    >
                      {data.name}
                    </Typography>
                    <Typography className="text-md font-medium mt-3">
                      {data.nim}
                    </Typography>
                  </div>
                </div>

                {/* Doswal dan Agkatan */}
                <div className="ml-12 mt-10">
                  <div>
                    <Typography className="text-md inline-block font-bold">
                      Angkatan
                    </Typography>
                    <Typography className="text-md inline-block ">
                      : {data.angkatan}
                    </Typography>
                  </div>
                  <div>
                    <Typography className="text-md inline-block font-bold">
                      Dosen Wali
                    </Typography>
                    <Typography className="text-md inline-block ">
                      : {data.doswal}
                    </Typography>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Index for semester */}
            <div className="flex w-full justify-between mt-10">
              <h2 className="font-semibold text-lg">Semester Mahasiswa</h2>
            </div>
            <p className="text-sm text-gray-500">
              Klik pada semester untuk melihat progress studi mahasiswa
            </p>
            <Card className="mt-6 w-full">
              <CardBody>
                {/* Render the grid of boxes */}
                {renderBoxes()}
                <div className="mt-10">
                  <p className="text-sm text-gray-600 mb-1">Keterangan:</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                    <p className="text-sm text-gray-600">Belum diisikan (IRS dan KHS) / tidak digunakan</p>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                    <p className="text-sm text-gray-600">Sudah diisikan (IRS dan KHS)</p>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                    <p className="text-sm text-gray-600">Sudah lulus PKL (IRS, KHS, dan PKL)</p>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                    <p className="text-sm text-gray-600">Sudah lulus Skripsi</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
          {/* Modal component */}
          {isBlueModalOpen && (
          <BlueBoxModal onClose={() => setBlueModalOpen(false)} isvisible={isBlueModalOpen} dataIrs={{}} dataKhs={{}}/>
        )}
          {/* Modal component */}
          {isGreenModalOpen && (
          <GreenBoxModal onClose={() => setGreenModalOpen(false)} isvisible={isGreenModalOpen} dataIrs={{}} dataKhs={{}} dataPkl={{}} dataSkripsi={{}}/>
        )}
          {/* Modal component */}
          {isYellowModalOpen && (
          <YellowBoxModal onClose={() => setYellowModalOpen(false)} isvisible={isYellowModalOpen} dataIrs={{}} dataKhs={{}}/>
        )}
      </div>
    </EmptyLayout>
  );
}
