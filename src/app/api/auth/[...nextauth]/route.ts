import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { enhanceToken } from "./enhanceToken";
import { enhanceSession } from "./enhanceSession";

/**
 * NextAuth Type Extensions
 * Extending the default types to include GitHub-specific properties
 */
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      login?: string; // GitHub username
    };
  }
  interface User {
    login?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({token, account, profile}) {
      return enhanceToken({
        token,
        account,
        profile,
      });
    },
    async session(params) {
      return enhanceSession(params);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
