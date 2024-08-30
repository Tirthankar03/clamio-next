export const CreatorData = [
  { id: 1, name: 'David Jackoff', followers: '12k followers', products: '1k Products', description: 'Lorem ipsum dnsectetur adipiscing elit, sed dssssssssssssssssssssssssssssssssossssssssssssssss.' },
  { id: 2, name: 'Alex Doe', followers: '15k followers', products: '2k Products', description: 'Lorem ipsum dnsectetur adisssssssssssssssssssssssssssssssssssssspisco..' },
  { id: 3, name: 'Jane Smith', followers: '20k followers', products: '3k Products', description: 'Lorem ipsum dnsectetur adipissssssssssssssssscing elit, sed do.' },
  { id: 4, name: 'John Doe', followers: '10k followers', products: '1k Products', description: 'Lorem ipsum dnsectetur adipiscssssssssssssssssssssssssssssssssssing elit, sed do..' },
  { id: 5, name: 'Emma Johnson', followers: '18k followers', products: '2k Products', description: 'Lorem ipsipiscing elit, sed do.' },
  { id: 6, name: 'Michael Brown', followers: '25k followers', products: '4k Products', description: 'Lorem ipsum dnsectetur adipiscing elit, sed do.' },
  { id: 7, name: 'Chris Green', followers: '14k followers', products: '1.5k Products', description: 'Lorem ipsum dnsectetur adipiscing elit, sed do.' },
  { id: 8, name: 'Patricia White', followers: '19k followers', products: '3.5k Products', description: 'Lorem ipsum dnsectetur adipiscing elit, sed do..' },
  { id: 9, name: 'Linda Black', followers: '22k followers', products: '2k Products', description: 'Lorem ipsum dnsectetur adipiscing elit, sed do.' },
  { id: 10, name: 'Kevin Blue', followers: '17k followers', products: '1.8k Products', description: 'Lorem ipsum dnsectetur adipiscing elit, sed do.' },
];
// Payout Page 
//Payout Chart Data
export const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Current Week',
      data: [500, 1000, 3256, 4000, 3000, 5000, 8000],
      borderColor: 'black',
      backgroundColor: 'black',
      fill: false,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
    {
      label: 'Previous Week',
      data: [1000, 3000, 5000, 2000, 1500, 6000, 7000],
      borderColor: 'rgba(75, 192, 192, 0.4)',
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
  ],
};

//payout chartoptions
import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  interaction: {
    mode: 'nearest',
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value',
      },
      suggestedMin: 0,
      suggestedMax: 10000,
    },
  },
};


// Payouts data
// export const payoutData = [
//   {
//     title: "Last 7 Days",
//     payout: "Rs.25"
//   },
//   {
//     title: "Last 30 Days",
//     payout: "Rs.700"
//   },
//   {
//     title: "Total Earnings",
//     payout: "Rs.5337"
//   }
// ]


// communityData.js
// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
// }
// export interface Creator {
//   id: number
//   name: string
//   followers: string
//   products: string
//   description: string
//   img_url: string
//   profile_url: string
// }
// export interface CommunityCardData {
//   id: number;
//   title: string;
//   members: string;
//   products: {
//     topSellingProducts: Product[];
//   };
//   creators: {
//     TopCreatorData: Creator[];
//   }
// }

// data.ts

