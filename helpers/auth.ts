import { cookies } from 'next/headers'; 


export const getUserCookie = () => {
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user'); // Assuming 'user' is the cookie name

    if (!userCookie) {
      throw new Error('User is not authenticated');
    }

    return userCookie.value
}