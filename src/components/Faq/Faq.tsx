import React from "react";
import { Accordion } from "../../../ui";
import { FAQs } from "./faq.helper";
import { PlusIcon } from "../../../ui/Icons/PlusIcon";
import Link from "next/link";

export const Faq = () => {
  return (
    <div id="faq" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500">Questions?</span> Look here.
          </h2>
        </div>
        <div className="space-y-3">
          {FAQs.map(({ title, description }) => (
            <Accordion key={title} title={title} description={description} />
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
                className="text-blue-600 font-medium hover:underline cursor-pointer"
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