export const communityCardsData: CommunityCardsData = {
  1: {
    id: 1,
    title: "Gaming Legends",
    members: "1k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 101, title: "Gaming Headset", description: "High quality gaming headset", price: 99, image: "/images/headset.jpg", author: "TechBrand", ratings: 4.5, numReviews: 120 },
        { id: 102, title: "Gaming Chair", description: "Comfortable gaming chair", price: 199, image: "/images/chair.jpg", author: "ComfortSeats", ratings: 4.8, numReviews: 80 },
        { id: 103, title: "Gaming Keyboard", description: "RGB mechanical keyboard", price: 79, image: "/images/keyboard.jpg", author: "TypeMaster", ratings: 4.7, numReviews: 150 },
      ]
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'GamerOne', followers: '12k followers', products: '1k Products', description: 'Pro gamer with years of experience. ', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: "/assets/creator-id-img/profile.png" },
        { id: 2, name: 'EliteGamer', followers: '15k followers', products: '2k Products', description: 'Top-tier gamer and content creator.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
        { id: 3, name: 'GameMaster', followers: '20k followers', products: '3k Products', description: 'Master of various game genres.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
      ]
    },
    author: "Community Leader",
    ratings: 4.7,
    numReviews: 50,
  },
  2: {
    id: 2,
    title: "Travel Enthusiasts",
    members: "2k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 201, title: "Travel Backpack", description: "Spacious travel backpack", price: 79, image: "/images/backpack.jpg", author: "TravelPro", ratings: 4.8, numReviews: 200 },
        { id: 202, title: "Travel Pillow", description: "Comfortable travel pillow", price: 19, image: "/images/pillow.jpg", author: "ComfortCo", ratings: 4.3, numReviews: 150 },
        { id: 203, title: "Travel Jacket", description: "Waterproof travel jacket", price: 129, image: "/images/jacket.jpg", author: "WeatherGuard", ratings: 4.7, numReviews: 90 },
      ],
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'TravelGuru', followers: '12k followers', products: '1k Products', description: 'Expert in travel gear and destinations.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: "/assets/creator-id-img/profile.png" },
        { id: 2, name: 'Wanderlust', followers: '15k followers', products: '2k Products', description: 'Avid traveler and travel blogger.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: "/assets/creator-id-img/profile.png" },
        { id: 3, name: 'GlobeTrotter', followers: '20k followers', products: '3k Products', description: 'Exploring the world one place at a time.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: "/assets/creator-id-img/profile.png" },
      ]
    },
    author: "Travel Expert",
    ratings: 4.8,
    numReviews: 70,
  },
  3: {
    id: 3,
    title: "Healthy Recipes",
    members: "5k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 301, title: "Vegan Cookbook", description: "Delicious vegan recipes", price: 29, image: "/images/vegan_cookbook.jpg", author: "Chef Green", ratings: 4.8, numReviews: 300 },
        { id: 302, title: "Organic Spices Set", description: "A set of organic spices", price: 49, image: "/images/spices.jpg", author: "SpiceMaster", ratings: 4.7, numReviews: 250 },
        { id: 303, title: "Smoothie Blender", description: "High-performance blender", price: 89, image: "/images/blender.jpg", author: "BlendIt", ratings: 4.6, numReviews: 180 },
      ],
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'ChefHealthy', followers: '12k followers', products: '1k Products', description: 'Specialist in healthy and nutritious recipes.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
        { id: 2, name: 'FitChef', followers: '15k followers', products: '2k Products', description: 'Combining fitness and healthy eating.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
        { id: 3, name: 'VeganQueen', followers: '20k followers', products: '3k Products', description: 'Expert in vegan and plant-based diets.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
      ]
    },
    author: "Recipe Expert",
    ratings: 4.8,
    numReviews: 60,
  },
  4: {
    id: 4,
    title: "Digital Art Club",
    members: "3k Members",
    img_url: "/assets/product-img/imgone.png",
    products: {
      topSellingProducts: [
        { id: 401, title: "Drawing Tablet", description: "Professional drawing tablet", price: 199, image: "/images/tablet.jpg", author: "ArtTech", ratings: 4.9, numReviews: 400 },
        { id: 402, title: "Digital Brushes Pack", description: "High-quality digital brushes", price: 29, image: "/images/brushes.jpg", author: "BrushMaster", ratings: 4.8, numReviews: 350 },
        { id: 403, title: "Art Software License", description: "Full-featured art software", price: 299, image: "/images/software.jpg", author: "SoftArt", ratings: 4.7, numReviews: 320 },
      ]
    },
    creators: {
      TopCreatorData: [
        { id: 1, name: 'ArtVirtuoso', followers: '12k followers', products: '1k Products', description: 'Creating stunning digital art.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
        { id: 2, name: 'PixelPainter', followers: '15k followers', products: '2k Products', description: 'Master of digital painting techniques.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
        { id: 3, name: 'SketchArtist', followers: '20k followers', products: '3k Products', description: 'Expert in digital sketching and illustrations.', img_url: 'https://images.unsplash.com/photo-1583621908511-e082803e3aa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D', profile_url: '/assets/creator-id-img/profile.png' },
      ]
    },
    author: "Art Curator",
    ratings: 4.9,
    numReviews: 40,
  },
  // Add more communities here
};



// categoryData.js

export const categoryData = [
  { id: 1, name: "Tarot Card Reading" },
  { id: 2, name: "Travel Guide" },
  { id: 3, name: "Food Recipes" },
  { id: 4, name: "Diet Plan" },
  { id: 5, name: "Digital Art" },
  { id: 6, name: "E-Sports Guide" },
  { id: 7, name: "MORE" },
];



//Product Data
//Top Selling Product Data
export const TopSellingproductData = [
  {
    id: 1,
    productName: "Mystic Tarot Reading",
    name: "Luna Lovegood",
    stars: "4.8",
    price: "$15",
    imageUrl: "/assets/product-img/imgone.png",
    description: "An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issues . An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issue",
    reviews: [
      { title: "Great reading", content: "Very insightful and accurate. I felt like Luna really understood my situation and provided clarity on issues that I have been struggling with for a while.", stars: 5 },
      { title: "Amazing", content: "Loved every bit of the reading. It was so detailed and personalized. Luna's reading gave me a lot of peace and hope.", stars: 5 },
      { title: "Not bad", content: "It was okay, not too great. Some parts resonated with me but others didn't seem relevant to my life at all.", stars: 3 },
      { title: "Accurate", content: "Pretty accurate and detailed. I was surprised at how much she got right about my current circumstances and future prospects.", stars: 4 },
      { title: "Helpful", content: "Helped me a lot in understanding things. Her advice was practical and I could see how to apply it in my life.", stars: 5 },
      { title: "Insightful", content: "Very deep and meaningful reading. I appreciated the depth and thoughtfulness of her interpretations.", stars: 4 },
      { title: "Fantastic", content: "Absolutely fantastic experience. Luna is a true professional and has a real gift.", stars: 5 },
      { title: "Good", content: "Good reading, satisfied. It was worth the time and money.", stars: 4 },
      { title: "Average", content: "It was an average reading. I didn't find anything particularly enlightening but it was interesting nonetheless.", stars: 3 },
      { title: "Excellent", content: "Excellent reading, highly recommend. Luna is truly gifted and her readings are spot on.", stars: 5 },
    ]
  },
  {
    id: 2,
    productName: "Paris Travel Guide",
    name: "John Doe",
    stars: "4.5",
    price: "$20",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A comprehensive travel guide to Paris, covering must-see attractions, hidden gems, and practical tips for travelers. An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issue",
    reviews: [
      { title: "Very Helpful", content: "The guide was very detailed and helpful. It covered everything from must-see attractions to hidden gems that aren't crowded with tourists.", stars: 5 },
      { title: "Loved it", content: "Loved the tips and tricks. The guide made my trip to Paris so much easier and enjoyable. I felt like I was exploring with a local.", stars: 5 },
      { title: "Not what I expected", content: "Expected more details. Some sections were quite brief and lacked the depth I was hoping for.", stars: 3 },
      { title: "Informative", content: "Very informative guide. It provided a lot of historical context which made visiting the sites more meaningful.", stars: 4 },
      { title: "Great Guide", content: "Great travel guide for Paris. It was well-organized and easy to follow.", stars: 5 },
      { title: "Helpful Tips", content: "The tips were very helpful. I particularly appreciated the restaurant recommendations which were spot on.", stars: 4 },
      { title: "Good Guide", content: "Good guide, worth the money. It helped me plan my itinerary efficiently.", stars: 4 },
      { title: "Okay", content: "It was okay, could have been better. Some sections were repetitive and not very useful.", stars: 3 },
      { title: "Very Informative", content: "Very informative and detailed. It made navigating Paris a breeze.", stars: 5 },
      { title: "Nice Guide", content: "Nice guide with good information. The maps were particularly useful.", stars: 4 },
    ]
  },
  {
    id: 3,
    productName: "Italian Pasta Recipes",
    name: "Gordon Ramsay",
    stars: "4.9",
    price: "$30",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A collection of authentic Italian pasta recipes by Gordon Ramsay, perfect for both novice and experienced cooks.An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issue",
    reviews: [
      { title: "Delicious recipes", content: "Easy to follow and delicious recipes. I've tried several so far and each one has been a hit with my family.", stars: 5 },
      { title: "Love it", content: "Love the recipes. Gordon Ramsay really knows his stuff and his passion for cooking comes through in every recipe.", stars: 5 },
      { title: "Great!", content: "Great recipes, very tasty. The instructions are clear and the results are always impressive.", stars: 5 },
      { title: "Good", content: "Good recipes, easy to make. Even a novice cook like me can create restaurant-quality dishes.", stars: 4 },
      { title: "Fantastic", content: "Fantastic recipes, love it. Each dish is a masterpiece and a joy to make.", stars: 5 },
      { title: "Yummy", content: "Yummy and easy to make. My kids especially love the creamy Alfredo pasta.", stars: 5 },
      { title: "Good Book", content: "Good recipe book. It has become a staple in my kitchen.", stars: 4 },
      { title: "Excellent", content: "Excellent recipes, highly recommend. These dishes are perfect for entertaining guests.", stars: 5 },
      { title: "Nice", content: "Nice recipes, very detailed. The step-by-step instructions make it easy to follow along.", stars: 4 },
      { title: "Tasty", content: "Very tasty recipes. Every dish I've made so far has been delicious.", stars: 5 },
    ]
  },
  {
    id: 4,
    productName: "Keto Diet Plan",
    name: "Jane Smith",
    stars: "4.6",
    price: "$25",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A comprehensive keto diet plan by Jane Smith, designed to help you lose weight and improve your overall health.An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issue",
    reviews: [
      { title: "Great plan", content: "Very effective and easy to follow. I've lost 10 pounds in the first month and I feel fantastic.", stars: 5 },
      { title: "Helpful", content: "Helped me a lot in my diet. The meal plans are varied and delicious, making it easy to stick to the diet.", stars: 4 },
      { title: "Good", content: "Good diet plan, effective. The recipes are tasty and the plan is well-structured.", stars: 4 },
      { title: "Nice", content: "Nice and effective plan. It's helped me understand how to eat healthier.", stars: 4 },
      { title: "Effective", content: "Very effective diet plan. I've seen significant improvements in my energy levels and overall health.", stars: 5 },
      { title: "Loved it", content: "Loved the diet plan. It's not just about weight loss, but also about feeling better and healthier.", stars: 5 },
      { title: "Okay", content: "It was okay, could have been better. Some of the recipes were a bit bland.", stars: 3 },
      { title: "Detailed", content: "Very detailed and effective. It covers everything you need to know about the keto diet.", stars: 4 },
      { title: "Fantastic", content: "Fantastic diet plan. It's easy to follow and has produced great results for me.", stars: 5 },
      { title: "Good", content: "Good plan, worth the money. It makes following a keto diet much simpler.", stars: 4 },
    ]
  },
];

export const HotNewproductData = [
  {
    id: 5,
    productName: "Advanced Tarot Techniques",
    name: "Mystic Meg",
    stars: "4.9",
    price: "$18",
    imageUrl: "/assets/product-img/imgone.png",
    description: "Advanced tarot reading techniques by Mystic Meg, designed to deepen your understanding and practice.",
    reviews: [
      { title: "Very advanced", content: "Loved the advanced techniques. They are well-explained and easy to follow, even for someone with some experience in tarot reading.An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issue", stars: 5 },
      { title: "Amazing", content: "Amazing techniques. They have really helped deepen my understanding and practice.", stars: 5 },
      { title: "Good", content: "Good techniques, very useful. I've already started incorporating them into my readings.", stars: 4 },
      { title: "Detailed", content: "Very detailed and advanced. It's clear that a lot of thought and expertise went into this book.", stars: 5 },
      { title: "Great", content: "Great techniques. They are practical and have enhanced my readings significantly.", stars: 5 },
      { title: "Insightful", content: "Very insightful. I've learned a lot of new methods and approaches.", stars: 4 },
      { title: "Fantastic", content: "Fantastic techniques. This book is a must-have for any serious tarot reader.", stars: 5 },
      { title: "Good", content: "Good book, worth the money. It's helped me grow as a tarot reader.", stars: 4 },
      { title: "Very Good", content: "Very good techniques. They have added depth and nuance to my readings.", stars: 5 },
      { title: "Excellent", content: "Excellent techniques, highly recommend. Mystic Meg is truly a master of her craft.", stars: 5 },
    ]
  },
  {
    id: 6,
    productName: "Cooking Masterclass",
    name: "Jamie Oliver",
    stars: "4.8",
    price: "$50",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A cooking masterclass with Jamie Oliver, teaching you essential cooking techniques and delicious recipes.An insightful tarot reading session with Luna Lovegood, offering clarity and guidance on various life issue",
    reviews: [
      { title: "Fantastic", content: "Fantastic class, learned so much. Jamie's teaching style is engaging and easy to follow.", stars: 5 },
      { title: "Great Class", content: "Great class, very informative. I've improved my cooking skills a lot.", stars: 5 },
      { title: "Good", content: "Good class, learned a lot. The recipes are delicious and the techniques are practical.", stars: 4 },
      { title: "Very helpful", content: "Very helpful class. It's boosted my confidence in the kitchen.", stars: 5 },
      { title: "Loved it", content: "Loved the masterclass. Jamie is an amazing teacher and his passion for cooking is contagious.", stars: 5 },
      { title: "Useful", content: "Very useful class. I've learned a lot of new techniques and recipes.", stars: 4 },
      { title: "Excellent", content: "Excellent masterclass. It's been a great learning experience.", stars: 5 },
      { title: "Good", content: "Good class, worth the money. It's helped me become a better cook.", stars: 4 },
      { title: "Amazing", content: "Amazing class. Jamie's tips and tricks are invaluable.", stars: 5 },
      { title: "Very Good", content: "Very good class. I've learned a lot of new skills and recipes.", stars: 5 },
    ]
  },
  {
    id: 7,
    productName: "Digital Photography Basics",
    name: "Ansel Adams",
    stars: "4.7",
    price: "$35",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A beginner's guide to digital photography by Ansel Adams, covering essential techniques and tips for capturing stunning photos.",
    reviews: [
      { title: "Great Guide", content: "Great guide for beginners. It covers all the basics and provides useful tips for improving your photography skills.", stars: 5 },
      { title: "Informative", content: "Very informative and well-written. It's helped me understand the fundamentals of digital photography.", stars: 4 },
      { title: "Loved it", content: "Loved this guide. It's easy to understand and the examples are very helpful.", stars: 5 },
      { title: "Good Book", content: "Good book for beginners. It covers a lot of ground and is very practical.", stars: 4 },
      { title: "Useful", content: "Very useful guide. It's helped me take better photos and understand my camera better.", stars: 5 },
      { title: "Fantastic", content: "Fantastic guide, highly recommend. It's a must-read for anyone new to photography.", stars: 5 },
      { title: "Very Good", content: "Very good book. It explains the technical aspects of photography in a simple and understandable way.", stars: 4 },
      { title: "Great", content: "Great guide for beginners. It's comprehensive and easy to follow.", stars: 5 },
      { title: "Nice Book", content: "Nice book with lots of useful information. It's helped me improve my photography skills.", stars: 4 },
      { title: "Excellent", content: "Excellent guide. Ansel Adams is a great teacher and his passion for photography is evident in every page.", stars: 5 },
    ]
  },
  {
    id: 8,
    productName: "Yoga for Beginners",
    name: "Yogi Bhajan",
    stars: "4.5",
    price: "$22",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A beginner's guide to yoga by Yogi Bhajan, including basic poses, breathing techniques, and meditation practices.",
    reviews: [
      { title: "Great for beginners", content: "Great book for beginners. The instructions are clear and easy to follow.", stars: 5 },
      { title: "Very helpful", content: "Very helpful guide. It's made my introduction to yoga enjoyable and stress-free.", stars: 4 },
      { title: "Good", content: "Good book, learned a lot. The poses are well-explained and the illustrations are very helpful.", stars: 4 },
      { title: "Nice", content: "Nice guide, very informative. It's helped me start my yoga practice with confidence.", stars: 4 },
      { title: "Excellent", content: "Excellent guide for beginners. The explanations are simple and the practices are easy to follow.", stars: 5 },
      { title: "Loved it", content: "Loved this guide. It's a great resource for anyone new to yoga.", stars: 5 },
      { title: "Okay", content: "It was okay, could have been more detailed. Some poses were not explained in depth.", stars: 3 },
      { title: "Good Book", content: "Good book, worth the money. It's a great starting point for anyone interested in yoga.", stars: 4 },
      { title: "Very Good", content: "Very good guide. It's helped me understand the basics of yoga and its benefits.", stars: 4 },
      { title: "Fantastic", content: "Fantastic guide. Yogi Bhajan is an excellent teacher and his book is a great introduction to yoga.", stars: 5 },
    ]
  },
];



export const TopDiscountProduct = [
  {
    id: 9,
    productName: "Ultimate Coding Bootcamp",
    name: "Alice Johnson",
    stars: "4.9",
    originalPrice: "$200",
    discountedPrice: "$150",
    discount: "25%",
    imageUrl: "/assets/product-img/imgone.png",
    description: "An intensive coding bootcamp designed to take you from beginner to advanced coder in just a few months.",
    reviews: [
      { title: "Excellent course", content: "Very comprehensive and well-structured. The instructors were knowledgeable and supportive.", stars: 5 },
      { title: "Highly recommend", content: "Great value for money, especially with the discount. Learned a lot in a short amount of time.", stars: 5 },
      { title: "Challenging but worth it", content: "The bootcamp was challenging, but it was worth it. I feel much more confident in my coding skills now.", stars: 4 },
      { title: "Great experience", content: "Amazing learning experience. The projects were practical and relevant to the industry.", stars: 5 },
      { title: "Loved it", content: "Loved the bootcamp. It was intense but very rewarding. I landed a job right after completing it.", stars: 5 },
    ]
  },
  {
    id: 10,
    productName: "Digital Marketing Mastery",
    name: "Mark Thompson",
    stars: "4.7",
    originalPrice: "$100",
    discountedPrice: "$75",
    discount: "25%",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A complete guide to mastering digital marketing, including SEO, social media, and content marketing strategies.",
    reviews: [
      { title: "Very informative", content: "Learned a lot about digital marketing. The course content was up-to-date and well-presented.", stars: 5 },
      { title: "Good value", content: "Good value for money, especially with the discount. The course provided a solid foundation in digital marketing.", stars: 4 },
      { title: "Practical insights", content: "The course offered practical insights and actionable strategies. It's been very helpful for my business.", stars: 5 },
      { title: "Great course", content: "Great course, very comprehensive. The instructor was engaging and knowledgeable.", stars: 5 },
      { title: "Recommended", content: "Highly recommended for anyone looking to get into digital marketing. The discount was an added bonus.", stars: 5 },
    ]
  },
  {
    id: 11,
    productName: "Mindfulness and Meditation",
    name: "Sarah Lee",
    stars: "4.8",
    originalPrice: "$50",
    discountedPrice: "$35",
    discount: "30%",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A course on mindfulness and meditation techniques to reduce stress and improve mental clarity.",
    reviews: [
      { title: "Very calming", content: "The course was very calming and insightful. I've incorporated the techniques into my daily routine.", stars: 5 },
      { title: "Helpful", content: "Very helpful for managing stress. The instructor's voice is soothing and the exercises are effective.", stars: 4 },
      { title: "Great content", content: "Great content, well-structured. It's helped me become more mindful and present.", stars: 5 },
      { title: "Loved it", content: "Loved the meditation practices. They are easy to follow and have made a positive impact on my life.", stars: 5 },
      { title: "Highly recommend", content: "Highly recommend this course. The discount made it even more worthwhile.", stars: 5 },
    ]
  },
  {
    id: 12,
    productName: "Photography Essentials",
    name: "James Parker",
    stars: "4.6",
    originalPrice: "$75",
    discountedPrice: "$55",
    discount: "27%",
    imageUrl: "/assets/product-img/imgone.png",
    description: "A beginner's course in photography, covering the essentials of composition, lighting, and camera settings.",
    reviews: [
      { title: "Great for beginners", content: "Perfect for beginners. The course is easy to understand and follow.", stars: 5 },
      { title: "Very informative", content: "Very informative. I've learned a lot about photography basics.", stars: 4 },
      { title: "Good value", content: "Good value for the price, especially with the discount. The course is well worth it.", stars: 5 },
      { title: "Enjoyed it", content: "Enjoyed the course. It has given me a solid foundation to build on.", stars: 5 },
      { title: "Recommended", content: "Recommended for anyone new to photography. The instructor explains concepts clearly.", stars: 4 },
    ]
  },
];




// ------------&&-------------


export const products = [
  {
    name: "Tarot Card Reading",
    description: "Get insights into your future with our detailed Tarot Card Readings.",
    image: '/tarot.png',
  },
  {
    name: "Travel Guide",
    description: "Discover the best travel destinations and tips with our comprehensive travel guides.",
    image: '/travel-guide.png',
  },
  {
    name: "Food Recipes",
    description: "Explore a variety of delicious recipes that you can try at home.",
    image: '/book.png',
  },
  {
    name: "Diet Plan",
    description: "Personalized diet plans to help you achieve your health goals.",
    image: '/diet.png',
  },
  {
    name: "Digital Art",
    description: "Explore and purchase unique digital artworks created by talented artists.",
    image: '/digital-art.png',
  },
  {
    name: "E-Sports Guide",
    description: "Become a pro gamer with our expert guides and tips on e-sports.",
    image: '/e-sports.png',
  }
];

// faqData.js

export const faqData = [
  {
    id: 1,
    question: 'Can I add a wide range of products?',
    answer: 'Absolutely! Our platform allows you to easily add a wide range of products from your catalog.',
  },
  {
    id: 2,
    question: 'What kind of digital products can I sell?',
    answer: 'You can sell a wide range of digital products like ebooks, software, videos, music, and more.',
  },
  {
    id: 3,
    question: 'How do I get paid?',
    answer: 'You will receive payments directly to your linked bank account through our secure payment gateway.',
  },
  {
    id: 4,
    question: 'Is there a limit to the number of products I can list?',
    answer: 'No, there is no limit. You can list as many products as you like.',
  },
  {
    id: 5,
    question: 'Can I customize my store?',
    answer: 'Yes, our platform offers various customization options to help you create a unique store.',
  },
  {
    id: 6,
    question: 'What support is available if I encounter issues?',
    answer: 'We offer 24/7 customer support to assist you with any issues you may encounter.',
  },
];

export default faqData;


//product-cards all category

// export const productData = {
//   products: [
//     { id: 1, productName: "Mystic Tarot Reading", name: "Luna Lovegood", stars: "4.8", price: "$15", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 2, productName: "Paris Travel Guide", name: "John Doe", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 3, productName: "Italian Pasta Recipes", name: "Gordon Ramsay", stars: "4.9", price: "$30", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 4, productName: "Keto Diet Plan", name: "Jane Smith", stars: "4.6", price: "$25", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 5, productName: "Advanced Tarot Techniques", name: "Mystic Meg", stars: "4.9", price: "$18", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 6, productName: "Tokyo Travel Guide", name: "Jane Doe", stars: "4.4", price: "$22", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 7, productName: "Vegan Dessert Recipes", name: "Jamie Oliver", stars: "4.8", price: "$28", imageUrl: "/assets/product-img/imgone.png" },
//     { id: 8, productName: "Mediterranean Diet Plan", name: "Dr. Health", stars: "4.5", price: "$20", imageUrl: "/assets/product-img/imgone.png" },
//   ],
//   searchQuery: '',
// };


import { Description } from "@radix-ui/react-dialog";


export const ProductDetailsData = [
  {
    productDetails: {

      title: "Beverage Animation",
      creator: {
        name: "David Jackoff",
        link: "/creator/1"
      },
      rating: 4.7,
      reviewsCount: "1k",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 25,
      buttons: [
        {
          text: "Add To Cart",
          className: "bg-black text-white px-4 py-2 rounded"
        },
        {
          text: "Buy Now",
          className: "bg-yellow-500 text-black px-4 py-2 rounded"
        }
      ]
    },
    highlights: [
      "Easy to use",
      "Easy Returns",
      "Result in 10 days",
      "Google certified"
    ],
    reviews: [
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      },
      {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor."
      }
    ],
    similarProducts: [
      {
        id: 1,
        title: "Mystic Tarot Reading",
        creator: {
          name: "Luna Lovegood",
          link: "/creator/2"
        },
        productLink: '/product/2',
        rating: 4.8,
        reviewsCount: "2k",
        price: 15
      },
      {
        id: 2,
        title: "Paris Travel Guide",
        creator: {
          name: "John Doe",
          link: "/creator/3"
        },
        productLink: '/product/3',
        rating: 4.5,
        reviewsCount: "1.5k",
        price: 20
      },
      {
        id: 3,
        title: "Italian Pasta Recipes",
        creator: {
          name: "Gordon Ramsay",
          link: "/creator/4"
        },
        productLink: '/product/4',
        rating: 4.9,
        reviewsCount: "2.5k",
        price: 30
      },
      {
        id: 4,
        title: "Keto Diet Plan",
        creator: {
          name: "Jane Smith",
          link: "/creator/5"
        },
        productLink: '/product/5',
        rating: 4.6,
        reviewsCount: "1.8k",
        price: 25
      }
    ]
  }
];

