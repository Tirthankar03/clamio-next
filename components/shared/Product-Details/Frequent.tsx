import React from 'react';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/utils/cartSlice';
import { HotNewproductData, TopDiscountProduct, TopSellingproductData } from '@/constants/data';
import ProductCard from '@/components/shared/cards/ProductCard';

const allProducts: any = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];

const Frequent = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const mainProduct = allProducts.find((p:any) => p.id === parseInt(id));

    const frequentlyBoughtProduct = allProducts.find((p:any) => p.id !== parseInt(id));

    const handleAddBothToCart = () => {
        if (mainProduct && frequentlyBoughtProduct) {
            dispatch(addToCart({ ...mainProduct, quantity: 1 }));
            dispatch(addToCart({ ...frequentlyBoughtProduct, quantity: 1 }));
        }
    };

    if (!mainProduct || !frequentlyBoughtProduct) {
        return <div>Product not found</div>;
    }

    const totalPrice = (
        parseInt(mainProduct.price.replace(/[^0-9]/g, '')) +
        parseInt(frequentlyBoughtProduct.price.replace(/[^0-9]/g, ''))
    ).toLocaleString();

    return (
        <div className="py-8 px-4 md:px-8 lg:px-16">
            <h1 className="text-2xl font-semibold mb-6">Frequently bought together</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                <div className="col-span-1">
                    <ProductCard {...mainProduct} />
                </div>
                <div className="col-span-1">
                    <ProductCard {...frequentlyBoughtProduct} />
                </div>
                <div className="col-span-1 lg:block hidden">
                    <ProductCard {...frequentlyBoughtProduct} />
                </div>
                <div className="col-span-1 flex flex-col justify-between h-full">
                    <div className="flex-grow"></div>
                    <div className="text-xl font-semibold mb-2">
                        Total price: ₹{totalPrice}
                    </div>
                    <button
                        onClick={handleAddBothToCart}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition w-fit"
                    >
                        Add both to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Frequent;
