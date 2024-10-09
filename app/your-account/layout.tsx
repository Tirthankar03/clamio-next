import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import BottomNavigation from "@/components/Reusable Components/BottomNavigation"; // Import the BottomNavigation component
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import Sidebar from "@/components/shared/Sidebar";
import Footer from "@/components/shared/Footer";
import BottomNav from "@/components/shared/BottomNav";
import { getAllCart } from "@/lib/getRoutes/cart";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body>
        <HeaderUser placeholder="search products" cartItemCount={cartItemCount} />
        <div className="bg-zinc-100">
          <div
            className={cn(
              "min-h-screen max-w-7xl mx-auto text-black flex",
              inter.className,
              { "debug-screens": process.env.NODE_ENV === "development" }
            )}
          >
            <Sidebar />
            <div className="lg:p-8 mt-8 w-full mb-16">
              {children}
            </div>
          </div>
        </div>
        <BottomNav /> {/* Add BottomNavigation component here */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
