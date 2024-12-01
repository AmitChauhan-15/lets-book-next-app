import React from "react";
import { ProjectName } from "../_helpers/constant";
import Link from "next/link";
import { auth } from "../_lib/auth";

const navigationElement = [
  { name: "Hotels", url: "/hotels" },
  { name: "My Profile", url: "/profile" },
];

async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 px-8 py-5 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="font-extrabold text-lg">{ProjectName}</h3>
        </Link>
        {session?.user && (
          <nav className="flex gap-16">
            {navigationElement.map((nav, index) => (
              <Link key={index} className=" text-sm hover:scale-110 hover:font-medium transition-all" href={nav.url}>
                {nav.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
