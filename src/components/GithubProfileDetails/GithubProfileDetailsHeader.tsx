import React from "react";

export const GithubProfileDetailsHeader = () => {
  return (
    <div className="flex flex-col space-y-1.5 p-6 pb-3">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Github Connection
        </h3>
        <div className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium bg-blue-50 border-blue-100 text-blue-700">
          <div className="w-2 h-2 rounded-full mr-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
          Connected
        </div>
      </div>
    </div>
  );
};
