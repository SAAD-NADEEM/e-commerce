import { new_arrivals } from "@/app/Utils/fetch_products";
import CateHeading from "../UI/CateHeading";
import ProductCarousel from "../UI/ProductCarousel";

async function NewArrivals() {

  const data = await new_arrivals();


  return (
    <div className="p-3 md:p-4">
      <CateHeading>New Arrivals</CateHeading>
      <ProductCarousel data={data}/>
    </div>
  );
}

export default NewArrivals;
