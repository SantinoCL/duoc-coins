import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";

declare module "next-auth" {
  interface User { role?: string }
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;
    };
  }
}

type OIDCProvider = {
  id: string;
  name: string;
  type: "oidc";
  issuer: string;
  clientId: string;
  clientSecret: string;
  profile: (profile: Record<string, unknown>) => {
    id: string;
    name: string;
    email: string;
    image: string | null;
    role: string;
  };
};

const providers: OIDCProvider[] = [];

if (
  process.env.DUOC_OIDC_ISSUER &&
  process.env.DUOC_OIDC_CLIENT_ID &&
  process.env.DUOC_OIDC_CLIENT_SECRET
) {
  providers.push({
    id: "duoc-oidc",
    name: "Duoc UC",
    type: "oidc",
    issuer: process.env.DUOC_OIDC_ISSUER,
    clientId: process.env.DUOC_OIDC_CLIENT_ID,
    clientSecret: process.env.DUOC_OIDC_CLIENT_SECRET,
    profile(profile: Record<string, unknown>) {
      return {
        id: String(profile.sub ?? ""),
        name: String(profile.name ?? ""),
        email: String(profile.email ?? ""),
        image: profile.picture ? String(profile.picture) : null,
        role: String(profile.role ?? "student"),
      };
    },
  });
}

const config: NextAuthConfig = {
  providers: providers as NextAuthConfig["providers"],
  callbacks: {
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.role = (token.role as string) ?? "student";
      }
      return session;
    },
    jwt({ token, profile }) {
      if (profile) {
        token.role = (profile as Record<string, unknown>).role ?? "student";
      }
      return token;
    },
  },
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
