import { Account, Profile as NextAuthProfile } from "next-auth";

interface Profile extends NextAuthProfile {
  login?: string; // Extend Profile to include the login property
}
import { JWT } from "next-auth/jwt";

/**
 * Enhances the JWT token with GitHub-specific information
 * @param token - The JWT token to enhance
 * @param account - The provider account details
 * @param profile - The user profile from GitHub
 * @returns Enhanced JWT token with GitHub data
 */
export function enhanceToken({
  token,
  account,
  profile,
}: {
  token: JWT;
  account: Account | null;
  profile: Profile | undefined;
}): JWT {
  // Only enhance token when account exists and has access_token
  if (account?.access_token && profile) {
    token.accessToken = account.access_token;

    // Add GitHub username if available
    if (profile.login) {
      token.login = profile.login;
    }
  }

  return token;
}
