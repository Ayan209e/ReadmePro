"use client";
import React from "react";
import { ErrorIcon } from "../Icons";

interface InputProps {
  error?: string;
  id: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  type?: string;
}

export const Input = ({
  error = "",
  id,
  name,
  label,
  onChange,
  placeholder,
  value,
  type = "text",
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
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
