import { getUserCookie } from "@/helpers/auth";
import { TCart, TCartList } from "@/types/cart";

interface GetAllCartResponse {
  data?: TCart;
  success: boolean;
}

export async function getAllCart(): Promise<GetAllCartResponse> {
  try {
    const cookie = getUserCookie();

    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/cart`, {
      next: {
        revalidate: 30,
        tags: ['cart'],
      },
      headers: {
        'Cookie': `user=${cookie}`, // Include the cookie in the request header
        'Content-Type': 'application/json', // Optional, but good practice
      },
      credentials: 'include',
    });

    const data: TCartList = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      return { data: data[0], success: true };  // Ensure that you return { data, success }
    } else {
      console.error("Data returned is not an array", data);
      return { success: false };  // Return { success: false } when there's no cart data
    }
  } catch (e: any) {
    console.error("Failed to fetch cart:", e);
    return { success: false };  // Return { success: false } on failure
  }
}
