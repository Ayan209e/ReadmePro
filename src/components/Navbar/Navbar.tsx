import Image from "next/image";
import React from "react";
import { Button } from "../../../ui";

export const Navbar = () => {
  const onGetStartedClick = () => {
    // Logic to handle "Get Started" button click
    console.log("Get Started clicked");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="ReadmePro"
            width={28}
            height={36}
          />
          <div className="text-primary text-xl font-bold">ReadmePro</div>
        </div>

        <Button onClick={onGetStartedClick}>Get Started</Button>
      </div>
    </div>
  );
};
