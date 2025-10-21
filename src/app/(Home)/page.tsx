import Banner from "../Components/Home/Banner";
import BestSellers from "../Components/Home/BestSellers";
import FeaturedProductWrapper from "../Components/Home/FeaturedProductWrapper";
import NewArrivals from "../Components/Home/NewArrivals";

function page() {
  return (
    <main className="ctn-width-base mx-auto overflow-x-hidden space-y-10 md:space-y-20 flex-1">
      <Banner />
      <NewArrivals />
      <BestSellers />
      <FeaturedProductWrapper />
    </main>
  );
}

export default page;
