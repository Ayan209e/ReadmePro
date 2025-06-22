import React from "react";
import { GithubIcon } from "../../../ui";

export const GithubProfileInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative shrink-0 overflow-hidden border border-blue-100 rounded-full size-20 s mb-2 bg-blue-50 flex justify-center items-center">
        <GithubIcon className="text-blue-500" />
      </div>
      <div className="font-semibold text-black text-center">Ayan Bishnoi</div>
      <div className="text-xs text-gray-500 text-center">@Ayan209e</div>
    </div>
  );
};
