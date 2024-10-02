

export async function getAllCreators() {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/creator`, {
        next:{
            revalidate: 30,
            //revalidate:0 to opt out of cache?
        }
    });
    const data = await response.json();
    return data;
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
}





//do parallel data fetching when required
