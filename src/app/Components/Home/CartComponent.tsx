"use client";

import { ExtractedInfo, useCartStore } from "@/app/Utils/store";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ShoppingCartIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddToCart from "../UI/AddToCart";
import { isArray } from "sanity";
import ButtonSecondary from "../UI/ButtonSecondary";
import { ScrollArea } from "@/components/ui/scroll-area";

function CartProductCard({ data }: { data: ExtractedInfo }) {
  // console.log("this is the data in cartcard: ", data.image)
  return (
    <div className="flex p-4 items-center md:items-start gap-3 bg-main-foreground">
      <div className="border-2 border-border w-20 h-20 aspect-square relative">
        <Image
          src={data.image}
          alt="product image"
          fill
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <h3 className="text-text-primary line-clamp-2">{data.name}</h3>
          <p className="text-text-secondary font-semibold">Rs {data.price}</p>
        </div>
        <div className="md:w-[114px] flex md:flex-col items-center justify-between">
          <AddToCart data={data} controls="only" />
          <Button variant="ghost" size="icon-sm" className="md:self-end"><Trash2Icon className="stroke-red-700" /></Button>
        </div>
      </div>
    </div>
  );
}

function CartComponent() {
  const [isClient, setIsClient] = useState(false);
  const { getGroupedItems } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button
        variant="outline"
        disabled
        className="rounded-full bg-main-background"
      >
        <ShoppingCartIcon strokeWidth={1.5} height={28} width={28} />
      </Button>
    );
  }

  const itemsArray = getGroupedItems();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-main-background text-text-primary"
        >
          <ShoppingCartIcon strokeWidth={1.5} height={28} width={28} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-main-background w-fit mx-auto">
        <div className="w-full max-w-lg mx-auto ">
          <DrawerHeader className="bg-main-background">
            <DrawerTitle className="font-bold text-3xl">CART</DrawerTitle>
          </DrawerHeader>
          <Separator />

          <ScrollArea className="h-[336px]">
            {itemsArray.map((item, _) => (
              <React.Fragment key={item.product._id}>
                <CartProductCard data={item.product} />
                <Separator />
              </React.Fragment>
            ))}
          </ScrollArea>
          <DrawerFooter className="bg-main-background border-t-1">
            <ButtonSecondary>Proceed to Checkout</ButtonSecondary>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default CartComponent;
