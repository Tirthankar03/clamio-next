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

// export async function getAllCreators() {
//     try {
//       const response = await fetch(`${process.env.BASE_API_URL}/api/v1/creator`, {
//           next:{
//               revalidate: 30,
//               tags:['all-creators']
//               //revalidate:0 to opt out of cache?
//           }
//       });
//     //   if (!response.ok) {
//     //     throw new Error(`failed to fetch ${response.status}`);
//     //  }
//       const data = await response.json();
//       return data;
//     } catch (e: any) {
//       // console.log(e);
//       return [];
//     }
// }

//CAUTION: will fix ts after schema is finalized

//manual revalidation to be done after POST,PATCH by creator
export async function getUserById(id:any) {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/user/${id}`);
      const data = await response.json();

      return data;
    } catch (e: any) {
      console.log(e)
      return null
    }
}










  



  