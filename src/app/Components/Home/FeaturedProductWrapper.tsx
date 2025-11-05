import FeaturedProduct from "../UI/FeaturedProduct";
import { single_product } from "../../Utils/fetch_products";

async function FeaturedProductWrapper() {
  const data = await single_product("uc99PwzXN4XCbnLyntc68J", 1)
  const data1 = await single_product("uc99PwzXN4XCbnLyntcD0v")

  return (
    <div className="space-y-4">
      <FeaturedProduct fetchdata={data} />
      <FeaturedProduct fetchdata={data1} invert />
    </div>
  );
}

export default FeaturedProductWrapper;