export const cardData = [
  { id: 1, title: 'Coffee Brew', author: 'David Jackoff', rating: 4.8, numReviews: 1200, price: 15, link: "/creator/1" },
  { id: 2, title: 'Tea Blend', author: 'Sarah Smith', rating: 4.6, numReviews: 850, price: 12, link: "/creator/2" },
  { id: 3, title: 'Smoothie Delight', author: 'John Doe', rating: 4.7, numReviews: 900, price: 10, link: "/creator/3" },
  { id: 4, title: 'Latte Art', author: 'Emily White', rating: 4.9, numReviews: 1500, price: 20, link: "/creator/4" },
  { id: 5, title: 'Espresso Shot', author: 'Chris Black', rating: 4.5, numReviews: 700, price: 8, link: "/creator/5" },
  { id: 6, title: 'Herbal Infusion', author: 'Anna Green', rating: 4.4, numReviews: 650, price: 14, link: "/creator/6" },
  { id: 7, title: 'Cappuccino', author: 'Michael Brown', rating: 4.6, numReviews: 1100, price: 18, link: "/creator/7" },
  { id: 8, title: 'Fruit Punch', author: 'Laura Blue', rating: 4.8, numReviews: 1300, price: 16, link: "/creator/8" },
  { id: 9, title: 'Mocha Mix', author: 'James Red', rating: 4.7, numReviews: 1000, price: 19, link: "/creator/9" },
  { id: 10, title: 'Iced Tea', author: 'Nancy Yellow', rating: 4.3, numReviews: 500, price: 7, link: "/creator/10" },
  { id: 11, title: 'Green Tea', author: 'Paul Purple', rating: 4.6, numReviews: 900, price: 13, link: "/creator/11" },
  { id: 12, title: 'Chai Latte', author: 'Susan Orange', rating: 4.9, numReviews: 1400, price: 17, link: "/creator/12" },
];

