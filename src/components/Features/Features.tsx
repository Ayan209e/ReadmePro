import React from "react";
import { BookIcon, FlashIcon, GithubIcon } from "../../../ui";

export const Features = () => {
  return (
    <div id="features" className="pt-4 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-primary">
                <GithubIcon />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">
                  Compatible with All Public GitHub Repos
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Connect and generate documentation for any public repository
                  with ease.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-primary">
                <FlashIcon />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">
                  Lightning-Fast README Generation
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Get professional documentation in seconds using advanced AI
                  technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-primary">
                <BookIcon />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">
                  Full Documentation Coming Soon
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Complete code documentation features are in development and
                  coming to you soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
