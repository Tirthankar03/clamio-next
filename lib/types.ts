import { LucideIcon } from "lucide-react";

export type SalesProps = {
    name: string,
    email: string,
    saleAmount: string,
 }


 export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    discription: string;
  };


 export type BankAccount = {
   accountHolderName: string;
   ifscCode: string;
   accountNumber: string;
   status: string;
   accountType: string;
 };
 
 export type Creator = {
   _id: number;
   user_id: string;
   title: string;
   description: string;
   website: string;
   avatar: string;
   banner: string;
   social_links: string[];
   expertise: string[];
   averageRating: number;
   numFollowers: string;
   totalSales: string;
   earnings: number;
   bankAccount: BankAccount;
   img_url?: string;       // Optional if not always present
   profile_url?: string;   // Optional if not always present
 };
 
 export type Member = {
   user_id: string;
 };
 
 export type Community = {
   _id: string;
   creator_id: string;
   name: string;
   description: string;
   thumbnail_url: string;
   member_count: number;
   members: Member[];
 };

 export enum Category {
   Electronics = "Electronics",
   Books = "Books",
   Clothing = "Clothing",
   Home = "Home",
   Toys = "Toys",
   // Add other categories as needed
 }
 
 // Define the Product type
 export type Product = {
   _id: number;
   product_url: string;
   creator_id: string;
   created_date: Date;
   title: string;
   description: string;
   category: Category[];
   price: number;
   thumbnail_url: string;
   file_url: string;
   content_file_type: string;
   avg_rating: number;
   review_id: string;
 };
 
 export type Review = {
   _id: string;
   product_id: string;
   reviews: {
     user_id: string;
     rating: number;
     comment: string;
     created_date: Date;
     review_photo_urls: string[]; // Array to hold up to 4 photo URLs
   }[];
   like_id: string;
   like_count: number;
 };

 export type Like = {
   _id: string;
   user_id: string;
   product_id: string;
   review_id: string;
   comment_id: string;
 };

 export type Wishlist = {
   _id: string;
   user_id: string;
   created_date: Date;
   items: {
     product_id: string;
     product_name: string;
     product_price: number;
     title: string;
     product_url: string;
     added_date: Date;
   }[];
 };

 export type User = {
   _id: string;
   username: string;
   email: string;
   password: string;
   bio: string;
   profile_picture: string;
   creator: boolean;
 };
 export type Order = {
   _id: string;
   order_id: string;
   user_id: string;
   product_id: string;
   purchase_date: Date;
   price_paid: number;
   status: string;
 }; 

 export interface OrderDemo {
  date: string;
  userId: string;
  total: string;
  shipTo: string;
  orderId: string;
  productName: string;
  imgUrl: string;
  status?: string; // Optional because it may be empty
  type: string;
}


 export type Invoice = {
   _id: string;
   invoice_id: string;
   order_id: string;
   invoice_date: Date;
   order_date: Date;
   due_date: Date;
   customer: {
     customer_id: string;
     name: string;
     email: string;
     billing_address: string;
   };
   products: {
     product_id: string;
     name: string;
     quantity: number;
     unit_price: number;
     total_price: number;
   }[];
   payment: {
     status: string;
     method: string;
     transaction_id: string;
   };
 };

 export type ClamioCoin = {
   _id: string;
   user_id: string;
   amount: number;
   reason: string;
 };

 export type Achievement = {
   _id: string;
   name: string;
   threshold: number;
 };

 export type Follow = {
   _id: string;
   follower_id: string;
   following_id: string;
 };

 export type Service = {
   _id: string;
   product_url: string;
   creator_id: string;
   created_date: Date;
   title: string;
   description: string;
   category: string[]; // Assuming category is an array of strings
   price: number;
   thumbnail_url: string;
   file_url: string;
   content_file_type: string;
   avg_rating: number;
   review_id: string;
 };

 export type BookService = {
   _id: string;
   order_id: string;
   user_id: string;
   service_id: string;
   purchase_date: Date;
   price_paid: number;
   status: string;
 };
 
 export type Wishlists = {
   _id: string;
   user_id: string;
   product_id: string;
 };

 export type CommunityMember = {
   _id: string;
   user_id: string;
   community_id: string;
 };

 export type Comment = {
   _id: string;
   user_id: string;
   community_id: string;
   product_id: string;
   review_id: string;
   content: string;
 };

 //extra types not compatible with backend

 export type CartItemProps = {
  id: number;
  productName: string;
  name: string;
  imageUrl: string;
  quantity: number;
  price: string; // Assuming price is a string like "$20.00"
};






