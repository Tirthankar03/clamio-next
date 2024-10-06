// Update the path if necessary
import { services } from '@/constants/data';
import Link from 'next/link';

const ServiceCards = () => {
  return (
    <div  className="w-full lg:w-5/6 mx-auto">
       <h1 className="text-4xl font-bold mb-10 ">Service Listing</h1>
      <div className="grid grid-cols-1 mx-5 md:mx-0 sm:mx-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {services.map((service) => (
        <Link key={service.id} href={`/service/${service.id}`}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <img
              src={service.imageUrl} // Ensure image URLs are included in your dummy data
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description.slice(0, 100)}...</p>
              <div className="mt-4 font-bold text-purple-600">Starting at ₹{service.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
    
  );
};

export default ServiceCards;
