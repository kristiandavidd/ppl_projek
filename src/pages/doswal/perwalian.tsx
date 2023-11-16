/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { EmptyLayout } from "@/components/layout";
import Sidebar from "@/components/sidebar";
import { Bell } from "tabler-icons-react";
import { ProgMhs } from "@/config/mhs_progres";
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

const TABLE_HEAD = ["NIM", "Nama", "Angkatan", "Status", "Action"];

export default function Perwalian() {
  const userData = {
    role: "doswal",
    name: "Andi Kurnia",
    idNumber: "199603032022041001",
  };
  return (
    <EmptyLayout pageTitle="Perwalian">
      <div className="flex w-full min-h-screen backdrop-blur-3xl">
        <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">Perwalian</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <div className=" shadow-lg shadow-blue-500/20 rounded-lg p-4 mt-5">
            <div className="flex">
              <div className="flex w-5/6">
                <Input
                  color="blue"
                  label="Cari NIM/Nama Mahasiswa"
                  type="text"
                  className="border border-gray-300 rounded-md"
                ></Input>
              </div>
              <div className="w-1/4 flex items-center justify-center rounded-md ml-3">
                <Select variant="outlined" label="Urutkan">
                  <Option>NIM</Option>
                  <Option>Angkatan</Option>
                </Select>
              </div>
            </div>
            <div className="mt-4">
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
                    {ProgMhs.map(({ nim, nama, status, angkatan }, index) => (
                      <tr key={nim} className="even:bg-blue-gray-50/50">
                        <td className="">
                          {/* <Link to={`/mahasiswa/${nim}`}> */}

                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal hover:font-bold hover:text-blue-500"
                          >
                            {nim}
                          </Typography>

                          {/* </Link> */}
                        </td>
                        <td className="py-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {nama}
                          </Typography>
                        </td>
                        <td className="">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {angkatan}
                          </Typography>
                        </td>
                        <td className="">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {status}
                          </Typography>
                          {/* <div className="max-w-fit text-center">
                              <Chip
                                size="sm"
                                variant="ghost"
                                value={status}
                                color={
                                  status === "Aktif"
                                    ? "green"
                                    : status === "Cuti"
                                    ? "amber"
                                    : status === "Lulus"
                                    ? "blue" : "red"
                                }
                                className="text-center"
                              />
                            </div> */}
                        </td>
                        <td className="p-4">
                          <a href="/detailMhs">
                            <Button
                              variant="filled"
                              color="blue"
                              size="sm"
                              onClick={() => {
                                // Add your button click functionality here
                              }}
                            >
                              Detail
                            </Button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
