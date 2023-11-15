import Image from "next/image";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { EmptyLayout } from "@/components/layout";
import { Bell } from "tabler-icons-react";
import TopProfile from "@/components/top_profile";
import { profileData } from "@/config/profile_config";
import BottomProfile from "@/components/bottom_profile";
import { profileDataMerge } from "@/config/profile_data_merge";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import ProfileContainer from "@/components/profileContainer";

export default function Home() {
  const [img, setImg] = useState(null); // null ganti dengan file jpg
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Success message state
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);

  // Ambil data mahasiswa
  const { data: dataMhs,error: errorMhs} = useSWR(
    `${process.env.BACKEND_API}/profile`,
    //fetcherWithToken
  )

  // change image handler
  // const changeImageHandler = (e: any) => {
  //   setImg(URL.createObjectURL(e.target.files[0])
  // };

  useEffect(() => {
    if (dataMhs) {
      // if (dataMhs.kodeKab) {
      //   const provCode = dataMhs.kodeKab.substring(0, 2);
      //   setProvinsi(provCode);
      //   setKabupaten(dataMhs.kodeKab);
      // }
      setAlamat(dataMhs.alamat);
      setEmail(dataMhs.email);
      setPhone(dataMhs.phone);
    }
  }, [dataMhs]);

  const userData = {
    role: "mhs",
    name: dataMhs? dataMhs.nama : "",
    idNumber: dataMhs ? dataMhs.nim : "",
  };

  return (
    <EmptyLayout pageTitle="Dashboard">
      <div className="flex w-full min-h-screen h-full backdrop-blur-3xl">
      <Sidebar data={userData} />
        <div className="w-full pb-16 p-10">
          <div className="flex w-full justify-between">
            <h2 className="font-semibold text-lg">Profil</h2>
            <Bell size={28} strokeWidth={1.5}></Bell>
          </div>
          <div className="relative top-[-50px]">
            <TopProfile data={userData} />
            <ProfileContainer data={profileDataMerge} role={userData.role} />
            <BottomProfile data={profileDataMerge} role={userData.role} />
          </div>
        </div>
      </div>
    </EmptyLayout>
  );
}
