import React from "react";
import { Accordion } from "../../../ui";
import { FAQs } from "./faq.helper";
import { PlusIcon } from "../../../ui/Icons/PlusIcon";
import Link from "next/link";

export const Faq = () => {
  return (
    <div id="faq" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            <span className="text-blue-500">Questions?</span> Look here.
          </h2>
        </div>
        <div className="space-y-3">
          {FAQs.map((faq) => (
            <Accordion key={faq.index} {...faq} />
          ))}
        </div>

        <div className="text-center mt-12 py-4">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full">
            <span className="text-blue-500 mr-2">
              <PlusIcon />
            </span>
            <span>
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Contact us
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
