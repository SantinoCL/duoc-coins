import { auth } from "./auth";
import { NextResponse } from "next/server";

const protectedPaths = ["/wallet", "/muro", "/market", "/perfil"];
const oidcConfigured = !!(
  process.env.DUOC_OIDC_ISSUER &&
  process.env.DUOC_OIDC_CLIENT_ID &&
  process.env.DUOC_OIDC_CLIENT_SECRET
);

export default auth((req) => {
  if (!oidcConfigured) return NextResponse.next();

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isProtected = protectedPaths.some((p) => nextUrl.pathname.startsWith(p));

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icons|logo|manifest).*)"],
};
