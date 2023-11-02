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
  Input,
} from "@material-tailwind/react";

export default function DataDoswal() {
  const userData = {
    role: "operator",
    name: "Mario Susanti",
    idNumber: "199603032022041005",
  };
  return (
    <EmptyLayout pageTitle="Generate Akun Baru">
      <div className="flex w-full min-h-screen backdrop-blur-3xl">
        <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">Generate Akun Baru</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <div className="">
            <Card className="mt-6 w-full">
              <CardBody>
                {/* <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography> */}
                {/* <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nama Lengkap
                </label> */}
                <div className="mb-7">
                  <Input color="blue" label="NIM" />
                </div>
                <div className="mb-7">
                  <Input color="blue" label="Nama Lengkap" />
                </div>
                <div className="mb-7">
                  <Input color="blue" label="Angkatan" />
                </div>
                <div className="mb-7">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-10"
                  >
                    <option value="aktif">Aktif</option>
                    <option value="tidak_aktif" className="pl-2">
                      Tidak Aktif
                    </option>
                    <option value="cuti" className="pl-2">
                      Cuti
                    </option>
                  </select>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button color="blue">Generate</Button>
              </CardFooter>
            </Card>

            <div className="flex w-full justify-between mt-10">
              <h2 className="font-semibold text-lg">
                Generate Akun Secara Upload
              </h2>
              <Typography color="blue" className="cursor-pointer">
                <a
                  href="https://drive.google.com/drive/folders/1J5k3MksRkHbn6LNRBBZ-syeCoxW1Av_m?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Template
                </a>
              </Typography>
            </div>
            <p className="text-sm text-gray-500">
              Upload file dengan format .csv
            </p>

            <Card className="mt-6 w-full">
              <CardBody>
                <div className="mt-4">
                  <label
                    htmlFor="file-upload"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Upload File:
                  </label>
                  <input
                    type="file"
                    name="file-upload"
                    id="file-upload"
                    className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button color="blue">Generate</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
