'use client';
import { listings } from "@/constants/data";
import Link from 'next/link';
import Image from 'next/image';
import { Edit3 } from 'lucide-react';

const ProductListingPage = () => {
    return (
        <main className="py-10">
            <div className="w-full lg:w-5/6 mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center">Product and Service Listing</h1>
                <div className="grid grid-cols-1 mx-5 md:mx-0 sm:mx-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {listings.map((product:any, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden relative flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <button type="button" className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300">
                                <Edit3 className="w-6 h-6 text-gray-700" />
                            </button>
                            <Link href={`/product/${product.id}`} passHref>
                                <div className="cursor-pointer">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        width={1000}
                                        height={1000}
                                        className="object-cover h-48 sm:h-56 md:h-64 w-full"
                                    />
                                </div>
                            </Link>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                    <div className="flex items-center text-yellow-500 mb-2">
                                        <span className="mr-1">{product.stars}</span>
                                        <span className="text-gray-500">({product.noReviews} reviews)</span>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-4 truncate">{product.description}</p>
                                </div>
                                <div className="text-lg font-bold text-gray-900">${product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProductListingPage;
