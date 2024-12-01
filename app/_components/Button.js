import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="py-2 px-4 h-fit bg-gray-900 text-white border border-transparent rounded-md hover:text-black hover:border hover:border-gray-900 hover:bg-transparent hover:scale-90 transition-all"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
