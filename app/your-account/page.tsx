import React from 'react'
import YourOrder from './my-orders/page'
import { getAllOrders } from '@/lib/getRoutes/order'
import { TItem, TOrderList } from '@/types/order'

async function page() {
  const filteredOrders: TItem[]  = await getAllOrders()

  return (
    <div>
      <YourOrder filteredOrders={filteredOrders}/>
    </div>
  )
}

export default page