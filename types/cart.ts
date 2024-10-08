 export interface TCartProduct {
    added_at: Record<string, any>; // You can replace `any` with a more specific type if needed
    quantity: number;
    price: number;
    product_id: string;
    creator_id: string;
    creator_name?: string; // Optional, since it's not required
    product_url: string;
    images_url: string[];
    title:string;
  }
  
  export interface TCart {
    _id: string;
    user_id: string;
    products: TCartProduct[];
    total_amount: number;
  }
  
  export type TCartList = TCart[];
  