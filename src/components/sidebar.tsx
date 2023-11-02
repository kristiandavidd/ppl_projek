import { sidebarData } from "@/config/sidebar_config";
import NavButton from "./nav_button";
import { UserCircle } from "tabler-icons-react";
import { Button } from "@material-tailwind/react";
import { FaSignOutAlt } from "react-icons/fa";

type userData = {
  role: string;
  name: string;
  idNumber: string;
};

interface userProps {
  data: userData;
}

interface SidebarData {
  [key: string]: { title: string; link: string; svg: JSX.Element }[];
}

export default function Sidebar({ data }: userProps) {
  const { role, name, idNumber } = data;
  const sidebarRoleData = (sidebarData as unknown as SidebarData)[role] || [];

  return (
    <div className="flex-col items-center hidden p-10 mb-20 bg-blue-500 w-1/8 lg:mb-0 lg:flex overflow-x-visible justify-start">
      <UserCircle color="white" size={96} strokeWidth={1} />
      <div className="flex items-center justify-center px-2 py-2 mx-auto mb-2 mt-5 rounded-md w-[200px] items bg-blue-300">
        <p className="text-sm font-semibold text-center">{name}</p>
      </div>
      <div className="mb-10">
        <p className="text-sm text-center text-white">{idNumber}</p>
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col justify-start">
          {sidebarRoleData.map((data) => {
            return <NavButton data={data} key={data.title} />;
          })}
        </ul>
      </div>
      <div className="mt-10">
        <Button color="white" className=" flex items-center">
          <FaSignOutAlt className="mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
}
