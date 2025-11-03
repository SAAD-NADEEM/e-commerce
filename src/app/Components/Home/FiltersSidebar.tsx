"use client";

import PriceRadio from "../UI/PriceRadio";
import BrandFilter from "../UI/BrandFilter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonSecondary from "../UI/ButtonSecondary";
import { useRouter, useSearchParams } from "next/navigation";
import CategoriesFilter from "../UI/CategoriesFilter";

function FiltersSidebar({ q }: { q: string }) {


  const router = useRouter();

  const searchParams = useSearchParams();
  
  const price = searchParams.get("m_price");
  const brands = searchParams.getAll("brand");
  const categories = searchParams.getAll("cate");
  
  const defaultAccordion = [];
  if (brands.length > 0) defaultAccordion.push("brands");
  if (categories.length > 0) defaultAccordion.push("cate");
  
  const handleReset = () => {
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div className="min-w-[200px] h-fit p-3 hidden gap-3 lg:flex flex-col bg-main-background shadow-md rounded-md">
      <header className="text-text-primary text-3xl leading-8 font-bold tracking-tight">
        Filters
      </header>
      <form action="/search" className="space-y-3">
        <input type="hidden" name="q" value={q} />
        <PriceRadio defaultValue={price || undefined} />

        {/* Accordion */}
        <Accordion type="multiple" defaultValue={defaultAccordion} >
          <AccordionItem value="brands">
            <AccordionTrigger>Brands</AccordionTrigger>
            <AccordionContent>
              <BrandFilter defaultValue={brands} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cate">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <CategoriesFilter defaultValue={categories} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ButtonSecondary type="submit">Apply</ButtonSecondary>
        <ButtonSecondary type="button" onClick={handleReset}>Reset</ButtonSecondary>
      </form>
    </div>
  );
}

export default FiltersSidebar;
