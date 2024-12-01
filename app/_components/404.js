import Link from "next/link";
import { TbError404 } from "react-icons/tb";

function NotFound({ message }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <TbError404 className="text-6xl text-gray-800" />
      <span className="text-gray-700">{message || "This page could not found :("}</span>
      <Link
        href="/"
        className="py-2 px-4 h-fit bg-gray-900 text-white border border-transparent rounded-md hover:text-black hover:border hover:border-gray-900 hover:bg-transparent hover:scale-90 transition-all"
      >
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
