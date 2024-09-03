'use client'
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderList from '@/components/your-account/your-orders/orderList';
import { FaSearch } from 'react-icons/fa';

export default function YourOrder() {
    const [activeTab, setActiveTab] = useState("orders");

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue);
    };

    return (
        <main className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold mb-8">Your Orders</h1>
                <div className="space-y-4 mb-4">
                    <Tabs defaultValue="orders" className="w-full" onValueChange={handleTabChange}>
                        <TabsList className="flex flex-wrap gap-2 mb-14 border-b-2 border-gray-200 pb-2">
                            <TabsTrigger value="orders" className={`px-4 py-2 font-medium ${activeTab === "orders" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"} focus:outline-none`}>
                                Orders
                            </TabsTrigger>
                            <TabsTrigger value="buy-again" className={`px-4 py-2 font-medium ${activeTab === "buy-again" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"} focus:outline-none`}>
                                Buy again
                            </TabsTrigger>
                            <TabsTrigger value="my-bookings" className={`px-4 py-2 font-medium ${activeTab === "my-bookings" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"} focus:outline-none`}>
                                My Bookings
                            </TabsTrigger>
                            <TabsTrigger value="cancelled" className={`px-4 py-2 font-medium ${activeTab === "cancelled" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"} focus:outline-none`}>
                                Cancelled
                            </TabsTrigger>
                        </TabsList>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <p className="text-sm text-gray-600">18 orders placed in</p>
                            <select className="border border-gray-300 rounded px-2 py-1">
                                <option>2023</option>
                            </select>
                        </div>
                        <div className="flex mb-4 w-full">
                            <input
                                type="text"
                                className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-yellow-500"
                                placeholder="Search all orders"
                            />
                            <button className="hidden sm:flex items-center justify-center bg-yellow-500 text-white px-4 rounded-r">
                                Search Orders
                            </button>
                            <button className="flex sm:hidden items-center justify-center bg-yellow-500 text-white px-4 rounded-r">
                                <FaSearch />
                            </button>
                        </div>
                        <TabsContent value="orders">
                            <OrderList value="orders" activeTab={activeTab} />
                        </TabsContent>
                        <TabsContent value="buy-again">
                            <OrderList value="buy-again" activeTab={activeTab} />
                        </TabsContent>
                        <TabsContent value="my-bookings">
                            <OrderList value="my-bookings" activeTab={activeTab} />
                        </TabsContent>
                        <TabsContent value="cancelled">
                            <OrderList value="cancelled" activeTab={activeTab} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    );
}
