"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const locations = [
  { label: "All Location", value: "all" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Udaipur", value: "udaipur" },
  { label: "Jaipur", value: "jaipur" },
  { label: "Majorda", value: "majorda" },
  { label: "Chennai", value: "chennai" },
  { label: "New Delhi", value: "new delhi" },
  { label: "Shimla", value: "shimla" },
  { label: "Hyderabad", value: "hyderabad" },
  { label: "Kolkata", value: "kolkata" },
  { label: "Cansaulim", value: "cansaulim" },
];

function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState("all");
  const activeFilter = searchParams.get("location") ?? "all";

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.set("location", search);
    router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setSearch(activeFilter);
  }, []);

  return (
    <div className="bg-white flex items-end shadow-lg rounded-lg p-4">
      <div className="flex flex-col">
        <label className="text-gray-400 text-xs mb-1">Select Location</label>
        <select value={search} className="bg-gray-100 py-2 px-3 min-w-56 me-8 rounded-md border focus:border-gray-400 text-gray-700 font-semibold" onChange={handleChange}>
          {locations.map(({ label, value }) => (
            <option key={value} value={value} className="py-2">
              {label}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
}

export default SearchBar;
