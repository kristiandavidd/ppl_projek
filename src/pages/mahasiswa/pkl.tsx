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
  Select,
  Option,
} from "@material-tailwind/react";
import UploadFile from "@/components/uploadFile";

export default function Pkl() {
  const userData = {
    role: "mhs",
    name: "Susanto Situmeang",
    idNumber: "24060121130092",
  };
  const [uploadedFileName, setUploadedFileName] = React.useState("");
  const [statusPkl, setStatusPkl] = React.useState("");
  const [nilaiPkl, setNilaiPkl] = React.useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 50 * 1024 * 1024;

      if (fileExtension.toLowerCase() !== "pdf") {
        alert("Hanya file dengan format PDF yang dapat diunggah!");
        event.target.value = ""; // Reset input file
        setUploadedFileName("");
      } else if (fileSize > maxFileSize) {
        alert("Ukuran file terlalu besar. Maksimal ukuran file adalah 50 MB.");
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

      const maxFileSize = 50 * 1024 * 1024;

      if (fileExtension.toLowerCase() !== "pdf") {
        alert("Hanya file dengan format PDF yang dapat diunggah!");
        setUploadedFileName("");
      } else if (fileSize > maxFileSize) {
        alert("Ukuran file terlalu besar. Maksimal ukuran file adalah 50 MB.");
        setUploadedFileName("");
      } else {
        setUploadedFileName(fileName);
      }
    }
  };

  const handleDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleStatusPklChange = (value: React.SetStateAction<string>) => {
    setStatusPkl(value);
    if (value !== "Lulus") {
      setNilaiPkl("");
    }
  };

  return (
    <EmptyLayout pageTitle="Pkl">
      <div className="flex w-full min-h-screen backdrop-blur-3xl">
        <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">PKL</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <div className="">
            <Card className="mt-6 w-full">
              <CardBody>
                <div className="mb-7">
                  <Select
                    label="Status PKL"
                    color="blue"
                    onChange={handleStatusPklChange as any}
                    value={statusPkl}
                  >
                    <Option value="Belum Ambil">Belum Ambil</Option>
                    <Option value="Sedang Ambil">Sedang Ambil</Option>
                    <Option value="Lulus">Lulus</Option>
                  </Select>
                </div>

                <div className="mb-7">
                  <Select
                    label="Nilai PKL"
                    color="blue"
                    value={statusPkl === "Lulus" ? nilaiPkl : ""}
                    onChange={(value) => setNilaiPkl(value as any)}
                    disabled={statusPkl !== "Lulus"}
                  >
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                    <Option value="C">C</Option>
                    <Option value="D">D</Option>
                    <Option value="E">E</Option>
                  </Select>
                </div>

                <div className="mt-7">
                  <label className="text-sm font-semibold">
                    Scan Berita Acara
                  </label>
                </div>
                <UploadFile
              handleFileUpload={handleFileUpload}
              handleDrop={handleDrop}
              handleDragOver={handleDragOver}
              uploadedFileName={uploadedFileName}
              type={".pdf"}
              maxFileSize={"50 MB"}
            />
              </CardBody>
              <CardFooter className="pt-0 flex justify-end">
                <Button color="blue">Simpan Data</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
