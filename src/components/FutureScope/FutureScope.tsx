import React from "react";
import { Phases } from "./Phases";
import { JoinCTA } from "./JoinCTA";

export const FutureScope = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Code Documentation is Next
        </h2>
        <p className="text-xl text-gray-600">
          Our roadmap to complete code documentation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Phases />
        <JoinCTA />
      </div>
    </div>
  );
};
