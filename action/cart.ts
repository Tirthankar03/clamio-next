"use server";
import { cookies } from 'next/headers'; 
import axios, { AxiosError } from 'axios'
import { getUserCookie } from '@/helpers/auth';
import { revalidateTag } from 'next/cache';


export const addToCart = async (id: string) => {
    try {
        // const cookieStore = cookies();
        // const userCookie = cookieStore.get('user'); // Assuming 'user' is the cookie name
    
        // if (!userCookie) {
        //   throw new Error('User is not authenticated');
        // }

    // Pass the cookie in the request header to the backend API
    
    const cookie = getUserCookie()


    const response = await axios.post(
        `${process.env.BASE_API_URL}/api/v1/cart`,
        { product_id: id },
        {
          headers: {
            Cookie: `user=${cookie}`, // Forward the cookie to the backend API
          },
          withCredentials: true, // Required to make cookies work for cross-origin requests
        }
      );
        const data = response.data;
        // console.log("data in registerUser>>>>>>>>>>", data);  
        revalidateTag('cart')
        return {message: "added to cart successfully", success: true}
    } catch (error: any) {
        console.error("error in addToCart>>>>>>>>:", error);
    return { message: error.response?.data?.message || "Unable to add to cart", success: false }
        
    }
}



export const deleteFromCartById = async (id: string) => {
  try {
      // const cookieStore = cookies();
      // const userCookie = cookieStore.get('user'); // Assuming 'user' is the cookie name
  
      // if (!userCookie) {
      //   throw new Error('User is not authenticated');
      // }

  // Pass the cookie in the request header to the backend API
  
  const cookie = getUserCookie()


  const response = await axios.delete(
      `${process.env.BASE_API_URL}/api/v1/cart/${id}`,
      {
        headers: {
          Cookie: `user=${cookie}`, // Forward the cookie to the backend API
        },
        withCredentials: true, // Required to make cookies work for cross-origin requests
      }
    );
      const data = response.data;
      // console.log("data in registerUser>>>>>>>>>>", data);  
      revalidateTag('cart')
      return {message: "removed successfully", success: true}
  } catch (error: any) {
      console.error("error in addToCart>>>>>>>>:", error);
  return { message: error.response?.data?.message || "Unable to add to cart", success: false }
      
  }
}