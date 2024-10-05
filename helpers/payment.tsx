// import { toast } from "sonner";


// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }
// //add more things to the response type
// type responseType = {
//   razorpay_payment_id: string;
// };
// type optionsType = {
//   key: string;
//   key_secret: string;
//   amount: number;
//   currency: string;
//   order_receipt: string;
//   name: string;
//   description: string;
//   handler: (response: responseType) => void;
//   theme: {
//     color: string;
//   };
// };


// type OrderData = {
//     status: boolean;
//     data: {
//       amount: number;
//       amount_due: number;
//       amount_paid: number;
//       attempts: number;
//       created_at: number;
//       currency: string;
//       entity: string;
//       id: string;
//       notes: string[];
//       offer_id: string | null;
//       receipt: string;
//       status: string;
//     };
//     message: string;
//   };
  

// //frontend code
// export function initiatePayment(order: OrderData): Promise<string> {

//   console.log("order in initiatePayment>>>>>>>>>>>", order)
//   return new Promise<string>((resolve, reject) => {
//     //pass the results of api call to the options
//     var options: optionsType = {
//       //need to positively change the credentials later with prod credential  
//       key: process.env.RAZORPAY_ID || 'rzp_test_JiEJrykMcKRloz',
//       key_secret: process.env.RAZORYPAY_SECRET || 'QtYdgd2cuIyXfwI2UJCsc87i',
//       amount: order.data.amount,
//       currency: order.data.currency ,
//       order_receipt: order.data.receipt,
//       //need to give proper name
//       name: "test",
//       //need to give proper description
//       description: "for testing purpose",
//       handler: (response: responseType) => {
//         console.log("response from razorpay>>>>>>>>>>>", response)
//         if (response.razorpay_payment_id) {
//           const id: string = response.razorpay_payment_id;
//           resolve(id);
//         } else {
//           toast.warning("Payment failed or canceled.");
//           reject(new Error("Payment failed or canceled."));
//         }
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     var pay = new window.Razorpay(options);
//     pay.open();
//   });
// }

// export default initiatePayment;






import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type responseType = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type optionsType = {
  key: string;
  key_secret: string;
  amount: number;
  currency: string;
  order_receipt: string;
  name: string;
  description: string;
  handler: (response: responseType) => void;
  theme: {
    color: string;
  };
};

type OrderData = {
  status: boolean;
  data: {
    amount: number;
    amount_due: number;
    amount_paid: number;
    attempts: number;
    created_at: number;
    currency: string;
    entity: string;
    id: string;
    notes: string[];
    offer_id: string | null;
    receipt: string;
    status: string;
  };
  message: string;
};

// Utility function to dynamically load the Razorpay script
const loadRazorpayScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject(new Error('Razorpay SDK failed to load.'));
    };
    document.body.appendChild(script);
  });
};

// Frontend code
export function initiatePayment(order: OrderData): Promise<string> {
  console.log("order in initiatePayment>>>>>>>>>>>", order);

  return new Promise<string>(async (resolve, reject) => {
    try {
      // Load Razorpay script dynamically
      await loadRazorpayScript();

      // Check if Razorpay is available
      if (!window.Razorpay) {
        throw new Error('Razorpay SDK is not available.');
      }

      // Pass the results of the API call to the options
      const options: optionsType = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID || 'rzp_test_JiEJrykMcKRloz',
        key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET || 'QtYdgd2cuIyXfwI2UJCsc87i',
        amount: order.data.amount,
        currency: order.data.currency,
        order_receipt: order.data.receipt,
        name: "test",
        description: "for testing purpose",
        handler: (response: responseType) => {
          console.log("response from razorpay>>>>>>>>>>>", response);
          if (response.razorpay_payment_id) {
            const id: string = response.razorpay_payment_id;
            resolve(id);
          } else {
            toast.warning("Payment failed or canceled.");
            reject(new Error("Payment failed or canceled."));
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Open Razorpay payment window
      const pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      toast.error(error.message || 'Error occurred while loading Razorpay.');
      reject(error);
    }
  });
}

export default initiatePayment;
