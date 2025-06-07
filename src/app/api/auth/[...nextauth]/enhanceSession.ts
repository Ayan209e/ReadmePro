import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

/**
 * Enhances the user session with data from the JWT token
 * @param session - The user session object
 * @param token - The JWT token containing GitHub data
 * @returns Enhanced session with GitHub information
 */
export function enhanceSession({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}): Session {
  session.accessToken = token.accessToken as string | undefined;

  if (session.user) {
    session.user.login = token.login as string | undefined;
  }

  return session;
}