// src/constants/profileData.js
// src/constants/profileData.js
export const profileData = [
  { name: "David Jackoff", totalProducts: 230, followers: "1M" },
  { name: "Sarah Smith", totalProducts: 120, followers: "500K" },
  { name: "John Doe", totalProducts: 150, followers: "800K" },
  { name: "Emily White", totalProducts: 180, followers: "1.2M" },
  { name: "Chris Black", totalProducts: 90, followers: "400K" },
  { name: "Anna Green", totalProducts: 200, followers: "1.1M" },
  { name: "Michael Brown", totalProducts: 220, followers: "950K" },
  { name: "Laura Blue", totalProducts: 160, followers: "700K" },
  { name: "James Red", totalProducts: 110, followers: "600K" },
  { name: "Nancy Yellow", totalProducts: 80, followers: "300K" },
  { name: "Paul Purple", totalProducts: 100, followers: "450K" },
  { name: "Susan Orange", totalProducts: 140, followers: "550K" },
];



// chartData.ts Followers Page

export const pieData = {
  labels: ['United States', 'Canada', 'Mexico', 'Other'],
  datasets: [
    {
      label: 'Traffic by Location',
      data: [38.6, 22.5, 30.8, 8.1],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const barData = {
  labels: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
  datasets: [
    {
      label: 'Traffic by Device',
      data: [20, 25, 30, 22, 18, 15],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

// /constants/topFansData.js

export const topFans = [
  { id: 1, name: 'John Doe', country: 'USA', watchHours: 120 },
  { id: 2, name: 'Jane Smith', country: 'UK', watchHours: 110 },
  { id: 3, name: 'Alice Johnson', country: 'Canada', watchHours: 100 },
  { id: 4, name: 'Bob Brown', country: 'Australia', watchHours: 95 },
  { id: 5, name: 'Charlie Davis', country: 'Germany', watchHours: 90 },
  { id: 6, name: 'Eva Green', country: 'France', watchHours: 85 },
  { id: 7, name: 'Frank Harris', country: 'Japan', watchHours: 80 },
  { id: 8, name: 'Grace Lee', country: 'South Korea', watchHours: 75 },
];

// Payout Page 
//Payout Chart Data
// export const chartData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//   datasets: [
//     {
//       label: 'Current Week',
//       data: [500, 1000, 3256, 4000, 3000, 5000, 8000],
//       borderColor: 'black',
//       backgroundColor: 'black',
//       fill: false,
//       tension: 0.4,
//       pointBackgroundColor: 'white',
//     },
//     {
//       label: 'Previous Week',
//       data: [1000, 3000, 5000, 2000, 1500, 6000, 7000],
//       borderColor: 'rgba(75, 192, 192, 0.4)',
//       backgroundColor: 'rgba(75, 192, 192, 0.4)',
//       fill: true,
//       tension: 0.4,
//       pointBackgroundColor: 'white',
//     },
//   ],
// };


//payout chartoptions

// export const chartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     tooltip: {
//       mode: 'index' as const,
//       intersect: false,
//     },
//   },
//   interaction: {
//     mode: 'nearest' as const,
//     intersect: false,
//   },
//   scales: {
//     x: {
//       display: true,
//       title: {
//         display: true,
//         text: 'Month',
//       },
//     },
//     y: {
//       display: true,
//       title: {
//         display: true,
//         text: 'Value',
//       },
//       suggestedMin: 0,
//       suggestedMax: 10000,
//     },
//   },
// };

//creator login page

//creator login chart
export const chartDataCreator = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Current Week',
      data: [500, 1000, 3256, 4000, 3000, 5000, 8000],
      borderColor: 'black',
      backgroundColor: 'black',
      fill: false,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
    {
      label: 'Previous Week',
      data: [1000, 3000, 5000, 2000, 1500, 6000, 7000],
      borderColor: 'rgba(75, 192, 192, 0.4)',
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'white',
    },
  ],
};


//creator login chartoptions

export const chartOptionsCreator = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  interaction: {
    mode: 'nearest' as const,
    intersect: false,
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Value',
      },
      suggestedMin: 0,
      suggestedMax: 10000,
    },
  },
};

// Payouts data
export const payoutData = [
  {
    title: "Last 7 Days",
    date: "Apr 2-9 2021",
    payout: "Rs.25"
  },
  {
    title: "Last 30 Days",
    date: "Apr-March 2021",
    payout: "Rs.700"
  },
  {
    title: "Total Earnings",
    date: "Est. by Apr 15 2021",
    payout: "Rs.5337"
  }
]


// Product Lisitng

export const productListings = [
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  },
  {
    name: "Product A",
    stars: "★★★★★",
    reviews: 4.7,
    noReviews: "1k",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    imageUrl: "/assets/product-img/imgone.png"
  }

]





