'use client';

import { headerLinksThree } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const NavItems = () => {
    const pathname = usePathname();
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);
    const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinksThree.map((link) => {
                // Conditionally render the "My Account" link
                if (link.label === "My Account" && !(isLoggedIn || isCreatorLogin)) {
                    return null;
                  }

                  if (link.label === "Dashboard" && !isCreatorLogin) {
                    return null;
                  }
                const isActive = pathname === link.route;
                cartItemCount
                return (
                    <li
                        key={link.route}
                        className={`${isActive && 'text-primary-500'} flex-1 items-center justify-between p-medium-16 whitespace-nowrap relative`}
                    >
   <div className='flex w-full h-full items-center justify-between gap-1
   '>
   <Link href={link.route}>{link.label}</Link>
                        {link.label == 'Cart' && cartItemCount > 0 && (
                        <span className="bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
   </div>
                   
                    </li>
                )
            })}
            {/* Add Login and Signup buttons */}
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
}

export default NavItems;