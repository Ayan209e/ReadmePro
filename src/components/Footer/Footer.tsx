import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t rounded-t-[48px] shadow-gray-600 shadow-2xl border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          <a href="#features" className="text-gray-500 hover:text-gray-900">
            Features
          </a>
          <a href="#faq" className="text-gray-500 hover:text-gray-900">
            FAQ
          </a>
          <a href="/contact" className="text-gray-500 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <p className="mt-8 text-center text-gray-400">
          © {currentYear} ReadmePro. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4 text-xs">
          <a className="text-gray-400 hover:text-gray-500" href="/terms">
            Terms of Service
          </a>
          <span className="text-gray-300">•</span>
          <a className="text-gray-400 hover:text-gray-500" href="/privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
