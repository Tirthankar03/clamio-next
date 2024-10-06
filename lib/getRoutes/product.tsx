export async function getTopSellingProduct() {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/product/filter/topSellingProduct`, {
        next: {
          revalidate: 30,
          tags: ['topSellingProduct'],
        },
        credentials: 'include'
      });
  
      const data = await response.json();
      // console.log("data in getTopSellingProduct>>>>>>>>", data)

      // Ensure data is an array
      if (Array.isArray(data)) {
        console.log('yay')
        return data;
      } else {
        console.error("Data returned is not an array", data);
        return [];
      }
    } catch (e: any) {
      console.error("Failed to fetch topSellingProduct:", e);
      return [];
    }
  }


  export async function getHotAndNewProduct() {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/api/v1/product/filter/hotAndNewProduct`, {
        next: {
          revalidate: 30,
          tags: ['hotAndNewProduct'],
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
    } catch (e: any) {
      console.error("Failed to fetch hotAndNewProduct:", e);
      return [];
    }
  }






//CAUTION: will fix ts after schema is finalized

//manual revalidation to be done after POST,PATCH by creator
export async function getProductById(id:string) {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/product/${id}`);
    const data = await response.json();

    return data;
  } catch (e: any) {
    console.log(e)
    return []
  }
}