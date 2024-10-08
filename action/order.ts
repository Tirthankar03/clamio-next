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


export const downloadFile = async (id: string) => {
    try {
        // const cookieStore = cookies();
        // const userCookie = cookieStore.get('user'); // Assuming 'user' is the cookie name
    
        // if (!userCookie) {
        //   throw new Error('User is not authenticated');
        // }

    // Pass the cookie in the request header to the backend API
    
    const cookie = getUserCookie()


    const response = await axios.get(
        `${process.env.BASE_API_URL}/api/v1/downloadable/download/${id}`,
        {
            headers: {
                Cookie: `user=${cookie}`, // Pass the user cookie
            },
            withCredentials: true, // For cross-origin cookies
            responseType: 'blob',  // Set response type to blob to handle file downloads
        }
    );
        // const data = response.data;
        // // console.log("data in registerUser>>>>>>>>>>", data);  
        // // revalidateTag('cart')
        // return {message: "downloaded successfully", success: true}
        // return {data, }
        return response
    } catch (error: any) {
        console.error("error in addToCart>>>>>>>>:", error);
    return { message: error.response?.data?.message || "Unable to add to cart", success: false }
        
    }
}



// export const downloadFile = async (id: string) => {
//     try {
//         const cookie = getUserCookie(); // Get the cookie if needed

//         // Make the request to get the file
//         const response = await axios.get(
//             `${process.env.BASE_API_URL}/api/v1/downloadable/download/${id}`,
//             {
//                 headers: {
//                     Cookie: `user=${cookie}`, // Pass the user cookie
//                 },
//                 withCredentials: true, // For cross-origin cookies
//                 responseType: 'blob',  // Set response type to blob to handle file downloads
//             }
//         );

//         // Create a download URL from the blob
//         const fileURL = window.URL.createObjectURL(new Blob([response.data]));
//         const fileLink = document.createElement('a');
//         fileLink.href = fileURL;

//         // If the server sends a content disposition header with the file name, use it
//         const fileName = response.headers['content-disposition']?.split('filename=')[1] || 'downloaded-file';

//         // Set the filename and trigger download
//         fileLink.setAttribute('download', fileName);
//         document.body.appendChild(fileLink);
//         fileLink.click();
//         fileLink.remove();

//         return { message: "File downloaded successfully", success: true };
//     } catch (error: any) {
//         console.error("Error in downloadFile:", error);
//         return { message: error.response?.data?.message || "Unable to download the file", success: false };
//     }
// }