// components/shared/creator-login/Hero.tsx
import React from 'react';
import './Hero.css';
import Link from 'next/link';
import Image from 'next/image';
import Add from '@/public/assets/creator-login-img/Add.png';
import Vec from '@/public/assets/creator-login-img/imgone.png';


const Hero = ({ onButtonClick, showCreateButtons }: any) => {
    return (
        <div className="text-white p-2 md:p-6 text-left hero-section">
            <div className="bg-secondary py-12 md:py-20 flex flex-col justify-center items-center md:justify-start md:items-start px-6">
                <div className="block md:hidden items-center mb-4">
                    <Image src={Vec} alt="vec.png" width={300} />
                </div>
                <div className="transition transition-container text-center md:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold animate-slideInLeft transition-item delay-1">WELCOME</h1>
                    <h2 className="text-2xl md:text-5xl font-bold text-white animate-slideInLeft delay-2 transition-item">
                        <span className="text-primary">CREATOR</span> ONBOARD
                    </h2>
                </div>
                <div className="mt-4 space-x-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center md:justify-start">
                    {showCreateButtons ? (
                        <div className="flex items-center space-x-2">
                            <Link href="/dashboard/create-product">
                                <button type="button" className="border-lg text-secondary px-4 py-2 rounded transition-colors duration-300 pl-0">
                                    <Image src={Add} alt="add.png" width={40} />
                                </button>
                            </Link>
                            <Link href="/dashboard/create-product">
                                <button className="font-bold bg-primary text-secondary px-4 py-2 rounded transition-colors duration-300">
                                    Create Your Product
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <button onClick={onButtonClick} className="font-bold bg-primary text-secondary px-4 py-2 rounded transition-colors duration-300">Create Your Product</button>
                            {/* <button className="font-bold bg-primary text-secondary px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300">BUTTON</button> */}
                        </>
                    )}
                
                </div>
            </div>
        </div>
    );
};

export default Hero;
