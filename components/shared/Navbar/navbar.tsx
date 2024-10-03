'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSessionData } from "@/lib/useSessionData";

import { handleSignOut } from "@/action/login";
export default function Navbar() {
  //   //server
//   // const session = await auth();

//client
const { data: session } = useSessionData();

  console.log("session>>>>>>>> navbar", session)

  return (
    // <AuthProvider>
    <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Auth.js
      </Link>
      {!session ? (
        <Link href="/auth/signin">
          <Button variant="default">Sign In</Button>
        </Link>
      ) : (
        <form action={handleSignOut}>
          <Button variant="default" type="submit">
            Sign Out
          </Button>
        </form>
      )}
    </nav>
    // </AuthProvider>

  );
}
