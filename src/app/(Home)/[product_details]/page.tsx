import NewArrivals from "@/app/Components/Home/NewArrivals";
import ProductDetailsCard from "@/app/Components/Home/ProductDetailsCard";
import { product_details } from "@/app/Utils/fetch_products";



async function page({
  params,
}: {
  params: Promise<{ product_details: string }>;
}) {

   const { product_details: productId } = await params;
  const data = await product_details(productId);

  return (
    <main className="ctn-width-base mx-auto overflow-x-hidden space-y-10 md:space-y-20 flex-1">
      <ProductDetailsCard data={data} />
      <NewArrivals />
    </main>
  );
}

export default page;
