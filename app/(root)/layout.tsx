
// 'use client';
import Footer from "@/components/shared/Footer";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import { Provider } from "react-redux";
import { store } from "@/Store/store";
import ReduxProvider from "@/utils/ReduxProvider";
import Navbar from "@/components/shared/Navbar/navbar";
import { SessionDataProvider } from '@/components/wrapper/SessionDataWrapper'
import { getAllCart } from "@/lib/getRoutes/cart";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userCartDetails = await getAllCart()

   // Initialize cartItemCount to 0, as a default value
   let cartItemCount = 0;

   // Check if the data and products are available
   if (userCartDetails?.data && Array.isArray(userCartDetails.data.products)) {
     cartItemCount = userCartDetails.data.products.length;
   }

   console.log(userCartDetails)

   console.log("cartItemCount>>>>>", cartItemCount)

  return (
<SessionDataProvider>

    <div className="flex min-h-screen flex-col">
      <HeaderUser placeholder="search products" cartItemCount={cartItemCount}/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
    </SessionDataProvider>

  );
}
