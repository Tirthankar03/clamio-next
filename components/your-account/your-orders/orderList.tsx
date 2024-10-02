import React from 'react';
import { orders } from '@/constants/data';
import OrderCard from './orderCard';

interface OrderListProps {
    value: string;
    activeTab: string;
}

const OrderList: React.FC<OrderListProps> = ({ value }) => {
    const filteredOrders = orders.filter(order => order.type === value);
    return (
        <main>
            {filteredOrders.map((order, index) => (
                <OrderCard key={index} order={order} activeTab={value} />
            ))}
        </main>
    );
}

export default OrderList;
