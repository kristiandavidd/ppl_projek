import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";

  
import {
  AcademicCapIcon, //IRS
  BookOpenIcon, //KHS
  BriefcaseIcon, //PKL
  NewspaperIcon, //Skripsi
} from "@heroicons/react/24/solid";

type DataIrs = {
  [key: string]: {
    semester_aktif: string;
    sks: string;
    status_konfirmasi: string;
    file: string;
  }[];
};
type DataKhs = {
  [key: string]: {
    semester_aktif: string;
    sks:  string;
    sks_kumulatif: string;
    ip: string;
    ip_kumulatif: string;
    status_konfirmasi: string;
    file: string;
  }[];
};
type DataPkl = {
  [key: string]: {
    nilai: string;
    semester: string;
    semester_aktif: string;
    status_konfirmasi: string;
    file: string;
  }[];
};
type DataSkripsi = {
  [key: string]: {
    nilai: string;
    semester: string;
    semester_aktif: string;
    status_konfirmasi: string;
    tanggal: string;
    file: string;
  }[];
};

type ModalProps = {
  isvisible: boolean;
  onClose: () => void;
  dataIrs: DataIrs;
  dataKhs: DataKhs;
  dataPkl: DataPkl;
  dataSkripsi: DataSkripsi;
};

export default function GreenBoxModal({
  isvisible,
  onClose,
  dataIrs,
  dataKhs,
}: ModalProps): JSX.Element | null {
  const dataIn = [
    {
      label: "IRS",
      value: "IRS",
      icon: AcademicCapIcon,
      desc: (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Semester: X.</p>
          <p className="text-sm text-gray-600">Jumlah SKS: XX</p>
          <Button
            variant="text"
            color="blue"
            size="sm"
            onClick={() => {
              // Add your button click functionality here
            }}
            className="mt-4"
          >
            Lihat File Scan
          </Button>
        </div>
      ),
    },
    {
      label: "KHS",
      value: "KHS",
      icon: BookOpenIcon,
      desc: (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">SKS Semester : XX</p>
          <p className="text-sm text-gray-600">IP Semester : X.XX</p>
          <p className="text-sm text-gray-600">SKS Kumulatif : XX</p>
          <p className="text-sm text-gray-600">IP Kumulatif : X.XX</p>
          <Button
            variant="text"
            color="blue"
            size="sm"
            onClick={() => {
              // Add your button click functionality here
            }}
            className="mt-4"
          >
            Lihat File Scan
          </Button>
        </div>
      ),
    },
    {
      label: "PKL",
      value: "PKL",
      icon: BriefcaseIcon,
      desc: (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Status PKL : Lulus</p>
          <p className="text-sm text-gray-600">Nilai PKL : X</p>
          <Button
            variant="text"
            color="blue"
            size="sm"
            onClick={() => {
              // Add your button click functionality here
            }}
            className="mt-4"
          >
            Lihat Berita Acara
          </Button>
        </div>
      ),
    },
    {
      label: "Skripsi",
      value: "Skripsi",
      icon: NewspaperIcon,
      desc: (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Status Skripsi : Lulus</p>
          <p className="text-sm text-gray-600">Nilai Skripsi : X</p>
          <p className="text-sm text-gray-600">Lama Studi : X Semester</p>
          <p className="text-sm text-gray-600">Tanggal Lulus/Sidang : dd/mm/yy</p>
          <Button
            variant="text"
            color="blue"
            size="sm"
            onClick={() => {
              // Add your button click functionality here
            }}
            className="mt-4"
          >
            Lihat Berita Acara
          </Button>
        </div>
      ),
    },
  ];

  if (!isvisible) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full lg:w-[150%] bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold">Semester 5</h3>
          </div>
          <div className="relative py-6 px-12 flex-auto">
            <div>
              <Tabs value="dashboard">
                <TabsHeader>
                  {dataIn.map(({ label, value, icon }) => (
                    <Tab key={value} value={value}>
                      <div className="flex items-center gap-2">
                        {React.createElement(icon, { className: "w-5 h-5" })}
                        {label}
                      </div>
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {dataIn.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="bg-red-500 text-white active:bg-red-600 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => onClose()}
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
