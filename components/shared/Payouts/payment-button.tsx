'use client'
import React, { useState } from 'react';
import { FaCreditCard, FaWallet, FaUniversity, FaMobileAlt, FaCalendarAlt, FaTruck } from 'react-icons/fa';
import { useSessionData } from "@/lib/useSessionData";
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import initiatePayment from '@/helpers/payment';
import { useRouter } from 'next/navigation';
import { TCartList } from '@/types/cart';
import {  useTransition } from "react";
import { Button } from '@/components/ui/button';




export const PaymentButton = ({productIds}: {productIds: string[]}) => {
    const router = useRouter()
  const [isPending, startTransition] = useTransition();


  const { data: session } = useSessionData();





  const handleSubmit = async () => {
    startTransition(async () => {
      try {
        if (!session) {
          toast.warning('You need to login to checkout');
          return;
        }
  
        const body = {
          email: session?.user.email,
          serviceName: "Dummy service" // this needs to be done by the db
        };
  
        // API call to initiate payment
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/payment/make`, body, { withCredentials: true });
        
        console.log("res after payment>>>>>>>>>>>>>>>", res);
        const id = await initiatePayment(res.data);
  
        // Create order body
        const orderBody = {
          product_id: productIds, // You need to define productIds earlier in the code
          quantity: productIds.length,
          itemPrice: 1000,
          amountPaid: 2000,
          status: "Payment Successfull",
          razorpayId: id
        };
  
        // API call to confirm the payment and create the order
        const orderRes = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/payment/confirm-payment`, orderBody, { withCredentials: true });
  
        console.log("res after payment confirmation>>>>>>>>>>>>>>>", orderRes);
  
        // Optionally display success message and navigate
        // toast.success("Payment successful");
        // router.push("/payment/success");
  
        // TODO: Empty the shopping cart by hitting a backend endpoint
  
      } catch (err: any) {
        console.error("Error in handleSubmit payment>>>>>>>", err);
        toast.error('Payment unsuccessful. Please try again later');
      }
    });
  };
  


      return (

          <div className="mt-6">
            <Button
                disabled={isPending} 
                isLoading={isPending}
                loadingText=" "
            onClick={() => handleSubmit()}
              className="w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-gray-800 transition duration-200"
            //   disabled={!selectedOption}
            >
              Proceed to Pay
            </Button>
        </div>
      );    
    
}