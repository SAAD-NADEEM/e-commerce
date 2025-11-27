"use client";

import { ProductCardTypes, ProductQueryResult } from "@/app/Utils/interfaces";
import ProductCard from "../UI/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function PaginationBar({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams);
    console.log("inside the pagination component: page: ", pageNumber)
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            disabled={currentPage <= 1}
            variant={"outline"}
            onClick={() => router.push(createURL(currentPage - 1))}
          >
            <ArrowLeft />
          </Button>
        </PaginationItem>

        {currentPage > 1 && <PaginationEllipsis />}

        {[currentPage, currentPage + 1].map(
          (PageNum) =>
            PageNum <= totalPages && (
              <PaginationItem key={PageNum}>
                <PaginationLink
                  href={createURL(PageNum)}
                  className={`cursor-pointer ${currentPage === PageNum && "pointer-events-none"}`}
                  isActive={currentPage === PageNum}
                >
                  {PageNum}
                </PaginationLink>
              </PaginationItem>
            )
        )}
        {currentPage + 1 < totalPages && <PaginationEllipsis />}

        <PaginationItem>
          <Button
            disabled={currentPage >= totalPages}
            variant={"outline"}
            onClick={() => router.push(createURL(currentPage + 1))}
          >
            <ArrowRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function ProductsGrid({ data }: { data: ProductQueryResult }) {
  console.log(data, "this is data!!");
  return (
    <div className="w-full space-y-4">
      <div className="w-full  gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.products.map((product, _) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
      <PaginationBar totalPages={data.total} />
    </div>
  );
}

export default ProductsGrid;
