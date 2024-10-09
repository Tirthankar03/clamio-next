// src/components/shared/HeaderUser.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import NavigationLinks from './NavigationLinks';
import MobileNav from './MobileNav';
import PropTypes from 'prop-types';
import { useSessionData } from "@/lib/useSessionData"; 
import { handleSignOut } from '@/action/auth';
interface HeaderUserProps {
  placeholder: string;
  cartItemCount: number
}

const HeaderUser: React.FC<HeaderUserProps> = ({ placeholder, cartItemCount }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data: session } = useSessionData();

    // Use effect to check the session status on mount
    useEffect(() => {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, [session]); // Dependency on session




      // Function to handle logout and re-check authentication
  const handleLogout = async () => {
    // Perform your logout logic here (API call)
    await handleSignOut();
    setIsAuthenticated(false); // Update state to force re-render
  };





  return (
    <div className='border-b shadow-md'>
       <header className=' max-w-7xl mx-auto w-full relative'>
      <div className="w-11/12 mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-36">
            <Image
              src="/assets/images/CLAMIO.svg"
              width={128}
              height={38}
              alt="Clamio logo"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationLinks cartItemCount={cartItemCount}/>
          </div>
          <div className="flex md:hidden items-center space-x-3">
          <MobileNav cartItemCount={cartItemCount} />
        </div>
        </div>

      </div>
    </header>
    </div>
   
  );
};


HeaderUser.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default HeaderUser;