import { User, CreditCard, Users, LifeBuoy, Settings, Keyboard, Plus, Coins, ListOrdered, MapPin, Contact2, Gift, Wallet, ClipboardList, Star, AlertCircle, Heart, CoinsIcon } from 'lucide-react';
import { CommunityCardsData } from '@/lib/dummy';
export const headerLinks = [
  {
    label: 'My Account',
    route: '/your-account',
  },
  {
    label: 'Community',
    route: '/community',
  },
  {
    label: 'Explore',
    route: '/explore',
  },
  {
    label: 'Creators',
    route: '/creator',
  },
  {
    label: 'Dashboard',
    route: '/dashboard',
  },

]

const headerLinksDashboard = [
  {
    label: 'Dashboard',
    route: '/dashboard',

  },
  {
    label: 'Product',
    route: '/',

  },
  {
    label: 'User',
    route: '/creator',

  },
  {
    label: 'Orders',
    route: '/orders',

  },
  {
    label: 'Settings',
    route: '/settings',

  },
];
export const headerLinkstwo = [
  {
    label: 'Refer and Earn',
    route: '/refer',
  }
]
export const headerLinksThree = [
  {
    label: 'My Account',
    route: '/your-account',
  },
  {
    label: 'Sell Your Product',
    route: '/explore',
  },
  {
    label: 'Wishlist',
    route: '/favourite',
  },
  {
    label: 'Cart',
    route: '/cart',
  },
  {
    label: 'Community',
    route: '/community',
  },
  {
    label: 'Creators',
    route: '/creator',
  },
  {
    label: 'Dashboard',
    route: '/dashboard',
  },
]
export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}



