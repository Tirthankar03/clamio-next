// import { auth } from "@/auth";
// import {
//   apiAuthPrefix,
//   authRoutes,
//   DEFAULT_LOGIN_REDIRECT,
//   publicRoutes,
// } from "./routes";

// export default auth((req) => {
//   const { nextUrl } = req;
//   // const Something =req.auth?.user.
//   const isLoggedIn = !!req.auth;
//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//   if (isApiAuthRoute) {
//     return;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     return Response.redirect(new URL("/auth/signin", nextUrl));
//   }


//   return;
// });

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  privateRoutes
} from "./routes";


export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPrivateRoute = privateRoutes.some((prefix) => nextUrl.pathname.startsWith(prefix));
  // const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

  // Skip API auth routes, as they're handled separately
  if (isApiAuthRoute) {
    return;
  }

  // Prevent logged-in users from accessing auth routes like login/signup
  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  // Redirect non-logged-in users trying to access private routes
  if (!isLoggedIn && isPrivateRoute) {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }

  // Allow access to everything else (which is now considered public)
  return;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
