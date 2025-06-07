import React from "react";

export const HeroVideo = () => {
  return (
    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
      <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-lg">
        <div className="relative block w-full bg-white rounded-lg overflow-hidden">
          <video
            className="w-full scale-x-[1.0006] origin-left"
            src="/assets/demo.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};
