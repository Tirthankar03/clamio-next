import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/utils/ReduxProvider";
import { Toaster, toast } from 'sonner'
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import Providers from '@/components/wrapper/Providers'
import { SessionDataProvider } from '@/components/wrapper/SessionDataWrapper'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Clamio",
  description: "Sell All your digital products now. Become a clamio creator!",
  icons: {
    icon: "/assests/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <body className={poppins.variable}>
          <ReduxProvider> 
<SessionDataProvider>
          <Providers>

          {/* <HeaderUser placeholder="search products" /> */}
          {children}
          </Providers>
          </SessionDataProvider>

          </ReduxProvider>
          </body>
      
      <Toaster richColors={true} />

    </html>
  );
}
