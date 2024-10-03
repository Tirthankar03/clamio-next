// src/components/shared/HeaderUser.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import NavigationLinks from './NavigationLinks';
import MobileNav from './MobileNav';
import PropTypes from 'prop-types';

interface HeaderUserProps {
  placeholder: string;
}

const HeaderUser: React.FC<HeaderUserProps> = ({ placeholder }) => {
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
          <div className="flex-grow hidden md:flex justify-center">
            <SearchBar placeholder={placeholder} />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationLinks />
          </div>
          <div className="flex md:hidden items-center space-x-3">
            <MobileNav />
          </div>
        </div>
        <div className="md:hidden flex w-full mt-4">
          <SearchBar placeholder={placeholder} />
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
