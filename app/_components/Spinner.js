import { BiLoaderAlt } from "react-icons/bi";

const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent z-20">
      <span className="">
        <BiLoaderAlt className="text-6xl spinner animate-spin" />
      </span>
    </div>
  );
};

export default Spinner;
