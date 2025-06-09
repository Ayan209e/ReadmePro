import React from "react";
import { ArrowIcon, Button, Toast } from "../../../ui";
import { useSignIn } from "../../../core";

export const TryNow = () => {
  const { isLoading, error, signInWithGitHub } = useSignIn();

  return (
    <div className="bg-[#F5F7FF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to Streamline Your Project&apos;s Documentation?
        </h2>
        <Button
          className="mt-8 text-sm h-12 px-8 group min-w-[200px]"
          disabled={isLoading}
          onClick={signInWithGitHub}
        >
          {isLoading ? (
            "Signing in..."
          ) : (
            <>
              Sign Up for Free
              <ArrowIcon className="h-5 w-5" />
            </>
          )}
        </Button>
        <p className="mt-4 text-gray-600">Give it a try for free!</p>

        {error && <Toast message={error} />}
      </div>
    </div>
  );
};
