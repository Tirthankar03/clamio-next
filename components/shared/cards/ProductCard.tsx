// src/components/shared/cards/ProductCard.tsx
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/utils/cartSlice';
import LikeBtn from '@/components/shared/LikeBtn';
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  productName: string;
  name: string;
  stars: string;
  price: string;
  imageUrl: string;
}

const ProductCard = ({ id, productName, name, stars, price, imageUrl }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, productName, name, stars, price, imageUrl, quantity: 1 }));
    toast.success('item added to the cart');
  };

  const product = { id, productName, name, stars, price, imageUrl };

  return (
    <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden text-black w-full shadow-lg h-108 flex flex-col justify-between">
      <div className="absolute top-6 right-6">
        <LikeBtn product={product} />
      </div>
      <Link href={`/product/${id}`}>
        <Image
          src={imageUrl}
          alt="product card"
          width={1000}
          height={1000}
          className="cursor-pointer object-cover h-64 w-full p-4 pb-0"
        />
      </Link>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">{productName}</div>
            <div className="text-right">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-600 cursor-pointer bg-slate-100 rounded-full px-3 py-3 mr-2"
                onClick={handleAddToCart}
              />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="bg-yellow-500 rounded-full h-4 w-4"></div>
            <div className="ml-2 text-semibold">
              <Link href="/creator/1" className="text-lg">{name}</Link>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="text-sm">★ {stars}(1k)</div>
          </div>
        </div>
        <div className="text-lg font-bold mt-2">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
