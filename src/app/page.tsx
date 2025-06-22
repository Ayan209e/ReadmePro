"use client";
import { Faq, Features, Hero, TryNow } from "@/components";
import { FutureScope } from "@/components/FutureScope/FutureScope";

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <Hero />
      <Features />
      <TryNow />
      <FutureScope />
      <Faq />
    </main>
  );
};

export default Home;
