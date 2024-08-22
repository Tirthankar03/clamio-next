// FAQ.js

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from '@/constants/data';

function FAQ() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-2 text-lg text-gray-600">Here are some common questions about our service.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id.toString()}  className="border-b border-gray-200">
            <AccordionTrigger className="py-4 px-4 bg-gray-100 text-start  hover:bg-gray-200 cursor-pointer font-semibold">
              {faqItem.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 ">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;
