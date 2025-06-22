import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useSignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithGitHub = async () => {
    if (session) {
      router.push("/dashboard");
    } else {
      try {
        setIsLoading(true);
        setError(null);

        // Initiate GitHub authentication flow
        await signIn("github", { callbackUrl: "/dashboard" });
      } catch (err) {
        setError("Authentication failed. Please try again.");
        console.error("Auth error:", err);
      }
    }
  };

  return {
    isLoading,
    error,
    signInWithGitHub,
  };
};
