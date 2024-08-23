'use client'
import React from 'react';
import ProductHighlights from '@/components/shared/Product-Details/ProductHighlights';
import Reviews from '@/components/shared/Product-Details/Reviews';
import SimilarProducts from '@/components/shared/Product-Details/SimilarProducts';
import ProductInfo from '@/components/shared/Product-Details/ProductInfo';
import Frequent from '@/components/shared/Product-Details/Frequent';

const ProductDetail = () => {
  return (
    <div className="container mx-auto p-6">
      <ProductInfo />
      <ProductHighlights />
      <Reviews />
      {/* <Frequent /> */}
      <SimilarProducts />
    </div>
  );
};

export default ProductDetail;
