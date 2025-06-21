import React from "react";
import { ContactHeader } from "./components/ContactHeader";
import { ContactForm } from "./components/ContactForm";

const Contact = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full">
          <ContactHeader />
          <ContactForm />
        </div>
      </main>
    </main>
  );
};

export default Contact;
