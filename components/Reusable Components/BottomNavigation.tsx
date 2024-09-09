import { useState } from "react";
import Link from "next/link";
import {
  ChevronUp,
  Home,
  Package,
  Users,
  User,
  Star,
  DollarSign,
  Settings,
  LayoutDashboard,
  SquareMenu,
  NotebookTabs,
  CreditCard,
  BarChartBig,
  BadgePlus,
  NotebookPen,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Label } from "recharts";

const bottomNavLinks = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
  },
  {
    label: "Orders",
    route: "/dashboard/orders",
    icon: <Package className="h-6 w-6" />,
  },
  {
    label: "User",
    route: "/dashboard/users",
    icon: <User className="h-6 w-6" />,
  },
  {
    label: "Followers",
    route: "/dashboard/followers",
    icon: <Users className="h-6 w-6" />,
  },
];

const moreLinks = [
  {
    label: "Payouts",
    route: "/dashboard/payouts",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    label: "Reward",
    route: "/dashboard/reward",
    icon: <Star className="h-6 w-6" />,
  },
  {
    label: "Settings",
    route: "/dashboard/settings",
    icon: <Settings className="h-6 w-6" />,
  },
  {
    label: "Bookings",
    route: "/dashboard/bookings",
    icon: <NotebookPen className="h-6 w-6" />,
  },
  {
    label: "Product",
    route: "/dashboard/create-product",
    icon: <CreditCard className="h-6 w-6" />,
    variant: "default",
  },
  {
    label: "Analytics",
    route: "/dashboard/analytics",
    icon: <BarChartBig className="h-6 w-6" />,
    variant: "ghost",
  },
  {
    label: "Product Listing",
    route: "/dashboard/product-listing",
    icon: <NotebookTabs className="h-6 w-6" />,
    variant: "ghost",
  },
  {
    label: "Create Community",
    route: "/dashboard/create-community",
    icon: <BadgePlus className="h-6 w-6" />,
    variant: "ghost",
  },
];

function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-md lg:hidden z-50">
      <div className="flex justify-center py-2 gap-3 sm:gap-8">
        <Link href="/dashboard">
          <div className="flex flex-col items-center text-sm text-gray-600 hover:text-primary-600 cursor-pointer">
            <LayoutDashboard className="h-6 w-6" />
            <span className="mt-1">Dashboard</span>
          </div>
        </Link>

        <Link href="/dashboard/orders">
          <div className="flex flex-col items-center px-2 text-sm text-gray-600 hover:text-primary-600 cursor-pointer">
            <Package className="h-6 w-6" />
            <span className="mt-1">Orders</span>
          </div>
        </Link>

        <Link href="/dashboard/users">
          <div className="flex flex-col items-center pl-2 text-sm text-gray-600 hover:text-primary-600 cursor-pointer">
            <User className="h-6 w-6" />
            <span className="mt-1">User</span>
          </div>
        </Link>
        <Link href="/dashboard/followers">
          <div className="flex flex-col items-center text-sm text-gray-600 hover:text-primary-600 cursor-pointer">
            <Users className="h-6 w-6 hidden sm:block" />
            <span className="mt-1 hidden sm:block">Followers</span>
          </div>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex flex-col">
              <SquareMenu className=" text-gray-600" />
              <span className="text-sm text-gray-600 text-center">More</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-white shadow-lg md:hidden">
            {moreLinks.map((link) => (
              <Link href={link.route} key={link.route} passHref>
                <DropdownMenuItem className="flex items-center md:hidden text-gray-600 hover:text-primary-600">
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default BottomNavigation;