export const INSTAGRAM_PNG = "/instagram.png"
export const FACEBOOK_PNG = "/pngegg (14).png"
export const GOOGLE_PNG = "/pngegg (15).png"
export const CUATE_PNG = "\cuate.png"
export const STAR_PNG = "\Frame 203.png"
export const GOLD_SACK = "/gold_sack.png"
export const signInImage = "/Frame 120.png"
export const REWARD_PNG = "/Frame 121.png"
export const EARN_POINT_PNG = "/Frame 122.png"
export const BRO_PNG = "/Frame 132.png"
export const BOY_PNG = "/Frame 205.png"
export const STAR1_PNG = "/star (2).png"
export const STAR2_PNG = "/police-badge (1).png"
export const STAR3_PNG = "/star-medal (2).png"
export const AMICO_PNG = "\amico.png"
export const BLOCK_PNG = "\Chart.png"
export const BLOCK_PNG2 = "\Frame (1).png"
export const BG_IMAGE = "https://images.unsplash.com/photo-1539597833161-fd52d6ee5d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHx5ZWxsb3clMjBiYWNrZ3JvdW5kJTIwaW1hZ2V8ZW58MHwwfDB8fHww"
export const MOBILE_PAYMENT = '/cashless-payment.png'
export const Coin = '/dollar.png'


