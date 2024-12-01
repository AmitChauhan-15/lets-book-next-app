import Link from "next/link";
import React from "react";
import { TbLogout } from "react-icons/tb";
import { logoutAction } from "../_lib/actions";
import SideBar from "../_components/SideBar";

function ProfileLayout({ children }) {
  return (
    <section className="grid grid-cols-12 h-full gap-8">
      <div className="col-span-3 flex flex-col gap-2 p-6 rounded-md bg-white shadow-lg ">
        <SideBar />
        <form action={logoutAction} className="flex flex-1 items-end">
          <button type="submit" className="flex gap-4 p-4 cursor-pointer w-full rounded-md hover:bg-gray-100">
            <TbLogout className=" text-xl text-white mix-blend-difference" />
            <span className="text-white mix-blend-difference leading-[18px]">Logout</span>
          </button>
        </form>
      </div>
      <div className="col-span-9 p-6 rounded-md bg-white shadow-lg ">{children}</div>
    </section>
  );
}

export default ProfileLayout;
