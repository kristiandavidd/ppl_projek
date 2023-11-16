/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { EmptyLayout } from "@/components/layout";
import { FaSignOutAlt } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Select,
  Option,
  PopoverHandler,
  Popover,
  PopoverContent,
  Avatar,
} from "@material-tailwind/react";
import Head from "next/head";

export default function IsiDataAwal() {
  const [image, setImage] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [openPopover, setOpenPopover] = React.useState(false);
  const [openPopover2, setOpenPopover2] = React.useState(false);
  const [openPopover3, setOpenPopover3] = React.useState(false);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleProvinceChange = (e : any) => {
      const provinceId = e;
      setSelectedProvince(provinceId);
      setSelectedCity(""); // Reset pilihan kabupaten/kota
      fetchCities(provinceId);
    };  
    
    useEffect(() => {
      fetch(`${process.env.BACKEND_API}/api/provinsi`)
        .then((response) => response.json())
        .then((data) => setProvinces(data));
    }, []);

    const fetchCities = (provinceId: React.ChangeEvent<HTMLSelectElement>) => {
      fetch(`${process.env.BACKEND_API}/api/kabupaten/${provinceId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Tambahkan log ini
          setCities(data);
        });
    };    
  
  
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const triggers2 = {
    onMouseEnter: () => setOpenPopover2(true),
    onMouseLeave: () => setOpenPopover2(false),
  };
  const triggers3 = {
    onMouseEnter: () => setOpenPopover3(true),
    onMouseLeave: () => setOpenPopover3(false),
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(target.value);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    inputRef.current?.click();
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

      // Check if the selected file type is allowed
      if (allowedTypes.includes(file.type)) {
        setImage(file);
      } else {
        // Show an error message or handle the restriction as per your requirements
        alert("Invalid file type. Please upload a jpg/png/jpeg file.");
      }
    } else {
      // Set the image back to null if no file is selected
      if (!image) {
        setImage(null);
      }
    }
  };

  

  return (
    <>
      <EmptyLayout pageTitle="Isi Data Awal">
        <div className="flex w-full min-h-screen backdrop-blur-3xl">
          <div className="w-full pb-16 p-10">
            <div className="flex w-full justify-between">
              <h2 className="font-semibold text-lg">Isi Profil</h2>
              <a href="/login">
                <Button color="blue" className=" flex items-center">
                  <FaSignOutAlt className="mr-2" /> Logout
                </Button>
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-[-5px]">
              Mohon lengkapi data profil untuk melanjutkan
            </p>
            <div className="">
              <Card>
                <CardBody>
                  <form>
                    <div className="mt-6 flex">
                      <div className="w-1/3">
                        <div>
                          <div>
                            {image ? (
                              <img
                                src={URL.createObjectURL(image)}
                                alt="upload image"
                                className="w-24 h-24 md:w-28 md:h-28 lg:w-52 lg:h-52 mx-auto object-cover rounded-full"
                              />
                            ) : (
                              <img
                                src="../../default_profile.jpg"
                                alt="upload image"
                                className="w-24 h-24 md:w-28 md:h-28 lg:w-52 lg:h-52 mx-auto object-cover rounded-full"
                              />
                            )}
                            <input
                              type="file"
                              name="file"
                              id="file"
                              ref={inputRef}
                              onChange={handleImageChange}
                              className="hidden"
                            />
                          </div>
                          <div className="flex justify-center mt-7">
                            <Button
                              variant="text"
                              onClick={handleImageClick}
                              color="blue"
                            >
                              Upload Gambar
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full ml-12">
                        <div className="mb-7">
                          <Input color="blue" label="NIM" disabled />
                        </div>

                        <div className="mb-7">
                          <Input color="blue" label="Nama Lengkap" />
                        </div>
                        <div className="mb-7">
                          <Select label="Angkatan" color="blue" disabled>
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
                            <Option value="Meninggal Dunia">
                              Meninggal Dunia
                            </Option>
                          </Select>
                        </div>

                        <div className="my-7">
                          <Input color="blue" label="Dosen Wali" />
                        </div>
                        <div className="mb-7">
                          <Input
                            type="email"
                            label="Email"
                            value={email}
                            onChange={onChange}
                            className="pr-20"
                            containerProps={{
                              className: "min-w-0",
                            }}
                          />
                        </div>
                        <div className="mb-7 flex justify-end">
                          <Input type="password" label="Password" />
                          <Popover open={openPopover} handler={setOpenPopover}>
                            <PopoverHandler {...triggers}>
                              <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center gap-1 font-normal"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5 ml-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Typography>
                            </PopoverHandler>
                            <PopoverContent
                              {...triggers}
                              className="z-50 max-w-[24rem]"
                            >
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal text-blue-gray-500"
                                >
                                  Gunakan password setidaknya 8 karakter, dengan
                                  kombinasi huruf, angka dan simbol (_/./,/-/#).
                                </Typography>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="mb-7 flex justify-end">
                          <Input
                            color="blue"
                            type="number"
                            label="No. Handphone"
                            inputMode="numeric"
                          />

                          <Head>
                            <style>{`
        
                              input::-webkit-outer-spin-button,
                              input::-webkit-inner-spin-button {
                                -webkit-appearance: none;
                                margin: 0;
                              }
               
                              input[type=number] {
                                -moz-appearance: textfield;
                              }

                              input[type=number]::-webkit-outer-spin-button,
                              input[type=number]::-webkit-inner-spin-button {
                                -webkit-appearance: none;
                                margin: 0;
                              }
                            `}</style>
                          </Head>
                          <Popover
                            open={openPopover2}
                            handler={setOpenPopover2}
                          >
                            <PopoverHandler {...triggers2}>
                              <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center gap-1 font-normal"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5 ml-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Typography>
                            </PopoverHandler>
                            <PopoverContent
                              {...triggers2}
                              className="z-50 max-w-[24rem]"
                            >
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal text-blue-gray-500"
                                >
                                  Nomor telepon diawali dengan angka 0. Contoh
                                  (081xxxxxxxxx)
                                </Typography>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="mb-7">
                          <Select label="Jalur Masuk" color="blue">
                            <Option value="SNMPTN">SNMPTN</Option>
                            <Option value="SBMPTN">SBMPTN</Option>
                            <Option value="Mandiri">Mandiri</Option>
                            <Option value="Lainnya">Lainnya</Option>
                          </Select>
                        </div>
                        <div className="mb-7">
                          <Input color="blue" label="Alamat" />
                        </div>
                        <div className="mb-7">
                          <Select label="Provinsi" color="blue" onChange={(e) => handleProvinceChange(e)}>
                            {provinces.length > 0 ? (
                              provinces.map((province : { id: string; nama: string }) => (
                                <Option key={province.id} value={province.id}>
                                  {province.nama}
                                </Option>
                              ))
                            ) : (
                              <Option value="" disabled>
                                Memuat...
                              </Option>
                            )}
                          </Select>
                          </div>
                          <div className="mb-7 flex justify-end">
                          <Select label="Kab/Kota" color="blue" disabled={cities.length === 0}>
                            {cities.map((city : { id: string; nama: string }) => (
                              <Option key={city.id} value={city.id}>
                                {city.nama}
                              </Option>
                            ))}
                          </Select>
                          <Popover
                            open={openPopover3}
                            handler={setOpenPopover3}
                          >
                            <PopoverHandler {...triggers3}>
                              <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center gap-1 font-normal"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-5 w-5 ml-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Typography>
                            </PopoverHandler>
                            <PopoverContent
                              {...triggers3}
                              className="z-50 max-w-[24rem]"
                            >
                              <div className="mb-2 flex items-center justify-between gap-4">
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal text-blue-gray-500"
                                >
                                  Pilih provinsi terlebih dahulu untuk menampilkan daftar kabupaten/kota
                                </Typography>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardBody>
                <CardFooter className="pt-0 flex justify-end">
                  <Button color="blue">Simpan Data</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </EmptyLayout>
    </>
  );
}