export const faqs = [
  {
    question: 'Can I add a wide range of products?',
    answer: 'Absolutely! Our platform allows you to easily add a wide range of products from your catalog.',
  },
  {
    question: 'What kind of digital products can I sell?',
    answer: 'You can sell a wide range of digital products like ebooks, software, videos, music, and more.',
  },
  {
    question: 'How do I get paid?',
    answer: 'You will receive payments directly to your linked bank account through our secure payment gateway.',
  },
  {
    question: 'Is there a limit to the number of products I can list?',
    answer: 'No, there is no limit. You can list as many products as you like.',
  },
  {
    question: 'Can I customize my store?',
    answer: 'Yes, our platform offers various customization options to help you create a unique store.',
  },
  {
    question: 'What support is available if I encounter issues?',
    answer: 'We offer 24/7 customer support to assist you with any issues you may encounter.',
  },
];

// pricingConstants.js
export const pricingData = [
  {
    title: 'You',
    description: 'You will be charged 12.5%',
    example: {
      productPrice: 'Rs.100',
      customerPay: 'Rs.100',
      earning: 'Rs.87.5',
    },
  },
  {
    title: 'Your Customers',
    description: 'Customers will be charged 12.5%',
    example: {
      productPrice: 'Rs.100',
      customerPay: 'Rs.112.5',
      earning: 'Rs.100',
    },
  },
];


// constants.js

// export const PRODUCTS = [
//   {
//     id: 1,
//     title: "Beverage Animation",
//     author: "David Jackoff",
//     rating: 4.7,
//     numRatings: 1000,
//     price: 25,
//   },
//   {
//     id: 2,
//     title: "Another Product",
//     author: "John Doe",
//     rating: 4.5,
//     numRatings: 800,
//     price: 30,
//   },
//   {
//     id: 3,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   {
//     id: 4,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   {
//     id: 5,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   {
//     id: 6,
//     title: "Third Product",
//     author: "Jane Smith",
//     rating: 4.9,
//     numRatings: 1200,
//     price: 20,
//   },
//   // Add more products as needed
// ];


// data/products.ts
export const productsInfo = [
  {
    id: 1,
    title: "Beverage Animation",
    author: {
      name: "David Jackoff",
      id: 1
    },
    rating: 4.7,
    reviews: "1k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 25,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 2,
    title: "Nature Landscape",
    author: {
      name: "Emily Watson",
      id: 2
    },
    rating: 4.9,
    reviews: "500",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 30,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 3,
    title: "Urban Photography",
    author: {
      name: "John Doe",
      id: 3
    },
    rating: 4.8,
    reviews: "800",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    price: 40,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 4,
    title: "Abstract Art",
    author: {
      name: "Sarah Johnson",
      id: 4
    },
    rating: 4.6,
    reviews: "700",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 35,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 5,
    title: "Portrait Drawing",
    author: {
      name: "Michael Smith",
      id: 5
    },
    rating: 4.5,
    reviews: "1.2k",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: 20,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 6,
    title: "Wildlife Illustration",
    author: {
      name: "Jessica Brown",
      id: 6
    },
    rating: 4.7,
    reviews: "600",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    price: 45,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 7,
    title: "Fantasy World",
    author: {
      name: "Paul Wilson",
      id: 7
    },
    rating: 4.9,
    reviews: "900",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    price: 50,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 8,
    title: "Sci-Fi Concepts",
    author: {
      name: "Laura Martinez",
      id: 8
    },
    rating: 4.8,
    reviews: "1.1k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 55,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 9,
    title: "Historical Figures",
    author: {
      name: "Tom Harris",
      id: 9
    },
    rating: 4.6,
    reviews: "300",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 60,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 10,
    title: "Cartoon Characters",
    author: {
      name: "Amy Lee",
      id: 10
    },
    rating: 4.7,
    reviews: "1.5k",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    price: 22,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 11,
    title: "3D Modeling",
    author: {
      name: "Chris Moore",
      id: 11
    },
    rating: 4.5,
    reviews: "750",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    price: 28,
    image: "/assets/product-img/imgone.png"
  },
  {
    id: 12,
    title: "Vintage Posters",
    author: {
      name: "Nancy White",
      id: 12
    },
    rating: 4.6,
    reviews: "400",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    price: 32,
    image: "/assets/product-img/imgone.png"
  }
];


// creator-login 

export const Add = [{ image_url: "/assets/creator-login-img/Add.png" }]

