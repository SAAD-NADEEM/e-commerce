"use client"

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

function FiltersForm() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const price = searchParams.get("m_price");
  const brands = searchParams.getAll("brand");
  const categories = searchParams.getAll("cate");
  // const pageParam = searchParams.getAll("page");
  const q = searchParams.get("q") || "";

  const defaultAccordion = [];
  if (brands.length > 0) defaultAccordion.push("brands");
  if (categories.length > 0) defaultAccordion.push("cate");

  const handleReset = () => {
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <form action="/search" className="space-y-3">
      <input type="hidden" name="q" value={q} />
      {/* <input type="hidden" name="page" value={pageParam || 1} /> */}
      <PriceRadio defaultValue={price || undefined} />

      {/* Accordion */}
      <Accordion type="multiple" defaultValue={defaultAccordion}>
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
      <ButtonSecondary type="button" onClick={handleReset}>
        Reset
      </ButtonSecondary>
    </form>
  );
}

export default FiltersForm;
