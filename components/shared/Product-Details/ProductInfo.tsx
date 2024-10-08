'use client'
import React, { useTransition } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { HotNewproductData, TopDiscountProduct, TopSellingproductData } from '@/constants/data';
import { TProduct } from '@/types/product';
import { addToCart } from '@/action/cart';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
const allProducts: any = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];

const ProductDetail = ({product}: {product: TProduct}) => {
    const [isPending, startTransition] = useTransition();

    if (!product) {
        return <div>Product not found</div>;
    }

    // Handler for adding the product to the cart
    const handleAddToCart = () => {
        startTransition(async () => {
            const result = await addToCart(product._id);
       
            if(result.success){
             toast.success(result.message)
            }else{
             toast.error(result.message)
            }
        })
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                {Array.isArray(product.images_url) &&        <Image
          src={product.images_url[0]}
          alt="product card"
          width={1000}
          height={1000}
          className="cursor-pointer object-cover h-64 w-full p-4 pb-0"
        /> }
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                        <div className="flex items-center mb-4">
                            <FaUserCircle className="text-yellow-500 text-2xl" />
                            <Link href={`/creator/${product.creator_id}`}>
                            <span className="ml-2 text-blue-500 text-xl">{product.creator_name}</span>
                            </Link>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-500 text-xl" />
                            <span className="ml-2 text-xl">4.5</span>
                        </div>
                        <p className="text-lg mb-4 w-5/6 text-justify">{product.description}</p>
                        {product.price && (
                            <span className="text-2xl font-bold mb-4">{product.price}</span>
                        )}
                    </div>
                    <div className="flex my-5 md:my-0 lg:my-0 2xl:my-0 space-x-4">
                    <Button
                            disabled={isPending}
                            onClick={handleAddToCart}
                            className="bg-black text-white px-4 py-2 rounded"
                        >
                            {isPending ? <LoaderCircle className="animate-spin h-5 w-5" /> : 'Add To Cart'}
                        </Button>
                        <Link href='/cart'>
                            <button className="bg-yellow-500 text-black px-4 py-2 rounded">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ProductDetail;
