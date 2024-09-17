import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // Shadcn accordion for FAQs
import { services } from "@/constants/data";
import Image from "next/image"; // For creator image
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"; // Shadcn Select
import { FaWhatsapp } from "react-icons/fa";

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Find the service by ID from the dummy data
  const service = services.find((service) => service.id === parseInt(id));

  // If the service is not found (handle undefined)
  if (!service) {
    return <div className="p-6 text-red-600">Service not found</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-50">
      {/* Left Column - About the Plan, Highlights, Creator Info, FAQs */}
      <div className="space-y-6">
        {/* About the Plan */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <p className="text-gray-600 mt-2">{service.description}</p>
          <div className="mt-4 font-bold text-purple-600">Starting at ₹{service.price}</div>
        </div>

        {/* Call on WhatsApp */}
        <div className="bg-green-100 text-green-700 p-4 rounded-md">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <FaWhatsapp size={20} />
            <span>Call on WhatsApp</span>
          </Button>
        </div>

        {/* Service Highlights */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Highlights</h2>
          <div className="flex space-x-4">
            {service.highlights.map((highlight, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Creator Info */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold">Meet Your Creator, {service.creator.name}</h2>
          <div className="flex items-start space-x-6 mt-4">
            {/* Dummy creator image */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-gray-600">{service.creator.description}</p>
              {/* Social Links */}
              <div className="flex items-center mt-4 space-x-4">
                {/* Instagram Link with Lucide icon */}
                <Link href={service.creator.socialLinks.instagram} className="flex items-center text-gray-500 hover:text-purple-600">
                  <Instagram className="mr-2 text-pink-500" />
                  Instagram: {service.creator.followers.instagram}
                </Link>

                {/* LinkedIn Link with Lucide icon */}
                <Link href={service.creator.socialLinks.linkedin} className="flex items-center text-gray-500 hover:text-purple-600">
                  <Linkedin className="mr-2 text-blue-500" />
                  LinkedIn: {service.creator.followers.linkedin}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">FAQs</h2>
          <Accordion type="multiple" className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Right Column - Service Image, Choose Plan, Book a Spot */}
      <div className="space-y-6">
        {/* Dummy Service Image */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <Image
            src={service.imageUrl} // Replace with actual image path
            alt={service.title}
            width={1000}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Plan Selection and Schedule (ShadCN Select) */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Choose a Plan */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Choose a Plan</h3>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Plan" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {service.plans.map((plan, idx) => (
                  <SelectItem className="hover:bg-primary cursor-pointer" key={idx} value={plan}>{plan}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Schedule Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Schedule</h3>
            <Select >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Date & Time" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {service.schedules.map((schedule, idx) => (
                  <SelectItem className="hover:bg-primary cursor-pointer" key={idx} value={schedule}>{schedule}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Book a Spot Button */}
        <div className="">
          <Button className="bg-secondary hover:bg-gray-900 text-white w-full px-6 py-3 rounded-md shadow-lg">
            Book a Spot
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
