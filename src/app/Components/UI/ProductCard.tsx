import Image from "next/image";
import ButtonSecondary from "./ButtonSecondary";

function ProductCard() {
  return (
    <div className="bg-main-background w-52 md:w-full md:max-w-[350]">
      <div className="w-full aspect-square relative">
        <Image src="/product1.png" alt="product image" fill />
      </div>
      <div className="p-3 md:p-4 flex flex-col gap-3 ">
        <h3 className="text-text-primary text-sm md:text-base font-semibold tracking-wide">
          All-Around Safe Block Essence Sun SPF45+
        </h3>
        <p className="text-text-secondary text-sm tracking-wide">All Around Safe Block Sun Milk SPF50+/PA+++</p>
        <p className="text-text-primary">32 $</p>
        <ButtonSecondary>Add To Bag</ButtonSecondary>
      </div>
    </div>
  );
}

export default ProductCard;
