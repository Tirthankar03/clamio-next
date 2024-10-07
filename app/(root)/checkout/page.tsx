import StepperFooterInside from '@/components/shared/stepper/StepperFooterInside'
import React from 'react'
import { getAllCart } from '@/lib/getRoutes/cart';
import { TCart, TCartProduct } from '@/types/cart';
import Checkout from '@/components/shared/checkout';
import { redirect } from 'next/navigation';
import CartItem from '@/components/shared/cart/cartItem';
import { PaymentButton } from '@/components/shared/Payouts/payment-button';

const page = async () => {
  const userCartDetails = await getAllCart()

  if (userCartDetails.success && userCartDetails.data) {
  const cart: TCart = userCartDetails.data

  console.log("cart>>>>>>>>>>", cart.products);
  
  
  const productIds = cart.products.map(item => item.product_id);

  console.log(productIds)

  return (
    <div className="flex justify-center">
    <div className="flex flex-col lg:flex-row gap-8 w-full lg:max-w-7xl p-4">
      <div className="flex-1">
      <div className="h-full w-full items-center justify-center rounded-md">
      {cart.products.length > 0 ? (
                          cart.products.map(item => <CartItem key={item.product_id} item={item} />)
                          // <div>CartItem</div>
                        ) : (
                          <p className="text-center">Your cart is empty.</p>
                        )}
      </div>
      </div>

      <div className="bg-white shadow-md p-8 h-fit mb-8 w-full lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-6">Price Details</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-gray-600 text-lg">Price {cart.products.length}:</span>
            <span className="text-gray-800 text-lg font-medium">Rs{cart.total_amount}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-gray-600 text-lg">Delivery Charges</span>
            <span className="text-green-500 text-lg font-medium">$70 FREE</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-gray-600 text-lg">Packaging Charge</span>
            <span className="text-gray-800 text-lg font-medium">$5</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-2 font-semibold">
            <span className="text-gray-800 text-lg">Total Payable</span>
            <span className="text-gray-800 text-lg">${(cart.total_amount + 5.00).toFixed(2)}</span>
          </div>


          <PaymentButton productIds={productIds} />
        </div>
      </div>
    </div>
  </div>
  )

}else{
  redirect('/error')
}
}


export default page