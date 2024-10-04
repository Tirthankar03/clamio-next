'use client'
import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DropDown from '@/components/Reusable Components/DropDownMenu';
import { Button } from '@/components/ui/button';
import { RootState } from '@/Store/store';
import DropDownMenu from '@/components/Reusable Components/DropDown';
import { LucideShoppingBag } from 'lucide-react';
import { useSessionData } from "@/lib/useSessionData";

const NavigationLinks = () => {
    const cartItemCount = useSelector((state: RootState) => state.cart.items.length);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);
    const { data: session } = useSessionData();
    console.log("session>>>>>>>> navbar", session)

    return (
        <>
            <div>

            </div>
            <Link href="/explore" className="text-lg hover:text-primary text-syne hidden md:block">
                <Button type="button" className="flex items-center bg-black text-white rounded-lg px-4 py-2">
                    <LucideShoppingBag className="w-5 h-5 mr-2" />
                    SELL
                </Button>
            </Link>
            <Link href="/favourite">
                <button type='button'><FaHeart className="w-6 h-6" /></button>
            </Link>
            <Link href="/cart">
                <button type='button' className="relative">
                    <FaShoppingCart className="w-6 h-6 hover:cursor" />
                    {cartItemCount > 0 && (
                        <span className="absolute left-4 bottom-3 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            </Link>
            {(session) ? (
                <DropDownMenu />
            ) : (
                <div className="flex gap-2">
                    <Button className="font-semibold bg-yellow-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition duration-300">
                        <Link href="/auth/signin">Login</Link>
                    </Button>
                    <Button className="font-semibold bg-yellow-400 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition duration-300">
                        <Link href="/auth/signup">Signup</Link>
                    </Button>
                </div>
            )}
        </>
    );
}

export default NavigationLinks;
