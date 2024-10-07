'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductList from './ProductListSearch';
import { TopSellingproductData, HotNewproductData, TopDiscountProduct } from '@/constants/data';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('query') || '';
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    useEffect(() => {
        if (searchQuery) {
            const allProducts = [...TopSellingproductData, ...HotNewproductData, ...TopDiscountProduct];
            const filtered = allProducts.filter(product =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery]);

    return (
        <div className="grid gap-4 w-full md:w-5/6 lg:11/12 mx-auto pb-10">
            {/* {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} title={`Search Results for "${searchQuery}"`} />
            ) : ( */}
                <div>No products found</div>
            {/* )} */}
        </div>
    );
};

export default SearchPage;