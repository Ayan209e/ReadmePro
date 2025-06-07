import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroVideo } from "./HeroVideo";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <HeroContent />
          <HeroVideo />
        </div>
      </div>
    </div>
  );
};
