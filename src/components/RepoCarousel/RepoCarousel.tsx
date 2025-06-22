import React from "react";
import { RepoCarouselHeader } from "./RepoCarouselHeader";

export const RepoCarousel = () => {
  return (
    <div className="rounded-lg border shadow-sm bg-blue-50 border-blue-200 p-6 flex flex-col gap-6">
      <RepoCarouselHeader />
      <div className="flex justify-center items-center p-6 bg-white border border-gray-200 rounded-lg h-[200px]">Repositories</div>
    </div>
  );
};
