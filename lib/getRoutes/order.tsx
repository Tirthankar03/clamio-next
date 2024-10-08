import { getUserCookie } from "@/helpers/auth";
import { TCart, TCartList } from "@/types/cart";
import { TOrder, TOrderList } from "@/types/order";


export async function getAllOrders() {
  try {
    const cookie = getUserCookie();

    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/order/getAllOrders`, {
      next: {
        revalidate: 30,
        tags: ['order'],
      },
      headers: {
        'Cookie': `user=${cookie}`, // Include the cookie in the request header
        'Content-Type': 'application/json', // Optional, but good practice
      },
      credentials: 'include',
    });

    const data: TOrderList = await response.json();

    const items = data[0].items


    console.log("data in order>>>>>>>>>>>", data)
    
      // Ensure data is an array
      if (Array.isArray(items)) {
        console.log('yay')
        return items;
      } else {
        console.error("Data returned is not an array", data);
        return [];
      }


  } catch (e: any) {
    console.error("Failed to fetch orders:", e);
    return [];
  }
}
