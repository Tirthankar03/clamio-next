import React from 'react';

const CustomInput = ({ label, register, name }:any) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2">{label}</label>
    <input
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
      {...register(name)}
    />
  </div>
);

export default CustomInput;
