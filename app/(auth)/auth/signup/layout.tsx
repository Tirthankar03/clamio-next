import { store } from "@/Store/store";
import ReduxProvider from "@/utils/ReduxProvider";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex min-h-screen flex-col">
      {/* <ReduxProvider> */}
        <main className="flex-1">{children}</main>
      {/* </ReduxProvider> */}
    </div>
  );
}
