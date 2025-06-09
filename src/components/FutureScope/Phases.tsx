import React from "react";

export const Phases = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className="w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Phase 1: README Generation
          </h3>
          <p className="text-gray-600">
            Available now - Create professional README files instantly.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-6 h-6 rounded-full bg-gray-300 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Phase 2: Full Code Documentation
          </h3>
          <p className="text-gray-600">
            Coming soon - Comprehensive documentation for classNamees,
            functions, and more.
          </p>
        </div>
      </div>
    </div>
  );
};
