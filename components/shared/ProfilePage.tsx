

import React from "react";
import Link from "next/link";
import Card from "@/components/Reusable Components/Card";
import ToggleText from "@/components/Reusable Components/ToggleText";
import { cardData } from "@/constants/data";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { getCreatorById } from "@/lib/helper/creator";
import { revalidatePath } from "next/cache";

const  ProfilePage = async ({ id }: { id: string }) => {

  const data = await getCreatorById(id)

  console.log('data>>>>>>>>>>>>>>>>>', data)

  revalidatePath(`/`)

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Profile Section */}
        <div className="col-span-1 mt-4 md:text-center">
          <div className="bg-yellow-300 md:w-32 md:h-32 h-40 w-40 rounded-full mx-auto"></div>
          <h1 className="text-center mt-4 text-2xl font-bold">{data.title}</h1>

          <ToggleText description={data.description}/>

          <div className="flex flex-col md:flex-row md:justify-center mt-4">
            <span className="mr-4 text-center">Total Products: {data.rating}</span>
            <span className="text-center">Followers: {data.follower}</span>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-black text-white px-4 py-2 rounded">
              Follow
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="bg-red-500 p-2 rounded-full">
              <YoutubeIcon size={20} color="white" />
            </span>
            <span className="bg-pink-500 p-2 rounded-full">
              <InstagramIcon size={20} color="white" />
            </span>
            <span className="bg-blue-500 p-2 rounded-full">
              <LinkedinIcon size={20} color="white" />
            </span>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-span-1 md:col-span-3 p-4">
          <h2 className="text-2xl font-bold md:text-left text-center mt-4 md:mt-0">
            Top Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {cardData.slice(0, 3).map((product, idx) => (
              <Card id={id} key={idx} card={product} idx={idx} />
            ))}
          </div>

          <h2 className="text-2xl font-bold md:text-left text-center mt-8">
            All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {cardData.map((product, idx) => (
              <Card id={id} key={idx} card={product} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;