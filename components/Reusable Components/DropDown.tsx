import React, { useState } from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { setIsLoggedIn } from '@/utils/authSlice';
import { setIsCreatorLoggedIn } from '@/utils/creatorSlice';
import { deleteCookie } from 'cookies-next';
import { LogOut, UserRound, ListOrdered, User, BadgePlus, NotebookTabs, HandHeart, UsersRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { handleSignOut } from '@/action/login';

const DropDownMenu = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);
  const [count, setCount] = useState(0)

  const handleLogout = async() => {
    await handleSignOut();
    dispatch(setIsLoggedIn(false))
  };

  const dropdownLinkMain = [
    {
      label: 'My Account',
      route: '/your-account',
      icon: <UserRound className="h-4 w-4" />,
    },
    {
      label: 'Orders',
      route: '/your-account',
      icon: <ListOrdered className="h-4 w-4" />,
    },
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: <User className="h-4 w-4" />,
    },
    {
      label: "Community",
      route: "/community",
      icon: <HandHeart  className="h-6 w-6" />,
    },
    {
      label: "creators",
      route: "/creator",
      icon: <UsersRound  className="h-6 w-6" />,
    },
  ]


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mx-5 bg-white hidden md:block lg:block">
      {dropdownLinkMain.map((item) => {
        
        if (item.label === "Dashboard" && !isCreatorLogin) {
          return null;
        }
        
        return(

          <Link href={item.route} key={item.route}>
            <p>
              <DropdownMenuItem className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
                {item.icon}
                <span className='px-2'>{item.label}</span>
              </DropdownMenuItem>
            </p>
          </Link>
        )})}
        <DropdownMenuItem onClick={handleLogout}  className='cursor-pointer hover:bg-yellow-300 transition-all duration-200'>
          <LogOut className="mr-2 h-4 w-4 " />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
