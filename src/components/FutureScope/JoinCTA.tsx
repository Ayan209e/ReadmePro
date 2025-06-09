import React from "react";
import { ArrowIcon, Button, Toast } from "../../../ui";
import { useSignIn } from "../../../core";

export const JoinCTA = () => {
  const { isLoading, error, signInWithGitHub } = useSignIn();

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Join us early
      </h3>
      <p className="text-gray-600 mb-8">
        Create your account now and be among the first to access full
        documentation features when they launch.
      </p>
      <Button
        className="px-8 w-full justify-between h-14 text-lg group"
        disabled={isLoading}
        onClick={signInWithGitHub}
      >
        {isLoading ? (
          "Signing in..."
        ) : (
          <>
            Create Account
            <ArrowIcon className="h-6 w-6" />
          </>
        )}
      </Button>

      {error && <Toast message={error} />}
    </div>
  );
};
