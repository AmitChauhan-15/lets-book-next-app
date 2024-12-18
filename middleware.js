import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";
import { privateRoute } from "./app/_helpers/constant";

export const middleware = async (request) => {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session?.user;

  const isPrivateRoute = privateRoute.find((route) => nextUrl?.pathname?.startsWith(route));

  if (!isAuthenticated && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/", "/hotels", "/profile", "/profile/reservation"],
  unstable_allowDynamic: [
    // allows a single file
    "/app/_lib/db.js",
    // use a glob to allow anything in the function-bind 3rd party module
    "/node_modules/mongoose/dist/**",
  ],
};
