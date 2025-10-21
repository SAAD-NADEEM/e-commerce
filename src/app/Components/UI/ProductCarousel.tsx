import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Best_sellers_type } from "@/app/Utils/interfaces";

function ProductCarousel({data} :{data: Best_sellers_type[]}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full py-3 md:py-6 md:px-0 pl-2"
    >
      <CarouselContent>
        {data?.map((d, _) => (
          <CarouselItem key={d._id} className="basis-[70%] sm:basis-[45%] md:basis-[20%]">
            <ProductCard data={d}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-main-secondary border-none text-main-background"/>
      <CarouselNext className="bg-main-secondary border-none text-main-background"/>
    </Carousel>
  );
}

export default ProductCarousel;
