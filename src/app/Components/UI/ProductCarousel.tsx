import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

function ProductCarousel() {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full py-3 md:py-6 md:px-0 pl-2"
    >
      <CarouselContent>
        {temp.map((t, i) => (
          <CarouselItem key={i} className="basis-[70%] sm:basis-[45%] md:basis-[25%]">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-main-secondary border-none text-main-background"/>
      <CarouselNext className="bg-main-secondary border-none text-main-background"/>
    </Carousel>
  );
}

export default ProductCarousel;
