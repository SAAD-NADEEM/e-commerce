"use client";

import { Button } from "@/components/ui/button";
import ButtonPrimary from "./ButtonPrimary";
import { Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Product, ProductCardTypes } from "@/app/Utils/interfaces";
import { ExtractedInfo, useCartStore } from "@/app/Utils/store";
import ButtonSecondary from "./ButtonSecondary";
import { Skeleton } from "@/components/ui/skeleton";

function AddToCardSkeleton() {
  return(
    <Skeleton className="w-full h-9" />
  )
}


function AddToCart({
  data,
  controls = "yes",
}: {
  data: Product | ProductCardTypes | ExtractedInfo;
  controls?: "no" | "yes" | "only";
}) {
  // this prevents hydration error
  const [isClient, setIsClient] = useState(false);
  const { addItem, removeItem, getItemCount } = useCartStore();

  // extracting the data because we get data in either two types of interface.
  const extractedInfo = useMemo(() => ({
  _id: data._id,
  name: data.name,
  price: data.price,
  image: Array.isArray(data.image) ? data.image[0] : data.image,
}), [data._id, data.name, data.price, data.image]);

  // console.log("this is the image iam dealing with", extractedInfo.image, typeof extractedInfo.image)

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <AddToCardSkeleton />;
  }

  const itemCount = getItemCount(data._id);
  const isInCart = itemCount > 0;



  function handleAdd() {
    if (!isInCart) {
      addItem(extractedInfo);
    }
  }
  function handleRemove(id: string) {
    if(controls === "only" && itemCount === 1) return
    removeItem(id)
  }

  return (
    <>
      {(controls === "yes" || controls === "no") &&
        (controls === "yes" ? (
          <ButtonPrimary disabled={isInCart} onClick={handleAdd}>
            {isInCart ? "Added In Cart" : "Add to Cart"}
          </ButtonPrimary>
        ) : (
          <ButtonSecondary disabled={isInCart} onClick={handleAdd}>
            {isInCart ? "Added In Cart" : "Add to Cart"}
          </ButtonSecondary>
        ))}

      {/* increment buttons */}
      {(controls === "yes" || controls === "only") && isInCart && (
        <div className="flex bg-main-background items-center gap-3 rounded-md border-1 border-accent shadow-sm">
          <Button
            variant="outline"
            className="border-0 shadow-none"
            onClick={() => handleRemove(data._id)}
            disabled={itemCount === 0 || false}
          >
            <Minus />
          </Button>
          <p>{itemCount}</p>
          <Button
            variant="outline"
            className="border-0 shadow-none"
            onClick={() => addItem(extractedInfo)}
          >
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
}

export default AddToCart;
