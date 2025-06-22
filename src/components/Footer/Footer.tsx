import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="shadow-gray-600 shadow-2xl border-gray-200 border-t rounded-t-[48px] max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          <a
            href="#features"
            className="text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            Features
          </a>
          <a
            href="#faq"
            className="text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="/contact"
            className="text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            Contact
          </a>
        </nav>
        <p className="mt-8 text-center text-gray-400">
          © {currentYear} ReadmePro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
