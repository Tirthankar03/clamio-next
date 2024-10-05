"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FileUploader from '@/components/shared/CreateProductPage/FileUploader';
import Input from '@/components/shared/CreateProductPage/Input';
import TextArea from '@/components/shared/CreateProductPage/TextArea';
import { FancyMultiSelect } from '@/components/shared/FancyMultiSelect';
import { CATEGORY } from '@/constants/data';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileForm } from './uploader/FileForm';
import FileSelector from './uploader/FileSelector';
import { FancySingleSelect } from './FancySingleSelect';

const CreateItem = () => {
  const { register, handleSubmit } = useForm();
  const [activeTab, setActiveTab] = useState("product");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    console.log('Selected Files:', selectedFiles);
  
    const formData = new FormData();
  
    // Append form fields to FormData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  
    // Append selected files to FormData
    selectedFiles.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
  
    // Log FormData content
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  };

  const handleTabChange = (tabValue: any) => {
    setActiveTab(tabValue);
  };




  const handleFileSelection = (files: File[]) => {
    setSelectedFiles(files); // Update the state with selected files
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="container mx-auto max-w-7xl p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Create Something New</h1>
        
        <Tabs defaultValue="product" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 mb-8 border-b-2 border-gray-200 pb-2">
            <TabsTrigger
              value="product"
              className={`px-4 py-2 text-md font-medium ${activeTab === "product" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-700 hover:text-yellow-500 border-transparent hover:border-yellow-500"} transition-colors`}
            >
              Create Product
            </TabsTrigger>
            <TabsTrigger
              value="service"
              className={`px-4 py-2 text-md font-medium ${activeTab === "service" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-700 hover:text-yellow-500 border-transparent hover:border-yellow-500"} transition-colors`}
            >
              Create Service
            </TabsTrigger>
          </TabsList>

          <TabsContent value="product">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product Details</h2>
              <div className="gap-6 mb-6">
                {/* <FileUploader name="productImage1" register={register} />
                <FileUploader name="productImage2" register={register} />
                <FileUploader name="productImage3" register={register} />
                <FileUploader name="productVideo" register={register} /> */}
 <FileSelector maxFileCount={4} maxSize={4 * 1024 * 1024} onFilesSelected={handleFileSelection} />

              </div>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <Input label="Product Name" name="productName" register={register} />
                <TextArea label="Product Description" name="productDescription" register={register} />
              </div>
              <div className='mb-6'>
              <FancySingleSelect options={CATEGORY} placeholder="Select Category..." />
              </div>
              <h1 className='text-xl font-semibold py-5 '>Product Highlights</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {[...Array(4)].map((_, index) => (
                  <Input key={index} label={`Feature ${index + 1}`} name={`feature${index + 1}`} register={register} />
                ))}
              </div>
              <Input label="Price" name="price" register={register} className="mb-6" />
              <div className="flex justify-between">
                <Button variant="outline" className="text-gray-600 hover:text-gray-900 border-gray-300">Cancel</Button>
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">Launch Product</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="service">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Service Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <FileUploader name="serviceImage1" register={register} />
                <FileUploader name="serviceImage2" register={register} />
                <FileUploader name="serviceImage3" register={register} />
                <FileUploader name="serviceVideo" register={register} />
              </div>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <Input label="Service Name" name="serviceName" register={register} />
                <TextArea label="Service Description" name="serviceDescription" register={register} />
              </div>
              <div className="mb-6">
              <FancySingleSelect options={CATEGORY} placeholder="Select Category..."  />
              </div>
              <h1 className='text-xl font-semibold py-5'>Product Highlights</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                
                {[...Array(4)].map((_, index) => (
                  <Input key={index} label={`Feature ${index + 1}`} name={`feature${index + 1}`} register={register} />
                ))}
              </div>
              <Input label="Price" name="price" register={register} className="mb-6" />
              <div className="flex justify-between">
                <Button variant="outline" className="text-gray-600 hover:text-gray-900 border-gray-300">Cancel</Button>
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">Launch Service</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateItem;
