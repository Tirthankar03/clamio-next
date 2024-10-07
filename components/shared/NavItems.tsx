'use client'
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants/data";
import { RootState } from "@/Store/store";
import { Button } from "../ui/button";
import { setIsLoggedIn } from "@/utils/authSlice";
import DropDownMenu from "../Reusable Components/DropDown";
import { useSessionData } from "@/lib/useSessionData";

const NavItems = () => {
  const pathname = usePathname();
  const { data: isLoggedIn } = useSessionData();

  const isCreatorLogin = isLoggedIn?.user.isCreator

  console.log("isCreatorLogin in NavItems>>>>>>>", isCreatorLogin)
  
  // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  // const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);
  const dispatch = useDispatch();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:mr-10 md:flex-row">
      {headerLinks.map((link) => {
        // Conditionally render the "My Account" link
        if (link.label === "My Account" && !(isLoggedIn || isCreatorLogin)) {
          return null;
        }
        if (link.label === "Dashboard" && !isCreatorLogin) {
          return null;
        }
        return (
          <li
            key={link.route}
            className={`${
              pathname === link.route ? "text-primary-500" : ""
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
      {(isLoggedIn || isCreatorLogin) && (
        <li className="hidden md:block">
          <DropDownMenu /> {/* Render your dropdown menu component */}
        </li>
      )}
      {!isLoggedIn && !isCreatorLogin && (
        <ul className="flex gap-2">
          <li>
            <Button className="font-semibold hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md">
              <Link href="/login">Login</Link>
            </Button>
          </li>
          <li>
            <Button className="font-semibold hover:bg-yellow-400 px-4 py-2 rounded-md shadow-md">
              <Link href="/signup">Signup</Link>
            </Button>
          </li>
        </ul>
      )}
    </ul>
  );
};

export default NavItems;
