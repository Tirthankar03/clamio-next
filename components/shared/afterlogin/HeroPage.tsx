import { CUATE_PNG } from '@/constants/data';
import Link from 'next/link';
import React from 'react';


const Hero = () => {
  return (
    <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] md:min-h-[60vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto max-w-6xl">
        <div className="flex justify-center">
          <img className=" w-64 h-64 mt-5 md:w-96 md:h-96" src={CUATE_PNG} alt="Hero" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-7">Be a <span className="text-yellow-500">CLAMIO</span> Creator Now!</h2>
          <Link href='/auth/signup'>
          <button className="bg-gray-300 font-semibold text-black py-2 px-4 md:py-3 md:px-6 rounded text-lg">START SELLING</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
