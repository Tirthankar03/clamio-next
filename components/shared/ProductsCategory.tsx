import { products } from '@/constants/data';
import React from 'react';


const ProductsCategory = () => {
  return (
    <section className="p-4 sm:p-8">
      <h3 className="text-3xl font-bold mb-4 text-center">Top Digital ProductsCategory</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-11/12 mx-auto my-14 cursor-pointer">
        {products.map((product, index) => (
          <div
            key={index}
            className="border py-10 px-8 md:px-10 rounded-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img src={product.image} alt={product.name} className="w-20 h-20 mr-6" />
            <div>
              <h4 className="font-bold mb-2 text-xl">{product.name}</h4>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsCategory;
