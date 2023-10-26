import Image from "next/image"
import { UserCircle } from "tabler-icons-react"
import { inherits } from "util"

type userData = { 
    role: string;
    name: string;
    idNumber: string;
}

interface userProps {
    data: userData;
}

interface SidebarData {
    [key: string]: { title: string; link: string; svg: JSX.Element }[];
}

export default function TopProfile({ data }: userProps) {
    const { role, name, idNumber } = data;
    return(
        <>
            <div className="w-full flex flex-col  relative items-center">
                <div className="w-[100px] h-[100px] bg-blue-50 rounded-full z-10 relative top-[50px] ">
                    {/* <Image src="/default_profile.jpg" alt="" width={50} height={50}></Image> */}
                    <UserCircle size='inherits' strokeWidth={1} className="text-blue-500"></UserCircle>
                </div>
                <div className="bg-blue-50 text-center rounded-lg p-2 shadow-lg shadow-blue-500/20 w-full">
                    <br /><br />
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-sm">{idNumber}</p>
                </div>
            </div>
        </>
    )
}