export const accounts = [
  { id: 1, image_url: "/assets/your-account-img/order.png", title: "Your Order", description: "Track , return , or buy things" },
  { id: 2, image_url: "/assets/your-account-img/address.png", title: "Address", description: "Edit adresses for orders and gift" },
  { id: 3, image_url: "/assets/your-account-img/Payment.png", title: "Payment Methods", description: "Edit or add Payment Methods" },
  { id: 4, image_url: "/assets/your-account-img/contact.png", title: "Contact Us", description: "" }
]
// constants/addresses.js
export const addresses = [
  {
    id: 1,
    name: "John USA",
    line1: "Dhemaji Engineering College",
    line2: "Tekjuri No 5, Dhemaji-787057",
    city: "Dhemaji",
    state: "ASSAM",
    zip: "787057",
    country: "India",
    phone: "94XXX00X12",
    isDefault: true,
  },
  {
    id: 2,
    name: "John India",
    line1: "Maligaon",
    line2: "Gate 3",
    city: "Guwahati",
    state: "ASSAM",
    zip: "784XX3",
    country: "India",
    phone: "9XX-XX9549-X",
    isDefault: false,
  },
];
export const orders = [
  {
    date: "25 February 2023",
    total: "₹799.00",
    shipTo: "Anish Aich",
    orderId: "407-7808997-3858710",
    productName: "Paris Travel Guide",
    imgUrl: "/assets/product-img/imgone.png",
    status: "",
    type: "buy-again"
  },
  {
    date: "25 February 2023",
    total: "₹299.00",
    shipTo: "Anish Aich",
    orderId: "407-6579730-3719549",
    productName: "Italian Pasta Recipes",
    imgUrl: "/assets/product-img/imgone.png",
    status: "Return window closed on 16-Mar-2023",
    type: "not-yet-shipped"
  }, {
    date: "7 March 2023",
    total: "₹545.00",
    shipTo: "Anish",
    orderId: "407-2287782-8446435",
    productName: "Mystic Tarot Reading",
    imgUrl: "/assets/product-img/imgone.png",
    status: "Return complete",
    type: "orders"
  },
  {
    date: "25 February 2023",
    total: "₹799.00",
    shipTo: "Anish Aich",
    orderId: "407-7808997-3858710",
    productName: "Paris Travel Guide",
    imgUrl: "/assets/product-img/imgone.png",
    status: "",
    type: "buy-again"
  },
  {
    date: "25 February 2023",
    total: "₹299.00",
    shipTo: "Anish Aich",
    orderId: "407-6579730-3719549",
    productName: "Italian Pasta Recipes",
    imgUrl: "/assets/product-img/imgone.png",
    status: "Return window closed on 16-Mar-2023",
    type: "not-yet-shipped"
  }, {
    date: "7 March 2023",
    total: "₹545.00",
    shipTo: "Anish",
    orderId: "407-2287782-8446435",
    productName: "Mystic Tarot Reading",
    imgUrl: "/assets/product-img/imgone.png",
    status: "Return complete",
    type: "cancelled"
  },
  {
    date: "25 February 2023",
    total: "₹799.00",
    shipTo: "Anish Aich",
    orderId: "407-7808997-3858710",
    productName: "Paris Travel Guide",
    imgUrl: "/assets/product-img/imgone.png",
    status: "",
    type: "cancelled"
  },
  // Add more orders here with the appropriate type
];

// constants.ts
export const COUPONS = [
  { code: 'DISCOUNT10', value: 10 },
  { code: 'DISCOUNT20', value: 20 },
  { code: 'DISCOUNT30', value: 30 },
];

export const states = [
  { name: "California" },
  { name: "New York" },
  { name: "Texas" },
  { name: "Florida" },
  { name: "Illinois" },
];


// reviews-ratings 

export const reviews = [
  {
    stars: 5,
    name: 'italian pasta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    stars: 4,
    name: 'mystic tarrot card',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    stars: 3,
    name: 'French fries',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    stars: 5,
    name: 'Web3 Novel',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const sidebarlinks = [
  { title: "My Orders", icon: ListOrdered, href: "/your-account" },
  { title: "Profile Information", icon: User, href: "/your-account/my-profile" },
  { title: "Manage Addresses", icon: MapPin, href: "/your-account/manage-address" },
  { title: "Contact Us", icon: Contact2, href: "/your-account/contact-us" },
  { title: "Gift Cards", icon: Gift, href: "#" },
  { title: "Saved UPI", icon: CreditCard, href: "#" },
  { title: "Saved Cards", icon: Wallet, href: "#" },
  { title: "My Coupons", icon: ClipboardList, href: "#" },
  { title: "My Reviews & Ratings", icon: Star, href: "/your-account/reviews-ratings" },
  { title: "All Notifications", icon: AlertCircle, href: "#" },
  { title: "My Wishlist", icon: Heart, href: "/your-account/wishlist" },
  { title: "Clamio Coins", icon: CoinsIcon, href: "/your-account/clamio-coins" },
];

// data.js
export const colourOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "purple", label: "Purple" },
  { value: "orange", label: "Orange" },
  { value: "pink", label: "Pink" },
  { value: "brown", label: "Brown" }
];

export const CATEGORY = [
  { value: "tarot Card Reading", label: "Tarot Card Reading" },
  { value: "travel Guide", label: "Travel Guide" },
  { value: "diet Plan", label: "Diet Plan" },
  { value: "e-Sports Guide", label: "E-Sports Guide" },
  { value: "food Recipes", label: "Food Recipes" },
  { value: "digital Art", label: "Digital Art" },
]


export const fansOptions = [
  { value: 'fan1', label: 'Alice Johnson' },
  { value: 'fan2', label: 'Bob Smith' },
  { value: 'fan3', label: 'Charlie Brown' },
  { value: 'fan4', label: 'Diana Prince' },
  { value: 'fan5', label: 'Edward Davis' },
  { value: 'fan6', label: 'Fiona Lee' },

]


// data/brandPacks.ts
export const brandPacks = [
  {
    id: 1,
    name: "Bonus Card Reading",
    discount: "Extra 10% OFF",
    coupons: "3 coupons at ₹29",
    validity: "Valid for 10 days",
    imageUrl: "/assets/product-img/imgone.png", // Ensure you have this image in the public folder
  },
  {
    id: 2,
    name: "Travel Mega Coupon",
    discount: "Extra 30% OFF",
    coupons: "3 coupons at ₹9",
    validity: "Valid for 30 days",
    imageUrl: "/assets/product-img/imgone.png",
  },
  {
    id: 3,
    name: "Food Ninja",
    discount: "Extra 60% OFF",
    coupons: "3 coupons at ₹19",
    validity: "Valid for 20 days",
    imageUrl: "/assets/product-img/imgone.png",
  },
  {
    id: 4,
    name: "50-50 Art",
    discount: "Extra 50% OFF",
    coupons: "3 coupons at ₹29",
    validity: "Valid for 30 days",
    imageUrl: "/assets/product-img/imgone.png",
  },
  {
    id: 5,
    name: "Starter offer",
    discount: "Extra 40% OFF",
    coupons: "3 coupons at ₹39",
    validity: "Valid for 15 days",
    imageUrl: "/assets/product-img/imgone.png",
  },
];
