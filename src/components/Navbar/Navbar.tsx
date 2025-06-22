import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, ExitIcon, Toast } from "../../../ui";
import { signOut, useSession } from "next-auth/react";
import { useSignIn } from "../../../core/hooks";

export const Navbar = () => {
  const { isLoading, error, signInWithGitHub } = useSignIn();
  const { data: session } = useSession();

  const onAuthAction = () => {
    if (session) {
      signOut({ callbackUrl: "/" });
    } else {
      signInWithGitHub();
    }
  };

  let buttonText: string | React.ReactNode;
  if (isLoading) {
    buttonText = "Signing in...";
  } else {
    buttonText = session ? (
      <div className="flex items-center gap-1">
        <ExitIcon />
        Sign Out
      </div>
    ) : (
      "Get Started"
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e2e8f0] rounded-b-[48px] shadow-gray-200 shadow-lg">
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
