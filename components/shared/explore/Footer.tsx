import React from 'react';
import Image from 'next/image'; // Importing next/image component from Next.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-4 text-center my-10">
      <div className="grid gap-4 justify-center place-items-center">
        <Image
          src="/Frame 203.png" // Replace with your image path
          alt="Star"
          width={300} // Set the desired width of the image
          height={200} // Set the desired height of the image
          className="max-w-full h-auto"
        />
        <p className='text-5xl my-4 font-extrabold'>Get Inspired</p>
        <p className='text-md max-w-screen-sm'>Don't miss out on fresh content and follow your favorite creators today! Stay in the loop and never miss their newest creations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <Link href='/'>

          <button className="bg-primary font-bold text-black py-3 px-20 rounded">Browse Products</button>
          </Link>
          <Link href='/creator'>

          <button className="bg-primary font-bold text-black py-3 px-20 rounded">Discover Creators</button>
          </Link>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
