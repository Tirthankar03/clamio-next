
// 'use client';
import Footer from "@/components/shared/Footer";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import { Provider } from "react-redux";
import { store } from "@/Store/store";
import ReduxProvider from "@/utils/ReduxProvider";
import Navbar from "@/components/shared/Navbar/navbar";
import { SessionDataProvider } from '@/components/wrapper/SessionDataWrapper'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
<SessionDataProvider>

    <div className="flex min-h-screen flex-col">
      <Navbar/>
      {/* <HeaderUser placeholder="search products" /> */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
    </SessionDataProvider>

  );
}
