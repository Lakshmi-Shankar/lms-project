import React from "react";

type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

const Input = ({ label, type = "text", placeholder }: InputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-gray-900 border rounded px-3 py-2 placeholder-gray-300 focus:outline-none hover:ring-2 hover:ring-blue-500"
      />
    </div>
  );
};

export default Input;
