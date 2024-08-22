// 'use client'
import * as React from "react";
import { CreatorData } from "@/constants/data";
import TopCreator from "./TopCreators";

export interface Creator {
    id: number;
    name: string;
    products: string;
    followers: string;
    description: string;
    img_url: string;
    profile_url: string;
}

interface CreatorCardProps {
    TopCreatorData: Creator[];
}

export default function TopCreatorsList({ TopCreatorData }: CreatorCardProps) {
    return (
        <div className="">
            <h1 className="text-2xl font-bold mt-8">Top Creators</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {TopCreatorData.map((item, index) => (
                    <div key={index} className="basis-full flex sm:basis-1/2 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-2">
                        <TopCreator

                            idx={index}
                            id={item.id}
                            name={item.name}
                            followers={item.followers}
                            products={item.products}
                            description={item.description}
                            img_url={item.img_url}
                            profile_url={item.profile_url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
