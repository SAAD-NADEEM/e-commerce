import Image from "next/image";
import ButtonSecondary from "./ButtonSecondary";
import { ProductCardTypes } from "@/app/Utils/interfaces";
import Link from "next/link";

function ProductCard({ data }: { data: ProductCardTypes }) {
  console.log(data, "this is data bhauiaya")
  return (
    <div className="flex flex-col h-full bg-main-background w-full md:w-full md:max-w-[350] shadow-md rounded-md overflow-hidden">
      {/* product image */}
      <div className="w-full h-[202px] md:h-[250px] aspect-square relative">
        <Image src={data.image} alt="product image" fill/>
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1 gap-3 h-full justify-between border-t-1">
        {/* product title */}
        <div className="space-y-3">
          <Link href={`/${data._id}`}>
            <h3 className="text-text-primary text-sm md:text-base font-semibold tracking-wide line-clamp-1 min-h-[1lh] md:min-h-[2lh] md:line-clamp-2">
              {data.name}
            </h3>
          </Link>
          <p className="line-clamp-2 tracking-tighter text-sm text-text-secondary">
            {data.details}
          </p>
        </div>

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
      </div>
    </div>
  );
}

export default ProductCard;
