"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { Upload } from 'lucide-react'; // Assuming lucide-react is installed for icons
import FileUploader from '@/components/shared/CreateProductPage/FileUploader';
import Input from '@/components/shared/CreateProductPage/Input';
import TextArea from '@/components/shared/CreateProductPage/TextArea';
import ProductsPage from '@/components/shared/explore/ProductsPage';
import { FancyMultiSelect } from '@/components/shared/FancyMultiSelect';
import { CATEGORY } from '@/constants/data';

const CreateService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Add logic for form submission
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="container w-full p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-700 text-center">Create Something New</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-2 md:p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <FileUploader name="productImage1" register={register} />
            <FileUploader name="productImage2" register={register} />
            <FileUploader name="productImage3" register={register} />
            <FileUploader name="productVideo" register={register} />
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 p-2">
            <Input label="Input Product Name" name="productName" register={register} />
            <TextArea label="Input Product Description" name="productDescription" register={register} />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Input Product Category</h2>
          <FancyMultiSelect options={CATEGORY} initialSelected={CATEGORY.slice(1, 2)} placeholder="Select Category..." />

          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Product Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {[...Array(8)].map((_, index) => (
              <Input key={index} label={`Feature ${index + 1}`} name={`feature${index + 1}`} register={register} />
            ))}
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Set Price</h2>
          <Input label="Price" name="price" register={register} />
          <div className="flex justify-between my-5">
            <button type="button" className="px-6 py-3 bg-yellow-300 rounded-lg shadow-sm text-gray-700 hover:bg-yellow-400 transition-colors duration-200">Cancel</button>
            <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 transition-colors duration-200">Launch Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
