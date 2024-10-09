'use client';
import { RootState } from "@/Store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { COUPONS } from "@/constants/data";

function OrderSummary({ totalItems, totalCost }: any) {
    const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
    const isCreatorLogin = useSelector((store: RootState) => store.creator.isCreatorLoggedIn);

    const router = useRouter();

    const [couponCode, setCouponCode] = useState('');
    const [selectedCoupon, setSelectedCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleApplyCoupon = () => {
        const coupon = COUPONS.find(c => c.code === couponCode.toUpperCase() || c.code === selectedCoupon);
        if (coupon) {
            setDiscount(coupon.value);
            toast.success(`Coupon applied! You got ₹${coupon.value} off`);
        } else {
            toast.error('Invalid coupon code');
        }
    };

    const handleClick = () => {
        if (isLoggedIn || isCreatorLogin) {
            toast.success('Checking out');
            router.push('/checkout');
        } else {
            toast.warning('You need to log in first');
            setTimeout(() => {
                router.push('/auth/signin');
            }, 2000);
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
                <span>Items ({totalItems}):</span>
                <span>₹ {totalCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>₹5.00</span>
            </div>
            {discount > 0 && (
                <div className="flex justify-between mb-2 text-green-500">
                    <span>Coupon Discount:</span>
                    <span>-₹ {discount.toFixed(2)}</span>
                </div>
            )}
            <div className="flex mb-4 space-x-4">
                <div className="flex-1">
                    <select
                        value={selectedCoupon}
                        onChange={(e) => setSelectedCoupon(e.target.value)}
                        className="border p-2 rounded w-full text-sm"
                    >
                        <option value="">Select coupon</option>
                        {COUPONS.map((coupon) => (
                            <option key={coupon.code} value={coupon.code}>
                                {coupon.code}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex-1 ml-4">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="border p-2 rounded w-full text-sm"
                    />
                </div>
            </div>
            <div className="flex mb-4">
                <button
                    onClick={handleApplyCoupon}
                    className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-primary-dark transition duration-300"
                >
                    Apply Coupon
                </button>
            </div>
            <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>₹ {(totalCost + 5.00 - discount).toFixed(2)}</span>
            </div>
            <button
                className="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-primary-dark transition duration-300"
                onClick={handleClick}
            >
                Proceed to Checkout
            </button>
        </div>
    );
}

export default OrderSummary;

