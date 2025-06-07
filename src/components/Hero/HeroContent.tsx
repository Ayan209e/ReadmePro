"use client";
import React from "react";
import { ArrowIcon, Button, Toast } from "../../../ui";
import { useSignIn } from "../../../core/hooks";

export const HeroContent = () => {
  const { isLoading, error, signInWithGitHub } = useSignIn();

  return (
    <div className="lg:col-span-6">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span className="block">Instant, Professional</span>
        <span className="block text-primary">Code Documentation.</span>
      </h1>

      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        Document Smarter, Not Harder - All with a single click.
      </p>

      <div className="mt-9">
        <Button
          className="px-8 group w-full h-16 text-2xl"
          onClick={signInWithGitHub}
          disabled={isLoading}
        >
          {isLoading ? "Connecting..." : "Start Now"}
          {!isLoading && <ArrowIcon />}
        </Button>

        {error && <Toast message={error} />}

        <p className="mt-4 text-sm text-gray-500 text-center">
          Harness the power of AI to create professional docs for your GitHub
          projects instantly.
        </p>
      </div>
    </div>
  );
};
