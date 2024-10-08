export type TOrder = {
    _id: string;
    user_id: string;
    items: TItem[];
    purchase_date: string;
    amount: number;
    status: string;
  };


export type TItem = {
    quantity: number;
    price: number;
    product_id: string;
    images_url: string[];
    title: String
  }
  
  export type TOrderList = TOrder[];
  