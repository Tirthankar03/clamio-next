// src/components/shared/products/ProductList.tsx
import React from 'react';
import ProductCard from '@/components/shared/cards/ProductCard';  // ProductCard import
import ViewButton from '@/components/shared/buttons/ViewButton';
import { listings } from '@/constants/data';

interface ProductListProps {
  products: {
    id: number;
    productName: string;
    name: string;
    stars: string;
    price: string;
    imageUrl: string;
  }[];
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <div className='pt-0'>
      <div className="grid grid-cols-2 py-10">
        <div className="text-left text-xl md:text-2xl">{title}</div>
        <div className="text-right">
          <ViewButton />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 gap-4 w-full mx-auto">
        {listings.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}  // Ensure id is passed
            productName={product.name}  // Update field names
            name={product.name}
            stars={product.stars}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
