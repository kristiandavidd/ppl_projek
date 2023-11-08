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

export default function DataDoswal() {
  const userData = {
    role: "operator",
    name: "Mario Susanti",
    idNumber: "199603032022041005",
  };
  const [age, setAge] = React.useState("");
  const [uploadedFileName, setUploadedFileName] = React.useState(null);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 50 * 1024 * 1024;

      if (
        fileExtension.toLowerCase() !== "csv" &&
        fileExtension.toLowerCase() !== "xlsx" &&
        fileExtension.toLowerCase() !== "xls"
      ) {
        alert(
          "Hanya file dengan format CSV, XLSX, atau XLS yang dapat diunggah!"
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

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      const fileSize = file.size;

      const maxFileSize = 50 * 1024 * 1024;

      if (
        fileExtension.toLowerCase() !== "csv" &&
        fileExtension.toLowerCase() !== "xlsx" &&
        fileExtension.toLowerCase() !== "xls"
      ) {
        alert(
          "Hanya file dengan format CSV, XLSX, atau XLS yang dapat diunggah!"
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

  const handleDragOver = (event: any) => {
    event.preventDefault();
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
                <div className="mb-7">
                  <Input color="blue" label="NIM" />
                </div>
                <div className="mb-7">
                  <Input color="blue" label="Nama Lengkap" />
                </div>
                <div className="mb-7">
                  <Select label="Angkatan" color="blue">
                    <Option value="2010">2010</Option>
                    <Option value="2011">2011</Option>
                    <Option value="2012">2012</Option>
                    <Option value="2013">2013</Option>
                    <Option value="2014">2014</Option>
                    <Option value="2015">2015</Option>
                    <Option value="2016">2016</Option>
                    <Option value="2017">2017</Option>
                    <Option value="2018">2018</Option>
                    <Option value="2020">2020</Option>
                    <Option value="2021">2021</Option>
                    <Option value="2022">2022</Option>
                    <Option value="2023">2023</Option>
                  </Select>
                </div>
                <div className="mb-7">
                  <Select label="Status" color="blue">
                    <Option value="Aktif">Aktif</Option>
                    <Option value="Cuti">Cuti</Option>
                    <Option value="Mangkir">Mangkir</Option>
                    <Option value="Drop Out">Drop Out</Option>
                    <Option value="Undur Diri">Undur Diri</Option>
                    <Option value="Lulus">Lulus</Option>
                    <Option value="Meninggal Dunia">Meninggal Dunia</Option>
                  </Select>
                </div>

                <div className="my-7">
                  <Input color="blue" label="Dosen Wali" />
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
              Upload file dengan format .csv atau .xlsx
            </p>

            <Card className="mt-6 w-full">
              <CardBody>
                <div className="flex items-center justify-center w-full">
                  <label
                    onDragOver={(event) => handleDragOver(event)}
                    onDrop={(event) => handleDrop(event)}
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        .csv, .xlxs, .xsl (Max. 50 MB)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".csv, .xlsx, .xls"
                    />
                  </label>
                </div>
                {uploadedFileName && (
                  <p className="mt-2 text-sm text-gray-500">
                    File yang telah diunggah: {uploadedFileName}
                  </p>
                )}
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
