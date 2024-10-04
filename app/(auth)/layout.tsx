import Footer from "@/components/shared/Footer";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import { Toaster } from 'sonner';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex min-h-screen flex-col">
            {/* <HeaderUser placeholder="search creator" /> */}
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
        </div>
    );
}
