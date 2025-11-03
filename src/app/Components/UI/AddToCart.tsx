"use client";

import { Button } from "@/components/ui/button";
import ButtonPrimary from "./ButtonPrimary";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "@/app/Utils/interfaces";
import { useCartStore } from "@/app/Utils/store";

function AddToCart({ data }: { data: Product }) {
  // this prevents hydration error
  const [isClient, setIsClient] = useState(false);
  const { addItem, removeItem, getItemCount } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  const itemCount = getItemCount(data._id);

  return (
    <>
      <ButtonPrimary>Add to Cart</ButtonPrimary>

      {/* increment buttons */}
      <div className="flex bg-main-background items-center gap-3 rounded-md border-1 border-accent shadow-sm">
        <Button
          variant="outline"
          className="border-0 shadow-none"
          onClick={() => removeItem(data._id)}
          disabled={itemCount === 0 || false}
        >
          <Minus />
        </Button>
        <p>{itemCount}</p>
        <Button variant="outline" className="border-0 shadow-none" onClick={() => addItem(data)}>
          <Plus />
        </Button>
      </div>
    </>
  );
}

export default AddToCart;
