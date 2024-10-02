// components/ImageCarousel.tsx

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust the path as necessary

import { categoryData } from "@/constants/data";

function CategoryCarousel() {
  return (
    <div className="relative mb-12">
      <Carousel orientation="horizontal">
   
        <CarouselContent>
        {categoryData.map((item, id) => (
            <CarouselItem key={id} className="basis-1/3 my-5  flex sm:basis-1/4 md:basis-1/4 lg:basis-1/5 2xl:basis-1/4 ">
              <button className='font-semibold w-32 h-10  text-[10px] mt-5 ml-4 mr-1.5  md:w-44 md:px-5 md:text-xs md:py-3 rounded-lg bg-zinc-200 text-black my-3  '>{item.name}</button>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
