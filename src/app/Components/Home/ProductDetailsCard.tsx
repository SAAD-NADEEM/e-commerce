import { Product } from "@/app/Utils/interfaces";
import Image from "next/image";
import ButtonPrimary from "../UI/ButtonPrimary";
import { Minus, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductSlider from "../UI/ProductSlider";
import AddToCart from "../UI/AddToCart";
import { Badge } from "@/components/ui/badge";

function ReviewStars() {
  const starsArray = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-0.5">
      {starsArray.map((_, i) => (
        <Star key={i} className="h-4 w-4 text-main-primary" strokeWidth={0.7} />
      ))}
    </div>
  );
}

function ProductDetailsCard({ data }: { data: Product }) {
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto p-3 md:p-4 gap-10 justify-between">
      {/* product carousel */}
      <ProductSlider images={data.image} />

      {/* info area */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3 pt-0">
        {/* header */}
        <header className="space-y-1">
          <h1 className="text-xl md:text-2xl font-extrabold text-text-primary tracking-tighter">
            {data.name}
          </h1>
          <div className="flex items-center gap-2">
            <ReviewStars />
            <p className="text-xs text-text-secondary">
              {data.reviewsCount} Reviews
            </p>
          </div>
          <p className="text-text-primary text-xl md:text-2xl font-semibold">
            Rs. {data.price}
          </p>
        </header>

        {/* main */}
        <main className="flex-1 space-y-3">
          <p className="text-sm text-text-secondary tracking-tight text-justify">
            {data.details}
          </p>
          <Badge className="bg-main-secondary mb-3">{data.brand}</Badge>
        </main>

        {/* footer */}
        <footer className="flex gap-3 items-center">
         <AddToCart data={data}/>
        </footer>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
