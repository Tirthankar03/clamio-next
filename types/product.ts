export type TProduct = {
    _id: string;
    title: string;
    description: string;
    createdon: string; // Assuming format is ISO 8601
    updatedon: string; // Assuming format is ISO 8601
    category: string;
    price: number;
    images_url: string[];
    product_url: string;
    content_type: string;
    creator_id: string;
    total_purchase: number;
    creator_name: string; // Optional field
  };
  
  export type TProductList = TProduct[];