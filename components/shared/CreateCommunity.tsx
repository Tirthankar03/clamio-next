"use client";

import { useState } from 'react';
import { FancyMultiSelect } from './FancyMultiSelect';
import { FancySelect } from '../Reusable Components/FancySelect';
import { fansOptions } from '@/constants/data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';


const categoryOptions = [
  { value: 'technology', label: 'Technology' },
  { value: 'art', label: 'Art' },
  { value: 'music', label: 'Music' },
  // Add more categories as needed
];

const CreateCommunity = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [goal, setGoal] = useState('');
  const [fans, setFans] = useState<string[]>([]); 

  console.log(category);
  console.log(fans);

  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, description, category, goal, fans });
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg border ">
      <h1 className="text-4xl font-bold text-center text-gray-800 leading-10 mb-8">Create Your Community</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label className="block text-lg font-medium text-gray-700">Community Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the community name"
          />
        </div>
        <div className="space-y-4">
          <Label className="block text-lg font-medium text-gray-700">Description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the community"
            rows={4}
          />
        </div>
        <div className="space-y-4">
          <Label className="block text-lg font-medium text-gray-700">Category</Label>
          <FancyMultiSelect
            options={categoryOptions}
            onChange={setCategory}
            placeholder="Select categories..."
          />
        </div>
        <div className="space-y-4">
          <Label className="block text-lg font-medium text-gray-700">Community Goal</Label>
          <RadioGroup value={goal} onValueChange={setGoal} className="space-y-2">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="promote" id="promote" />
              <Label htmlFor="promote" className="text-gray-700">Promote products and services</Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="connect" id="connect" />
              <Label htmlFor="connect" className="text-gray-700">Connect with followers and friends</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-4">
          <Label className="block text-lg font-medium text-gray-700">Select Fans</Label>
          <FancySelect
            options={fansOptions}
            onChange={setFans}
            placeholder="Search and select fans..."
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-white py-3 rounded-lg font-semibold shadow-md transition-colors"
        >
          Create Community
        </Button>
      </form>
    </div>
  );
};

export default CreateCommunity;
