'use server'
import { cookies } from 'next/headers'; 
import axios, { AxiosError } from 'axios'
import { getUserCookie } from '@/helpers/auth';
import { revalidateTag } from 'next/cache';
import { TOrderList } from '@/types/order';


export const getAllOrders = async () => {
    try {

    const cookie = getUserCookie()

        // const cookieStore = cookies();
        // const userCookie = cookieStore.get('user'); // Assuming 'user' is the cookie name
    
        // if (!userCookie) {
        //   throw new Error('User is not authenticated');
        // }

    // Pass the cookie in the request header to the backend API
    


    const response = await axios.get(
        `${process.env.BASE_API_URL}/api/v1/order/getAllOrders`,
        {
          headers: {
            Cookie: `user=${cookie}`, // Forward the cookie to the backend API
          },
          withCredentials: true, // Required to make cookies work for cross-origin requests
        }
      );
    const  data: TOrderList = response.data

    const filteredOrders = data[0].items
      console.log("filteredOrders>>>>>>>>>>>>>>", filteredOrders)
        revalidateTag('order')
        // return {message: "added to cart successfully", success: true}
        return filteredOrders
    } catch (error: any) {
        console.error("error in addToCart>>>>>>>>:", error);
    // return { message: error.response?.data?.message || "Unable to add to cart", success: false }
        return []
    }
}
