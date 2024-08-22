'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { HotNewproductData, TopDiscountProduct, TopSellingproductData } from '@/constants/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/utils/cartSlice';
import Link from 'next/link';

const allProducts: any = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];

const ProductInfo = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const dispatch = useDispatch();

    // Find the product based on the ID from the URL
    const product = allProducts.find((p:any) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    // Handler for adding the product to the cart
    const handleAddToCart = () => {
        const { id, productName, name, stars, price, imageUrl } = product;
        dispatch(addToCart({ id, productName, name, stars, price, imageUrl, quantity: 1 }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                    src={product.imageUrl}
                    alt="product card"
                    layout="fill"
                    objectFit="cover"
                    className="cursor-pointer"
                />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
                    <div className="flex items-center mb-4">
                        <FaUserCircle className="text-yellow-500 text-2xl" />
                        <span className="ml-2 text-blue-500 text-xl">{product.name}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaStar className="text-yellow-500 text-xl" />
                        <span className="ml-2 text-xl">{product.stars}</span>
                    </div>
                    <p className="text-lg mb-4 w-5/6 text-justify">{product.description}</p>
                    {product.price && (
                        <span className="text-2xl font-bold mb-4">{product.price}</span>
                    )}
                </div>
                <div className="flex my-5 md:my-0 lg:my-0 2xl:my-0 space-x-4">
                    <button onClick={handleAddToCart} className="bg-black text-white px-4 py-2 rounded">Add To Cart</button>
                    <Link href='/cart'>
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
