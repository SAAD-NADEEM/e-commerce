import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonPrimary from "../UI/ButtonPrimary";

function Banner() {
  return (
    <div className="bg-[url('/first_screen.png')] bg-cover bg-center h-[340px] md:h-[400px] w-full flex items-center">

      <div className="w-[200px] md:w-[560px] p-3 md:p-4 flex flex-col gap-3 md:gap-4">

        <h1 className="md:text-4xl text-[20px] leading-tight font-bold">Discover your inner beauty with Blossom Glow Kit</h1>
        <p className="text-text-primary text-sm md:text-2xl font-light md:font-normal md:mb-5">Great gift for yourself and loved ones</p>

        <Link href={"/search?page=1"}>
          <ButtonPrimary>Shop Now</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
