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

const data = {
  name: "Yusuf Febrian",
  nim: "24060121130073",
  angkatan: "2021",
  doswal: "Satriyo Adhy, S.Si, M.T",
};

export default function DetailMhs() {
  const userData = {
    role: "doswal",
    name: "Andi Kurnia",
    idNumber: "199603032022041001",
  };

  const handleBoxClick = (index: any) => {
    // Handle box click action, e.g., navigate to a specific page
    console.log(`Box ${index + 1} clicked`);
  };

  const renderBoxes = () => {
    const totalBoxes = 14;
    const boxesPerRow = 5;
    const rows = Math.ceil(totalBoxes / boxesPerRow);

    const boxes = [];

    for (let row = 0; row < rows; row++) {
      const rowBoxes = [];
      for (let col = 0; col < boxesPerRow; col++) {
        const boxIndex = row * boxesPerRow + col;
        const boxColor = determineBoxColor(boxIndex); // You need to implement determineBoxColor based on your criteria

        if (boxIndex < totalBoxes) {
          rowBoxes.push(
            <div
              key={boxIndex}
              className={`w-20 h-20 m-2 cursor-pointer flex items-center justify-center rounded-lg ${boxColor}`}
              onClick={() => handleBoxClick(boxIndex)}
            >
              <Typography className="text-white text-lg">
                {boxIndex + 1}
              </Typography>
            </div>
          );
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
    // Implement logic to determine box color based on your criteria
    // For example, you can return "bg-red-500", "bg-blue-500", "bg-green-500", etc.
    if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 6) {
      return "bg-blue-500";
    } else if (index === 5) {
      return "bg-yellow-500";
    } else if (index === 7) {
      return "bg-green-500";
    } else {
      return "bg-red-500";
    }
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
      </div>
    </EmptyLayout>
  );
}
