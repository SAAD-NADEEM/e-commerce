import FeaturedProduct from "../Components/UI/FeaturedProduct";
import { Fetchdata } from "../Utils/interfaces";

function FeaturedProductWrapper() {
  const fetchdata: Fetchdata = {
    title: "Blossom Glow Kit",
    desc: "Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly.",
    tags:['s','s','s','s','s','s','s','s'],
    img: '/fproduct1.png'
};
const fetchdata1: Fetchdata = {
    title: "Floral Essence Masks Sets",
    desc: "Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine.",
    tags:['s','s','s','s','s','s','s','s'],
    img: '/fproduct2.png'
};

  return (
    <div className="space-y-4">
      <FeaturedProduct fetchdata={fetchdata}/>
      <FeaturedProduct fetchdata={fetchdata1} invert/>
    </div>
  );
}

export default FeaturedProductWrapper;
