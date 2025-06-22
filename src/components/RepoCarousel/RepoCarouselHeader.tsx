import React from "react";

export const RepoCarouselHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Your Repositories
      </h3>
      <div className="justify-center whitespace-nowrap text-sm font-bold h-9 rounded-md px-3 bg-white text-blue-600 border border-blue-200 flex items-center">
        Public Repos: 0
      </div>
    </div>
  );
};
