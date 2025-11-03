import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import { Badge } from "@/components/ui/badge";
import { Fetchdata } from "@/app/Utils/interfaces";


function FeaturedProduct({fetchdata, invert}: {fetchdata: Fetchdata, invert?: boolean}) {
  return (
    <div className={`flex ${invert ? "md:flex-row-reverse":"md:flex-row"} flex-col-reverse mx-2 shadow-accent-foreground items-center gap-3 border-1 border-main-primary overflow-hidden rounded-md`}>
      {/* left section */}
      <div className="flex flex-col gap-3 md:gap-6 w-full md:w-1/2 p-2 md:px-3">
        <h1 className="md:text-4xl text-2xl font-medium tracking-tighter">
          {fetchdata?.name}
        </h1>
        <p className="text-text-secondary tracking-tight w-full md:w-1/2">
            {fetchdata?.details}
        </p>
        <div className="mb-2">
          {fetchdata?.tags.map((tag, i) => (
            <Badge
              key={i}
              className="bg-main-secondary/30 mr-2 pb-1 text-text-secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <ButtonPrimary>Shop Now</ButtonPrimary>
      </div>
      {/* right section */}
      <div className="relative w-full md:w-1/2 h-[220px] md:h-[400px] aspect-square">
        <Image src={fetchdata?.image} alt="featured prodcut image" fill className="object-cover"/>
      </div>
    </div>
  );
}

export default FeaturedProduct;
