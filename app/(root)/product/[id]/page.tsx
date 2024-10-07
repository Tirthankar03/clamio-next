import React from 'react';
import ProductHighlights from '@/components/shared/Product-Details/ProductHighlights';
import Reviews from '@/components/shared/Product-Details/Reviews';
import SimilarProducts from '@/components/shared/Product-Details/SimilarProducts';
import ProductInfo from '@/components/shared/Product-Details/ProductInfo';
import Frequent from '@/components/shared/Product-Details/Frequent';
import { getProductById } from '@/lib/getRoutes/product';

const ProductDetail = async ({ params }: { params: { id: string } })=> {

  const product =await getProductById(params.id)

  console.log("product in /id", product)

  return (
    <div className="container mx-auto p-6">
      <ProductInfo  product={product} />
      <ProductHighlights />
      <Reviews />
      {/* <Frequent /> */}
      <SimilarProducts />
    </div>
  );
};

export default ProductDetail;
