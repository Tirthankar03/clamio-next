/*
    fetch(`https://...`, { cache: 'force-cache' | 'no-store' })
    fetch(`https://...`, { next: { revalidate: false | 0 | number } })

     fetch(endpoint, { next: { tags: ['users'] } })

     why fresh data might not come up
        -hot reload doesn't show new data: only clears the router cache of the browser
        -need to revalidate the http cache 

    
    do parallel data fetching when required
*/

import { revalidatePath } from "next/cache";

export async function getAllCreators() {
  try {

    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/creator`, {
      next: {
        revalidate: 30,
        tags: ['all-creators'],
      },
      credentials: 'include'
    });

    const data = await response.json();
    // Ensure data is an array
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Data returned is not an array", data);
      return [];
    }
  } catch (error: any) {
        console.error("error in addToCart>>>>>>>>:", error);
        return { message: error.response?.data?.message || "Unable to add to cart", success: false }
  }
}


//CAUTION: will fix ts after schema is finalized

//manual revalidation to be done after POST,PATCH by creator
export async function getCreatorById(id:any) {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/creator/${id}`);
      const data = await response.json();

      return data;
    } catch (e: any) {
      console.log(e)
      return []
    }
}










  



  