interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    author: string;
    ratings: number;
    numReviews: number;
}

interface Creator {
    id: number;
    name: string;
    products: string;
    followers: string;
    description: string;
    img_url: string;
    profile_url: string;
}

export interface CommunityCardData {
    id: number;
    title: string;
    members: string;
    img_url: string;
    products: {
        topSellingProducts: Product[];
    };
    creators: {
        TopCreatorData: Creator[];
    };
    author: string;
    ratings: number;
    numReviews: number;
}

export interface CommunityCardsData {
    [key: number]: CommunityCardData;
}