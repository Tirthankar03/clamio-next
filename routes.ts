export const publicRoutes = [ '/creator', '/auth/signup']

export const privateRoutes = [
    '/dashboard',  // Add all your private routes here
    '/profile',
    '/settings',
  ];
  
export const authRoutes = [
    '/auth/signin', 
    , '/auth/error', '/test']




export const apiAuthPrefix="/api/auth"


export const DEFAULT_LOGIN_REDIRECT= '/'