"use client";
import { BiSolidErrorCircle } from "react-icons/bi";
import Button from "./_components/Button";

function Error({ error, reset }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <BiSolidErrorCircle className="text-6xl text-gray-800" />
      <span className="text-gray-700">{error.message || "Something went wrong!"}</span>
      <Button onClick={reset}>Reload</Button>
    </div>
  );
}

export default Error;
