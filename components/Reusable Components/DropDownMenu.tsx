import React from 'react';
import {
  BadgePlus,
  BarChartBig,
  BugPlay,
  ChevronDown,
  Coins,
  CreditCard,
  Github,
  Home,
  Keyboard,
  LifeBuoy,
  LogOut,
  NotebookPen,
  NotebookTabs,
  Plus,
  Settings,
  ShoppingBasket,
  ShoppingCart,
  User,
  Users,
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Import Link from Next.js
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; // Import Avatar components
import { setIsLoggedIn } from '@/utils/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { useRouter } from "next/navigation";
import { FaShopify } from 'react-icons/fa';
import { deleteCookie } from 'cookies-next';
import { setIsCreatorLoggedIn } from '@/utils/creatorSlice';
const headerLinksDashboard = [
  {
    label: 'Shop',
    route: '/',
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: <User className="h-4 w-4" />,
  },
  {
    label: 'Product',
    route: '/dashboard/create-product',
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    label: 'User',
    route: '/dashboard/users',
    icon: <Users className="h-4 w-4" />,
  },
  {
    label: 'Orders',
    route: '/dashboard/orders',
    icon: <LifeBuoy className="h-4 w-4" />,
  },
  
  {
    label: 'Bookings',
    route: '/dashboard/bookings',
    icon: <NotebookPen className="h-4 w-4" />,
  },
  
  {
    label: "Analytics",
    route: "/dashboard/analytics",
    icon: <BarChartBig className="h-4 w-4" />,
    variant: "ghost",
  },
  {
    label: "Product Listing",
    route: "/dashboard/product-listing",
    icon: <NotebookTabs className="h-4 w-4" />,
    variant: "ghost",
  },
  {
    label: 'Settings',
    route: '/dashboard/settings',
    icon: <Settings className="h-4 w-4" />,
  },
  {
    label: 'Payouts',
    route: '/dashboard/payouts',
    icon: <Keyboard className="h-4 w-4" />,
  },
  {
    label: 'Create Community',
    route: '/dashboard/create-community',
    icon: <BadgePlus className="h-4 w-4" />,
  },
  {
    label: 'Followers',
    route: '/dashboard/followers',
    icon: <Plus className="h-4 w-4" />,
  },
  {
    label: 'Reward',
    route: '/dashboard/reward',
    icon: <Coins className="h-4 w-4" />,
  },
];

function DropDown() {

  // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);

  const handleLogout = () => {
    if (isLoggedIn) {
      deleteCookie('user');
      dispatch(setIsLoggedIn(false));
      router.push('/');
    }

    if (isCreatorLogin) {
      deleteCookie('creator');
      dispatch(setIsCreatorLoggedIn(false));
      router.push('/explore');
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <div className="flex items-center border px-2 lg:hidden 2xl:hidden rounded-md bg-primary justify-center"> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <ChevronDown className="h-4 w-4 lg:hidden" /> */}
        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mx-5 bg-white hidden md:block lg:hidden">
        {headerLinksDashboard.map((item) => (
          <Link href={item.route} key={item.route}>
            <p>
              <DropdownMenuItem className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
                {item.icon}
                <span className='px-2'>{item.label}</span>
              </DropdownMenuItem>
            </p>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem  onClick={handleLogout} className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
          <LogOut className="mr-2 h-4 w-4 " />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
