import { best_sellers } from "@/app/Utils/fetch_products";
import CateHeading from "../UI/CateHeading";
import ProductCarousel from "../UI/ProductCarousel";

async function BestSellers() {

  const data = await best_sellers();

  return (
    <div>
      <CateHeading>Best Sellers</CateHeading>
      <ProductCarousel data={data}/>
    </div>
  );
}

export default BestSellers;
