import React from 'react';
import { pricingData } from '@/constants/data';
import Link from 'next/link';

const Pricing = () => {
  return (
    <section className="p-4 my-10 sm:p-8 text-center">
      <h3 className="text-3xl font-bold mb-4">Take home 100% of your Revenue</h3>
      <p className="mb-8">We charge 12.5% on each successful transaction</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
        {pricingData.map((item, index) => (
          <div key={index} className="border rounded-md shadow-md border-gray-300 p-4 w-full max-w-xs">
            <h4 className="font-bold">{item.title}</h4>
            <hr className="my-4" />
            <p>{item.description}</p>
            <hr className="my-4" />
            <p className="mt-2">Example:</p>
            <p>Product price: {item.example.productPrice}</p>
            <p>Customer pay: {item.example.customerPay}</p>
            <hr className="my-4" />
            <p>You earn: {item.example.earning}</p>
          </div>
        ))}
      </div>
      <Link href='/auth/signup'>
      <button className="mt-10 bg-primary font-semibold text-black py-3 px-6 rounded md:text-lg w-56 md:w-2/3 lg:w-96 mx-auto">START SELLING</button>
      </Link>

    </section>
  );
}

export default Pricing;
