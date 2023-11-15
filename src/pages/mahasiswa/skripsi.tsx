import React from "react";
import { EmptyLayout } from "@/components/layout";
import { ProgSkripsi } from "@/config/progres_irs";
import Sidebar from "@/components/sidebar";
import { Bell } from "tabler-icons-react";
import { Pencil, Trash } from "tabler-icons-react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Select,
  Option,
  CardHeader,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import UploadFile from "@/components/uploadFile";

const TABLE_HEAD = ["Lama Studi (Semester)", "Nilai", "Tanggal Lulus/Sidang", "File Scan", "Action", ""];

export default function Skripsi() {
  const userData = {
    role: "mhs",
    name: "Susanto Situmeang",
    idNumber: "24060121130092",
  };
  const [uploadedFileName, setUploadedFileName] = React.useState("");
  const [statusSkripsi, setStatusSkripsi] = React.useState("");
  const [nilaiSkripsi, setNilaiSkripsi] = React.useState("");
  const [lamaStudi, setLamaStudi] = React.useState("");
  const [tglLulus, setTglLulus] = React.useState("");

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

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleStatusPklChange = (value: React.SetStateAction<string>) => {
    setStatusSkripsi(value);
    if (value !== "Lulus") {
      setNilaiSkripsi("");
      setLamaStudi("");
      setTglLulus("");
    }
  };

  return (
    <EmptyLayout pageTitle="Skripsi">
      <div className="flex w-full min-h-screen backdrop-blur-3xl">
        <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">Skripsi</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <p className="text-sm text-gray-500">
            Hanya dapat diisikan saat telah menyelesaikan Skripsi
          </p>
          <div className="">
            <Card className="mt-6 w-full">
              <CardBody>
                <div className="mb-7">
                <Input
                    color="blue"
                    type="text"
                    value="Lulus"
                    disabled
                    className="text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div className="mb-7">
                  <Select
                    label="Nilai Skripsi"
                    color="blue"
                    value={statusSkripsi === "Lulus" ? nilaiSkripsi : ""}
                    onChange={(value) => setNilaiSkripsi(value as any)}
                  >
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                    <Option value="C">C</Option>
                    <Option value="D">D</Option>
                    <Option value="E">E</Option>
                  </Select>
                </div>

                <div className="mb-7">
                  <Select
                    label="Lama Studi (Semester)"
                    color="blue"
                    value={statusSkripsi !== "Lulus" ? "" : undefined}
                    onChange={(value) => setLamaStudi(value as any)}

                  >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                    <Option value="14">14</Option>
                  </Select>
                </div>

                <div className="my-7">
                  <Input
                    color="blue"
                    label="Tanggal Lulus/Sidang"
                    type="date"
                    value={statusSkripsi !== "Lulus" ? "" : undefined}
                    onChange={(value) => setTglLulus(value as any)}
                  />
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
          {/* Progress Skripsi MHS */}
          <div className="flex w-full justify-between mt-10">
            <h2 className="font-semibold text-lg">Progres Skripsi</h2>
          </div>
          <p className="text-sm text-gray-500">
            Progres Skripsi yang telah anda lakukan
          </p>
          <div className="">
            <Card className="mt-6 w-full p-10">
              <div className="">
                <table className="w-full min-w-max table-auto text-center border rounded-xl overflow-hidden">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ProgSkripsi.map(
                      ({ semester, nilai, file, tanggal,status_konfirmasi }, index) => (
                        <tr key={semester} className="even:bg-blue-gray-50/50">
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {semester}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {nilai}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {tanggal}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Button
                              variant="text"
                              color="blue"
                              size="sm"
                              onClick={() => {
                                // Add your button click functionality here
                              }}
                            >
                              Lihat File
                            </Button>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 justify-center">
                              <Tooltip content="Edit">
                                <IconButton
                                  color="blue-gray"
                                  size="sm"
                                  onClick={() => {
                                    // Add your edit functionality here
                                  }}
                                >
                                  <Pencil size={16} />
                                </IconButton>
                              </Tooltip>
                              <Tooltip content="Hapus">
                                <IconButton
                                  color="blue-gray"
                                  size="sm"
                                  onClick={() => {
                                    // Add your delete functionality here
                                  }}
                                >
                                  <Trash size={16} />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </td>
                          <td className="">
                            <div className="w-max">
                              <Chip
                                size="sm"
                                variant="ghost"
                                value={status_konfirmasi}
                                color={
                                  status_konfirmasi === "Disetujui"
                                    ? "green"
                                    : status_konfirmasi === "Belum Disetujui"
                                    ? "amber"
                                    : "red"
                                }
                                className="text-center"
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* end */}
        </div>
      </div>
    </EmptyLayout>
  );
}
