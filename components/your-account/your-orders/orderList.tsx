import React from 'react';
import { orders } from '@/constants/data';
import OrderCard from './orderCard';
import { getAllCreators } from '@/lib/getRoutes/creator';
import { TItem, TOrderList } from '@/types/order';
import axios from 'axios';

interface OrderListProps {
    value: string;
    activeTab: string;
}

const OrderList: React.FC<OrderListProps> = async ({ value }) => {

    // const filteredOrders = orders.filter(order => order.type === value);

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/order/getAllOrders`, {withCredentials: true} )
    

    const  data: TOrderList = res.data

    const filteredOrders = data[0].items
  
    if (!Array.isArray(filteredOrders)) {
      return <p>No Orders available.</p>;
    }
    return (
        <main>
            {filteredOrders.map((order, index) => (
                <OrderCard key={index} order={order} activeTab={value} />
            ))}
        </main>
    );
}

export default OrderList;
