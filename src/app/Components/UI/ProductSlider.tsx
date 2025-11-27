"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

function ProductSlider({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();


  function handleClick(index: number) {
    if (!api) {
      return;
    }

    
    console.log("index is: ", index);
    api.scrollTo(index);
  }

  return (
    <div className="flex flex-col justify-between w-full md:w-[600px] h-[440px] gap-3 overflow-hidden">
      <div className="md:max-h-[340px]">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {images?.map((image, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="h-[320px] border-1 border-main-primary overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={image}
                    width={200}
                    height={200}
                    className="h-full w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-main-secondary border-none text-main-background" />
          <CarouselNext className="bg-main-secondary border-none text-main-background" />
        </Carousel>
      </div>

      <div className="flex gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => handleClick(i)}>
            <Image
              src={img}
              alt={""}
              width={100}
              height={100}
              className="rounded-md border-1 aspect-square border-main-primary"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
