import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import { Badge } from "@/components/ui/badge";
import { Fetchdata } from "@/app/Utils/interfaces";


function FeaturedProduct({fetchdata, invert}: {fetchdata: Fetchdata, invert?: boolean}) {
  return (
    <div className={`flex ${invert ? "md:flex-row-reverse":"md:flex-row"} flex-col-reverse p-2 md:p-0 items-center gap-3`}>
      {/* left section */}
      <div className="flex flex-col gap-3 md:gap-6 w-full md:w-1/2">
        <h1 className="md:text-4xl text-2xl font-medium tracking-tighter">
          {fetchdata.title}
        </h1>
        <p className="text-text-secondary tracking-tight w-full md:w-1/2">
            {fetchdata.desc}
        </p>
        <div className="mb-2">
          {fetchdata.tags.map((_, i) => (
            <Badge
              key={i}
              className="bg-main-secondary/30 mr-2 pb-1 text-text-secondary"
            >
              xytags
            </Badge>
          ))}
        </div>
        <ButtonPrimary>Shop Now</ButtonPrimary>
      </div>
      {/* right section */}
      <div className="relative w-full md:w-1/2 h-[220px] md:h-[400px] aspect-square">
        <Image src={fetchdata.img} alt="featured prodcut image" fill />
      </div>
    </div>
  );
}

export default FeaturedProduct;
