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

export default function Irs() {
  const userData = {
    role: "mhs",
    name: "Susanto Situmeang",
    idNumber: "24060121130092",
  };
  const [age, setAge] = React.useState("");
  const [uploadedFileName, setUploadedFileName] = React.useState(null);

  const handleFileUpload = (event: { target: { files: any[]; value: null; }; }) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 50 * 1024 * 1024;

      if (
        fileExtension.toLowerCase() !== "pdf" 
      ) {
        alert(
          "Hanya file dengan format PDF yang dapat diunggah!"
        );
        event.target.value = null; // Reset input file
        setUploadedFileName(null);
      } else if (fileSize > maxFileSize) {
        alert("Ukuran file terlalu besar. Maksimal ukuran file adalah 50 MB.");
        event.target.value = null; // Reset input file
        setUploadedFileName(null);
      } else {
        setUploadedFileName(fileName);
      }
    }
  };

  const handleDrop = (event: { preventDefault: () => void; dataTransfer: { files: any[]; }; }) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 50 * 1024 * 1024;

      if (
        fileExtension.toLowerCase() !== "pdf"
      ) {
        alert(
          "Hanya file dengan format PDF yang dapat diunggah!"
        );
        setUploadedFileName(null);
      } else if (fileSize > maxFileSize) {
        alert("Ukuran file terlalu besar. Maksimal ukuran file adalah 50 MB.");
        setUploadedFileName(null);
      } else {
        setUploadedFileName(fileName);
      }
    }
  };

  const handleDragOver = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <EmptyLayout pageTitle="Generate Akun Baru">
      <div className="flex w-full min-h-screen backdrop-blur-3xl">
        <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">IRS</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <div className="">
            <Card className="mt-6 w-full">
              <CardBody>
                <div className="mb-7">
                  <Select label="Semester Aktif" color="blue">
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
                    <Option>6</Option>
                    <Option>7</Option>
                    <Option>8</Option>
                    <Option>9</Option>
                    <Option>10</Option>
                    <Option>11</Option>
                    <Option>12</Option>
                    <Option>13</Option>
                    <Option>14</Option>
                  </Select>
                </div>

                <div className="my-7">
                  <Input
                    color="blue"
                    label="Jumlah SKS"
                    type="number"
                    step="1"
                />
                </div>
                <div className="mt-7">
                  <label className="text-sm font-semibold">Scan IRS</label>
                </div>
                <UploadFile
              handleFileUpload={handleFileUpload}
              handleDrop={handleDrop}
              handleDragOver={handleDragOver}
              uploadedFileName={uploadedFileName}
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
