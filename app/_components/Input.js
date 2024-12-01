import React from "react";

function Input({ mainClass = "", inputClass = "", label = "", ...props }) {
  return (
    <div className={`flex flex-col ${mainClass}`}>
      <label className="text-sm text-gray-500"> {label} </label>
      <input className={`w-full px-3 py-2 bg-gray-100 border rounded-md focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 ${inputClass}`} {...props} />
    </div>
  );
}

export default Input;
