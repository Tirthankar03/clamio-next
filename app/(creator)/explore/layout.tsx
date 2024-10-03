import Footer from "@/components/shared/Footer";
import HeaderMain from "@/components/shared/HeaderMain";
import { store } from "@/Store/store";
import ReduxProvider from "@/utils/ReduxProvider";
import Navbar from "@/components/shared/Navbar/navbar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { SessionDataProvider } from '@/components/wrapper/SessionDataWrapper'



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // <ReduxProvider>
      // <SessionProvider>
<SessionDataProvider>
        
      <div className=" flex min-h-screen flex-col">
        {/* <HeaderMain />
         */}
      <Navbar/>

        <main className="flex-1">{children}</main>
        <Footer />
      </div>



      </SessionDataProvider>


  );
}
