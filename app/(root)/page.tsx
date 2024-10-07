// src/pages/index.tsx
import HorizontalScrollfirst from "@/components/shared/HorizontalScroll";
import FilteredProductList from '@/components/shared/products/ProductFilter';
import { getHotAndNewProduct, getTopSellingProduct } from "@/lib/getRoutes/product";
import { TProductList } from "@/types/product";

export default async function Home() {
    const filteredTopSellingProducts: TProductList = await getTopSellingProduct();
    const filteredHotNewProducts: TProductList = await getHotAndNewProduct();

    // console.log("data in getTopSellingProduct>>>>>>>>", filteredTopSellingProducts)


    return (
        <main>
            <div className="bg-secondary text-white min-h-screen">
                <br />
                <br />
                <div className="transition-all duration-500 ease-in-out">
                    <HorizontalScrollfirst />
                    <FilteredProductList filteredHotNewProducts={filteredTopSellingProducts}  filteredTopSellingProducts={filteredHotNewProducts}/>
                </div>
            </div>
        </main>
    );
}
