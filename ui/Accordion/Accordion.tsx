"use client";
import React, { JSX, useState } from "react";
import { CaretIcon } from "../Icons";
import { cn } from "../../core";

interface AccordionProps {
  title: string;
  description: JSX.Element;
}

export const Accordion = ({ title, description }: AccordionProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-5 w-full text-left focus:outline-none cursor-pointer"
        aria-expanded={showDescription}
        onClick={() => setShowDescription(!showDescription)}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center text-lg font-medium">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-blue-500 text-sm font-bold">1</span>
            </div>
            <span className="text-gray-900">{title}</span>
          </div>
          <div
            className="text-blue-500 transition-transform duration-300 ease-in-out"
            style={{
              transform: showDescription ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <CaretIcon />
          </div>
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out opa",
          showDescription ? "max-h-full opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="pt-2 pb-6 px-10 text-gray-600">{description}</div>
      </div>
    </div>
  );
};
