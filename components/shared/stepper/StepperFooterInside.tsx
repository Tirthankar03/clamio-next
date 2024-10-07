'use client'
import { Step, Stepper, useStepper, type StepItem } from "@/components/shared/stepper";
import { Button } from "@/components/ui/button";
import Checkout from '@/components/shared/checkout'; // Adjust the import path as needed
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import CartItem from "@/components/shared/cart/cartItem";
import PaymentOptions from "@/components/shared/PaymentOptions";

const steps = [
  { label: "DELIVERY ADDRESS" },
  { label: "ORDER SUMMARY" },
  { label: "PAYMENT OPTIONS" },
] satisfies StepItem[];




export default function StepperFooterInside() {
    const items = useSelector((state: RootState) => state.cart.items);
  
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)), 0);
  
    return (
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 w-full lg:max-w-7xl p-4">
          <div className="flex-1">
            <Stepper className="" orientation="vertical" initialStep={0} steps={steps}>
              {steps.map((stepProps, index) => (
                <Step key={stepProps.label} {...stepProps}>
                  <div className="h-full w-full items-center justify-center rounded-md">
                    {index === 0 ? (
                      <Checkout />
                    ) : index === 1 ? (
                      <div>
                        {items.length > 0 ? (
                          // items.map(item => <CartItem key={item.id} item={item} />)
                          <div>CartItem</div>
                        ) : (
                          <p className="text-center">Your cart is empty.</p>
                        )}
                      </div>
                    ) : index==2 ? (
                      <div>
                        <PaymentOptions/>
                      </div>
                    
                    ):( 
                      null
                    ) }
                  </div>
                  <StepButtons />
                </Step>
              ))}
              <FinalStep />
            </Stepper>
          </div>
  
          <div className="bg-white shadow-md p-8 h-fit mb-8 w-full lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-6">Price Details</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-600 text-lg">Price ({totalItems}):</span>
                <span className="text-gray-800 text-lg font-medium">${totalCost.toFixed(2)}</span>
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
                <span className="text-gray-800 text-lg">${(totalCost + 5.00).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const StepButtons = () => {
    const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } = useStepper();
    return (
      <div className="w-full my-3 flex gap-2 mb-4">
        <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="default">
          Prev
        </Button>
        <Button size="sm" onClick={nextStep}>
          {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
        </Button>
      </div>
    );
  };
  
  const FinalStep = () => {
    const { hasCompletedAllSteps, resetSteps } = useStepper();
    if (!hasCompletedAllSteps) {
      return null;
    }
    return (
      <>
        <div className="h-40 my-6 flex items-center justify-center border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
        <div className="w-full flex justify-end gap-2">
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        </div>
      </>
    );
  };