import Footer from "@/components/shared/Footer";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import { Toaster } from 'sonner';
import { getAllCart } from "@/lib/getRoutes/cart";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userCartDetails = await getAllCart();

    // Initialize cartItemCount to 0 as a default value
    let cartItemCount = 0;
  
    // Check if the data and products are available
    if (userCartDetails?.data && Array.isArray(userCartDetails.data.products)) {
      cartItemCount = userCartDetails.data.products.length;
    }
  
    console.log(userCartDetails);
    console.log("cartItemCount>>>>>", cartItemCount);
  
    return (
        <div className=" flex min-h-screen flex-col">
            <HeaderUser placeholder="search creator" cartItemCount={cartItemCount} />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
        </div>
    );
}
