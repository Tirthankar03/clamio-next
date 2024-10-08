'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { RootState } from '@/Store/store';
import ProductList from '@/components/shared/products/ProductList';
import { TopSellingproductData, HotNewproductData, TopDiscountProduct } from '@/constants/data';
import { getHotAndNewProduct, getTopSellingProduct } from '@/lib/getRoutes/product';
import { TProductList } from '@/types/product';



const FilteredProductList = ({filteredTopSellingProducts,filteredHotNewProducts }:  {
    filteredTopSellingProducts: TProductList;
    filteredHotNewProducts: TProductList;
  }) => {
    const searchQuery = useSelector((state: RootState) => state.product.searchQuery);
  
    const pathname = usePathname(); // Get the pathname
    const filterProducts = (products: any) => {
        if (pathname !== '/query') return products; 
        if (!searchQuery) return products;
        return products.filter((product: any) =>
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };
    
    // const filteredTopSellingProducts = getTopSellingProduct();
    // const filteredHotNewProducts = getHotAndNewProduct();
    const filteredTopDiscountProduct = filterProducts(TopDiscountProduct);

    return (
        <div className="grid gap-4 px-4 w-11/12 md:w-5/6 mx-auto pb-10">
            {filteredTopSellingProducts.length > 0 && (
                <ProductList products={filteredTopSellingProducts} title="Top Selling Products" />
            )}
            {filteredHotNewProducts.length > 0 && (
                <ProductList products={filteredHotNewProducts} title="Hot and New Products" />
            )}
            {filteredTopSellingProducts.length === 0 && filteredHotNewProducts.length === 0 && filteredTopDiscountProduct.length === 0 && (
                <div>No products found</div>
            )}
        </div>
    );
};

export default FilteredProductList;
