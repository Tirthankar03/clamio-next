'use server'
import { cookies } from 'next/headers'; 
import axios, { AxiosError } from 'axios'
import { getUserCookie } from '@/helpers/auth';
import { revalidateTag } from 'next/cache';


export const createProduct = async (formData: FormData) => {
    try {
    const cookie = getUserCookie()

    const response = await axios.post(
        `${process.env.BASE_API_URL}/api/v1/product`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Specify multipart/form-data
            Cookie: `user=${cookie}`, // Forward the cookie to the backend API
          },
          withCredentials: true, // Required to make cookies work for cross-origin requests
        }
      );
      
        const data = response.data;
        console.log("data in product>>>>>>>>>>", data);  
        revalidateTag('product')
        return {message: "product launched!", success: true}
    } catch (error: any) {
        console.error("error in product>>>>>>>>:", error);
        console.error("error.response?.data in product>>>>>>>>:", error.response?.data);
    return { message: error.response?.data?.message || "Unable to create", success: false }
        
    }
}
