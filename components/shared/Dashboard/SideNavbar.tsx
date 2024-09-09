"use client";

import React, { useState } from "react";
import { Nav } from "@/components/ui/nav";

type Props = {};

import { LayoutDashboard, UserCheck, ShoppingCart, Settings, UsersRound, Gift, Heart,ChevronRight,CreditCard, Keyboard,NotebookTabs,BarChartBig, BadgePlus, NotebookPen } from 'lucide-react';
import { Button } from "@/components/ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 1280;
  return (
    <div className="relative lg:min-w-[80px] hidden lg:block  border-r lg:px-8 pb-10 pt-24">

      <div className="hidden  lg:block">
      {!mobileWidth && (
        <div className="absolute  right-[-20px] top-7 ">
          <Button
            variant="default"
            className="rounded-full p-2"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <ChevronRight className=""  />
          </Button>
        </div>
      )}

<Nav
  isCollapsed={mobileWidth ? true : isCollapsed}
  links={[
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      variant: "default",
    },
    {
      title: "Product",
      href: "/dashboard/create-product",
      icon: CreditCard,
      variant: "default",
    },
    {
      title: "Payouts",
      href: "/dashboard/payouts",
      icon: Keyboard,
      variant: "default",
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: UsersRound,
      variant: "ghost",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChartBig,
      variant: "ghost",
    },
    {
      title: "Product Listing",
      href: "/dashboard/product-listing",
      icon: NotebookTabs,
      variant: "ghost",
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: ShoppingCart,
      variant: "ghost",
    },
    {
      title: "Bookings",
      href: "/dashboard/bookings",
      icon: NotebookPen,
      variant: "ghost",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      variant: "ghost",
    },
    {
      title: "Followers",
      href: "/dashboard/followers",
      icon: UserCheck,
      variant: "ghost",
    },
    {
      title: "Rewards",
      href: "/dashboard/reward",
      icon: Gift,
      variant: "ghost",
    },
    {
      title: "Create Community",
      href: "/dashboard/create-community",
      icon: BadgePlus,
      variant: "ghost",
    },
    {
      title: "Service",
      href: "/dashboard/service",
      icon: BadgePlus,
      variant: "ghost",
    },
  ]}
/>
      </div>
    </div>
  );
}
