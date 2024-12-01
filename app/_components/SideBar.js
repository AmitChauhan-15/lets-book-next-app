"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";

const navigation = [
  { icon: <FaUser className="text-white mix-blend-difference" />, name: "My Profile", url: "/profile" },
  { icon: <FaCalendarCheck className="text-white mix-blend-difference" />, name: " My Reservation", url: "/profile/reservation" },
];

function SideBar() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((nav, index) => (
        <div key={index} className={`flex items-center gap-4 p-4 rounded-md cursor-pointer hover:bg-zinc-100 ${pathname === nav.url ? "bg-zinc-200" : ""}`}>
          {nav.icon}
          <Link href={nav.url} className="text-white mix-blend-difference">
            {nav.name}
          </Link>
        </div>
      ))}
    </>
  );
}

export default SideBar;
