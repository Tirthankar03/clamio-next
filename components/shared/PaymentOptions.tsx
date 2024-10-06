// components/PaymentOptions.js
'use client'
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { FaCreditCard, FaWallet, FaUniversity, FaMobileAlt, FaCalendarAlt, FaTruck } from 'react-icons/fa';
import { useSessionData } from "@/lib/useSessionData";
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import initiatePayment from '@/helpers/payment';
import { useRouter } from 'next/navigation';

const PaymentOptions = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('');
  const { data: session } = useSessionData();

  const handleOptionChange = (value:any) => {
    setSelectedOption(value);
  };



  const handleSubmit = async () => {
    try{
      if(!session){
        toast.warning('you need to login to checkout')
        return;
      }

  
      const body = {
        email: session?.user.email,
        serviceName: "Dummy service" // this needs to be done by the db
      }
  
      //need to make api call here and populate the options => const res = axios.post('/payment')
  
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/make-payment`, body, {withCredentials: true} )
  
      console.log("res after payment>>>>>>>>>>>>>>>", res)
      const id = await initiatePayment(res.data);

      // toast.success("Payment successfull");
      router.push("/payment/success");


      // with the new id hit a new route in the backend that saves the id and necessary details
      // const orderRes = axios.post('/something', id)

      // empty the shopping cart: new backend endpoint

  
    }catch(err:any){
      console.error("error in handleSubmit payment>>>>>>>", err)
      toast.error('payment unsuccessful. please try again later')
      // if(err.response.data){
      //   toast.error(err.response.data)
      // }
    }

  }

  return (
    <div className="w-full border mx-auto p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-6">Payment Options</h4>
      <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">UPI</label>
          <div className="flex items-center mb-3">
            <RadioGroupItem value="phonepe" id="phonepe" />
            <label htmlFor="phonepe" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaMobileAlt className="mr-2" /> PhonePe / GooglePay / Paytm
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="upi-id" id="upi-id" />
            <label htmlFor="upi-id" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaMobileAlt className="mr-2" /> Your UPI ID
            </label>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <RadioGroupItem value="wallets" id="wallets" />
            <label htmlFor="wallets" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaWallet className="mr-2" /> Wallets
            </label>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <label htmlFor="credit-card" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaCreditCard className="mr-2" /> Credit / Debit / ATM Card
            </label>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <RadioGroupItem value="net-banking" id="net-banking" />
            <label htmlFor="net-banking" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaUniversity className="mr-2" /> Net Banking
            </label>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <RadioGroupItem value="emi" id="emi" />
            <label htmlFor="emi" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaCalendarAlt className="mr-2" /> EMI (Easy Installments)
            </label>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <RadioGroupItem value="cod" id="cod" />
            <label htmlFor="cod" className="ml-2 text-gray-800 cursor-pointer flex items-center">
              <FaTruck className="mr-2" /> Cash on Delivery
            </label>
          </div>
        </div>
      </RadioGroup>
      <div className="mt-6">
        <button
          // type="submit"
          onClick={() => handleSubmit()}
          className="w-full px-4 py-2 bg-secondary text-white rounded-lg hover:bg-gray-800 transition duration-200"
          disabled={!selectedOption}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
