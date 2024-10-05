// 'use client'
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CreatorCard from "@/components/shared/creator/CreatorCard";
import { getAllCreators } from "@/lib/getRoutes/creator";
// import { CreatorData } from "@/constants/data"; // Make sure this import path is correct

export default async function CarouselSize({ type }: any) {


  const CreatorData = await getAllCreators()

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="lg:w-full w-auto max-w-[1433px] 2xl:mx-auto"
      >
        <CarouselContent>
          {CreatorData.map((item:any, index:any) => (
            <CarouselItem
              key={index}
              className="basis-full flex sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-2"
            >
              <CreatorCard
                idx={index}
                creator={{
                  _id: item._id, // Assuming `id` in `CreatorData` corresponds to `_id` in `Creator` type
                  title: item.title, // Assuming `name` in `CreatorData` corresponds to `title` in `Creator` type
                  numFollowers: item.follower,
                  totalSales: item.total_sales,
                  description: item.description,
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-yellow-500 border-2 font-extrabold text-white" />
        <CarouselNext className="bg-yellow-500 border-2 font-extrabold text-white" />
      </Carousel>
    </div>
  );
}
