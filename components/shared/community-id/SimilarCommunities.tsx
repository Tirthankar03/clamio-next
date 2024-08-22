import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { communityCardsData } from '@/constants/data';

interface CommunityCardData {
    id: number;
    title: string;
    members: string;
    img_url: string; // Include the img_url field
}

const SimilarCommunities: React.FC = () => {
    // Convert the object into an array
    const communitiesArray: CommunityCardData[] = Object.values(communityCardsData) as CommunityCardData[];

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Explore Similar Communities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {communitiesArray.slice(0, 4).map((community: CommunityCardData, idx: number) => (
                    <Link key={idx} href={`/community/${community.id}`}>
                        <div className="bg-white p-4 shadow-lg rounded-lg text-center cursor-pointer">
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={community.img_url}
                                    alt={community.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <h3 className="font-semibold text-lg">{community.title}</h3>
                            <p className="text-gray-500 mb-2">{community.members}</p>
                            <Link href={`/community/${community.id}`}>
                                <button className="mt-4 bg-secondary text-white py-2 px-4 rounded">Join Community</button>
                            </Link>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default SimilarCommunities;
