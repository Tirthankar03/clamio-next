import { getAllOrders } from "@/action/order";
import YourOrder from "@/components/your-account/your-orders/OrderFinal";





export default async  function CartPage() {


    const data = await getAllOrders()

    return(
        <YourOrder filteredOrders={data} />
    )
}