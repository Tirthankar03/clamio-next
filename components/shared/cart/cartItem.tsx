'use client';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '@/utils/cartSlice';
import Image from 'next/image';
import { toast } from 'sonner';
import { CartItemProps } from '@/lib/types';
import { TCartProduct } from '@/types/cart';
import { Button } from '@/components/ui/button';
import { useTransition } from "react";
import { deleteFromCartById } from '@/action/cart';

type Props = {
    item: TCartProduct;
  };
  function CartItem({ item }: Props) {
  const [isPending, startTransition] = useTransition();

    const dispatch = useDispatch();

    // const handleQuantityChange = (amount: number) => {
    //     if (item.quantity + amount >= 0) {
    //         dispatch(updateQuantity({ id: item., amount }));
    //         toast.success(`Quantity ${amount > 0 ? 'increased' : 'decreased'} by ${Math.abs(amount)}`);
    //     }
    // };

    const handleRemove = () => {
        startTransition(async () => {
            const result = await deleteFromCartById(item.product_id);
       
            if(result.success){
             toast.success(result.message)
            }else{
             toast.error(result.message)
            }
        })
    };

    return (
        <div className="grid grid-cols-4 gap-3 items-center border-b py-4">
            <div className="col-span-1 flex justify-center">
                <Image
                    src={item.images_url[0]}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover"
                />
            </div>
            <div className="col-span-1">
                <h2 className="text-lg font-medium truncate"></h2>
                <p className="text-gray-500">{item.title} </p>
                <Button 
                disabled={isPending} 
                isLoading={isPending}
                loadingText=" "
                variant='destructive' className="text-white bg-red-500/75 mt-2" onClick={handleRemove}>Remove</Button>
            </div>
            {/* <div className="col-span-1 flex justify-center">
                <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div> */}
            {/* <div className="col-span-1 text-right">
                ${(item.quantity * parseFloat(item.price.slice(1))).toFixed(2)}
            </div> */}
        </div>
    );
}

export default CartItem;
