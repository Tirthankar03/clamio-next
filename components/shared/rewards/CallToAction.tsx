// src/components/CallToAction.js
import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="text-center my-8">
                <Link href='/auth/signup'>

      <button className="px-20 py-3 bg-primary font-bold text-black rounded">START SELLING</button>
      </Link>

    </div>
  );
};

export default CallToAction;
