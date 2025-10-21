import Image from "next/image";
import ButtonSecondary from "./ButtonSecondary";
import { Best_sellers_type } from "@/app/Utils/interfaces";
import Link from "next/link";

function ProductCard({ data }: { data: Best_sellers_type }) {
  return (
    <div className="flex flex-col bg-main-background w-full md:w-full md:max-w-[350] shadow-xl rounded-md overflow-hidden h-[360px] md:h-[460px] md:max-h-[490px]">
      {/* product image */}
      <div className="w-full h-[202px] md:h-[250px] aspect-square relative">
        <Image src={data.image} alt="product image" fill />
      </div>
      <div className="p-3 md:p-4 flex flex-col gap-3 h-full justify-between border-t-1">
        {/* product title */}
        <Link href={`/${data._id}`}>
        <h3 className="text-text-primary text-sm md:text-base font-semibold tracking-wide line-clamp-2">
          {data.name}
        </h3>
        </Link>

        {/* price and total reviews */}
        <footer className="space-y-2">
          <div className="flex items-center justify-between cursor-default">
            <p className="text-text-primary">Rs. {data.price}</p>
            <p className="text-text-secondary text-sm tracking-wide">
              {data.reviewsCount} Reviews
            </p>
          </div>
          <ButtonSecondary>Add To Bag</ButtonSecondary>
        </footer>

        {/* add to cart buttom */}
      </div>
    </div>
  );
}

export default ProductCard;
