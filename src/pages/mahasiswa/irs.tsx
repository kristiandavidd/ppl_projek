import React from "react";
import { ProgIrs } from "@/config/progres_irs";
import { EmptyLayout } from "@/components/layout";
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
import axios from "axios";
import { setCookie } from "cookies-next";

const TABLE_HEAD = ["Semester", "SKS", "File Scan", "Action", ""];

export default function Irs() {
  const userData = {
    role: "mhs",
    name: "Susanto Situmeang",
    idNumber: "24060121130092",
  };
  const [uploadedFileName, setUploadedFileName] = React.useState("");
  const [semesterAktif, setSemesterAktif] = React.useState("");
  const [sks, setSks] = React.useState("");
  const [fileUpload, setFileUpload] = React.useState("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileUpload(file);
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

  const handleSemesterChange = (value: any) => {
    setSemesterAktif(value);
  };

  const handleSksChange = (event: any) => {
    setSks(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("semester_aktif", semesterAktif);
      formData.append("sks", sks);
      // formData.append("file", fileUpload);

      const response = await axios.post(
        `${process.env.BACKEND_API}/irs`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            // "x-access-token": /** token disini */
          },
        }
      );

      if (response.status === 200) {
        // Handle success, maybe show a success message
        console.log("IRS data submitted successfully!");
        // You can handle redirection here
      } else {
        // Handle errors, maybe show an error message
        console.error("Failed to submit IRS data");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }
  };

  return (
    <EmptyLayout pageTitle="Irs">
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
                  <Select
                    label="Semester Aktif"
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

                <div className="my-7">
                  <Input
                    color="blue"
                    label="Jumlah SKS"
                    type="number"
                    step="1"
                    onChange={handleSksChange}
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
                  type={".pdf"}
                  maxFileSize={"50 MB"}
                />
              </CardBody>
              <CardFooter className="pt-0 flex justify-end">
                <Button color="blue" onClick={handleSubmit}>
                  Simpan Data
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Progress IRS MHS */}
          <div className="flex w-full justify-between mt-10">
            <h2 className="font-semibold text-lg">Progres IRS</h2>
          </div>
          <p className="text-sm text-gray-500">
            Progres IRS yang telah anda lakukan
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
                    {ProgIrs.map(
                      (
                        { semester_aktif, sks, file, status_konfirmasi },
                        index
                      ) => (
                        <tr
                          key={semester_aktif}
                          className="even:bg-blue-gray-50/50"
                        >
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {semester_aktif}
                            </Typography>
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sks}
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
