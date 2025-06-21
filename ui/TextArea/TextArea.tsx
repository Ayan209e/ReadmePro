import React from "react";
import { ErrorIcon } from "../Icons";

interface TextAreaProps {
  error?: string;
  id: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
  value: string;
}

export const TextArea = ({
  error = "",
  id,
  label,
  name,
  onChange,
  placeholder,
  rows = 5,
  value,
}: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value}
      />
      {error && (
        <div className="flex gap-1">
          <ErrorIcon />
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};
