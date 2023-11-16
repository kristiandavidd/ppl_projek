import React from "react";
import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import { Bell } from "tabler-icons-react";
import { ProgPkl } from "@/config/progres_irs";
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

const TABLE_HEAD = ["Semester", "Nilai", "File Scan", "Action", ""];

export default function Pkl() {
  const userData = {
    role: "mhs",
    name: "Susanto Situmeang",
    idNumber: "24060121130092",
  };
  const [uploadedFileName, setUploadedFileName] = React.useState("");
  const [statusPkl, setStatusPkl] = React.useState("");
  const [nilaiPkl, setNilaiPkl] = React.useState("");
  const [semesterAktif, setSemesterAktif] = React.useState("");

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

  const handleSemesterChange = (value: any) => {
    setSemesterAktif(value);
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
          <p className="text-sm text-gray-500">
            Hanya dapat diisikan saat telah menyelesaikan PKL
          </p>
          <div className="">
            <Card className="mt-6 w-full">
              <CardBody>
                <div className="mb-7">
                  <Select
                    label="Semester"
                    color="blue"
                    onChange={handleSemesterChange}
                  >
                    {Array.from({ length: 14 }, (_, i) => (
                      <Option key={i} value={(i + 1).toString()}>
                        {i + 1}
                      </Option>
                    ))}
                  </Select>
                </div>
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
                    label="Nilai PKL"
                    color="blue"
                    onChange={(value) => setNilaiPkl(value as any)}
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
          {/* Progress Skripsi MHS */}
          <div className="flex w-full justify-between mt-10">
            <h2 className="font-semibold text-lg">Progres PKL</h2>
          </div>
          <p className="text-sm text-gray-500">
            Progres PKL yang telah anda lakukan
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
                    {ProgPkl.map(
                      ({ semester, nilai, file, status_konfirmasi }, index) => (
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
                            {status_konfirmasi === "Disetujui" ? (
                              <div className="flex gap-2 justify-center">
                                <Tooltip content="Edit">
                                  <IconButton
                                    color="blue-gray"
                                    size="sm"
                                    disabled
                                  >
                                    <Pencil size={16} />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip content="Hapus">
                                  <IconButton
                                    color="blue-gray"
                                    size="sm"
                                    disabled
                                  >
                                    <Trash size={16} />
                                  </IconButton>
                                </Tooltip>
                              </div>
                            ) : (
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
                            )}
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
