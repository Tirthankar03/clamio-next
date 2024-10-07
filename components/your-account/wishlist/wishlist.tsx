// src/pages/wishlist.tsx
'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { removeFromWishlist } from '@/utils/wishlistSlice';
import ProductCard from '@/components/shared/cards/ProductCard';



const WishlistPage = () => {
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (productId: number) => {
        dispatch(removeFromWishlist(productId));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {wishlistItems.map((product) => (
                        <div key={product.id}>
                            {/* <ProductCard key={product.id} {...product} /> */}
                            <div>ProductCard</div>
                            
                            {/* <button */}
                                {/* onClick={() => handleRemoveFromWishlist(product.id)} */}
                                {/* // className="absolute top-2 right-2 text-gray-600 hover:text-red-500" */}
                            {/* > */}
                                {/* Example of a remove symbol */}
                                {/* &#10006; */}
                            {/* </button> */}
                        </div>

                    ))}
                </div>
            ) : (
                <p>No wishlist items</p>
            )}
        </div>
    );
};

export default WishlistPage;
