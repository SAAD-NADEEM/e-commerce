import { Best_sellers_type } from "@/app/Utils/interfaces";
import ProductCard from "../UI/ProductCard";

function ProductsGrid({data}: {data: Best_sellers_type[]}) {
  // console.log(data, "this is data!!")
  return (
    <div className="w-full  gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product,_)=> (
            <ProductCard key={product._id} data={product}/>
        ))}
    </div>
  );
}

export default ProductsGrid;