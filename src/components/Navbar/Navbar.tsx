import Image from "next/image";
import React from "react";
import { Button, Toast } from "../../../ui";
import { signOut, useSession } from "next-auth/react";
import { useSignIn } from "../../../core/hooks";
import Link from "next/link";

export const Navbar = () => {
  const { isLoading, error, signInWithGitHub } = useSignIn();
  const { data: session } = useSession();

  const onAuthAction = () => {
    if (session) {
      signOut();
    } else {
      signInWithGitHub();
    }
  };

  let buttonText: string;
  if (isLoading) {
    buttonText = "Signing in...";
  } else {
    buttonText = session ? "Sign Out" : "Get Started";
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="ReadmePro"
            width={28}
            height={36}
          />
          <div className="text-primary text-xl font-bold">ReadmePro</div>
        </Link>
        {buttonText}
        <Button
          disabled={isLoading}
          onClick={onAuthAction}
          className={session ? "bg-secondary text-gray-900" : "bg-primary"}
        >
          {buttonText}
        </Button>

        {error && <Toast message={error} />}
      </div>
    </div>
  );
};
