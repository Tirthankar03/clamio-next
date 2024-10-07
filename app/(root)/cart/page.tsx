
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import CartItem from '@/components/shared/cart/cartItem';
import OrderSummary from '@/components/shared/cart/orderSummary';
import SimilarProducts from '@/components/shared/Product-Details/SimilarProducts';
import { getAllCart } from '@/lib/getRoutes/cart';
import { TCart, TCartProduct } from '@/types/cart';

export default async function CartPage() {
    

    const userCartDetails = await getAllCart()



    if (userCartDetails.success && userCartDetails.data) {

        const cart: TCart = userCartDetails.data



        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-12">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
                        {cart.products.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                <div className="lg:col-span-2">
                                    {cart.products.map(item => (
                                        <CartItem key={item.product_id} item={item} />
                                    ))}
                                </div>
                                <OrderSummary totalItems={cart.products.length} totalCost={cart.total_amount} />
                            </div>
                        ) : (
                            <p className="text-lg text-gray-500">Your cart is currently empty.</p>
                        )}
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                        {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Products</h2> */}
                        <SimilarProducts />
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-12">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>  
                        <p className="text-lg text-gray-500">Some error occured. Please try again later</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                    {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">Similar Products</h2> */}
                    <SimilarProducts />
                </div>
            </div>
        </div>
        )
    }





}
