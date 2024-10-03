// import { NextRequest, NextResponse } from 'next/server';

// export default function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('user')?.value;
//   const currentCreator = request.cookies.get('creator')?.value;

//   const loginUrl = new URL('/login', request.url);
//   const dashboardUrl = new URL('/dashboard', request.url);
//   const exploreUrl = new URL('/explore', request.url);
//   const rootUrl = new URL('/', request.url);

//   const protectedPaths = ['/dashboard'];

//   // Check if the current path is protected
//   const isProtectedPath = protectedPaths.some((path) =>
//     request.nextUrl.pathname.startsWith(path)
//   );

//     // Redirect non-creators trying to access the dashboard
//     if (isProtectedPath && !currentCreator) {
//       return NextResponse.redirect(rootUrl);
//     }


//   // Redirect logged-in users trying to access the login page
//   if (currentCreator && request.nextUrl.pathname === '/login') {
//     return NextResponse.redirect(exploreUrl);
//   }

//   if (currentUser && request.nextUrl.pathname === '/login') {
//     return NextResponse.redirect(rootUrl);
//   }

//   // Redirect users trying to access protected paths when not authenticated
//   if (isProtectedPath && !currentUser && !currentCreator) {
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/login'],
// };

import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  // const Something =req.auth?.user.
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/test", nextUrl));
  }


  return;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
