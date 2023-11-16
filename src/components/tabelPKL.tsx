import { Input, Select, Option, Button, Typography } from '@material-tailwind/react';

interface MahasiswaData {
    NIM: string;
    Nama: string;
    Angkatan: string;
    Nilai: string;
    [key: string]: string;
}

interface TabelPKLProps {
    PKL : MahasiswaData[];
    select: string;
}

const TABLE_HEAD = ["NIM", "Nama", "Angkatan", "Nilai"];

const TabelPKL = ({PKL, select}: TabelPKLProps) => {
    const judul = select === "sudah" ? "Daftar Sudah Lulus PKL" : "Daftar Belum Lulus PKL";
    return (
        <>
            <Typography
                variant="h6"
                color="blue-gray"
                className="font-semibold text-center"
            >
                {judul} <br></br>
                Fakultas Sains dan Matematika
            </Typography>
            <table className="mt-4 w-full min-w-max table-auto text-center border rounded-xl overflow-hidden">
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
                    {PKL.map(({ NIM, Nama, Angkatan , Nilai}, index) => (
                    <tr key={NIM} className="even:bg-blue-gray-50/50">
                        <td className="">
                        {/* <Link to={`/mahasiswa/${NIM}`}> */}

                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal hover:font-bold hover:text-blue-500"
                        >
                            {NIM}
                        </Typography>

                        {/* </Link> */}
                        </td>
                        <td className="py-4">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {Nama}
                        </Typography>
                        </td>
                        <td className="">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {Angkatan}
                        </Typography>
                        </td>
                        <td className="">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {Nilai}
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
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className='mt-10 justify-center flex'>
                <Button size='sm' color='blue' onClick={() => window.print()}>Cetak</Button>
            </div>
        </>
    )
}

export default TabelPKL;