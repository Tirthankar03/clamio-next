import React from 'react'
import YourOrder from './my-orders/page'
import { getAllOrders } from '@/lib/getRoutes/order'
import { TItem, TOrderList } from '@/types/order'

async function page() {


  return (
    <div>
      <YourOrder/>
    </div>
  )
}

export default page