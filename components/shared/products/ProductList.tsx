// src/components/shared/products/ProductList.tsx
import React from 'react';
import ProductCard from '@/components/shared/cards/ProductCard';
import ViewButton from '@/components/shared/buttons/ViewButton';
import { TProductList } from '@/types/product';

interface ProductListProps {
    products: TProductList
    title: string;
}

const ProductList: React.FC<ProductListProps> = (  { products, title }) => {
    return (
        <div className='pt-0'>
            <div className="grid grid-cols-2 py-10">
                <div className="text-left text-xl md:text-2xl">{title}</div>
                <div className="text-right">
                    <ViewButton />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 gap-4 w-full mx-auto">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;