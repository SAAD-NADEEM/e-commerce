import Banner from "../Components/Home/Banner";
import BestSellers from "../Components/Home/BestSellers";
import NewArrivals from "../Components/Home/NewArrivals";
import FeaturedProductWrapper from "./FeaturedProductWrapper";

function page() {
  return (
    <main className="ctn-width-base mx-auto overflow-x-hidden space-y-10 md:space-y-20">
      <Banner />
      <NewArrivals />
      <BestSellers />
      <FeaturedProductWrapper />
    </main>
  );
}

export default page;
