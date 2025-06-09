"use client";
import { Features, Hero, TryNow } from "@/components";

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />
      <Features />
      <TryNow />
    </main>
  );
};

export default Home;
