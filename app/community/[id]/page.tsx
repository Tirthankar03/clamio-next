'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import CommunityInfo from '@/components/shared/community-id/CommunityInfo';
import CommunityHighlights from '@/components/shared/community-id/CommunityHighlights';
import CommunityReviews from '@/components/shared/community-id/CommunityReviews';
import SimilarCommunities from '@/components/shared/community-id/SimilarCommunities';
import { communityCardsData } from '@/constants/data';
import ProfileSection from '@/components/shared/community-id/ProfileSection';
import ProductsSection from '@/components/shared/community-id/ProductsSection';
import TopCreatorsList from '@/components/shared/community-id/TopCreatorsList';

import { CommunityCardData, CommunityCardsData } from '@/lib/dummy'; 

const CommunityDetail: React.FC = () => {
    const { id } = useParams();
    const communityId = parseInt(id as string, 10);

// Assert the type of communityCardsData
const communityCards: CommunityCardsData = communityCardsData;
const community: CommunityCardData | undefined = communityCards[communityId];

    if (!community) {
        return <div>Community not found</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 mt-4 md:text-center">
                    <ProfileSection community={community} />
                </div>
                <div className="col-span-1 md:col-span-3 p-4">
                    <ProductsSection
                        topSellingProducts={community.products.topSellingProducts}
                    />
                    <TopCreatorsList
                        TopCreatorData={community.creators.TopCreatorData}
                    />
                    <CommunityHighlights />
                    <CommunityReviews />
                    <SimilarCommunities />
                </div>
            </div>
        </div>
    );
};

export default CommunityDetail;
