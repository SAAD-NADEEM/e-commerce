import FiltersSidebar from "@/app/Components/Home/FiltersSidebar";
import FiltersTab from "@/app/Components/Home/FiltersTab";
import ProductsGrid from "@/app/Components/Home/ProductsGrid";
import { fetch_search_products } from "@/app/Utils/fetch_products";
import { FileSearch } from "lucide-react";

interface Params {
  q: string;
  m_price: string;
  cate: string[];
}

function NoProductsFound() {
  return (
    <div className="flex flex-col flex-1 bg-main-background rounded-md shadow-sm justify-center items-center">
      <FileSearch />
      <h1 className="text-text-primary font-bold tracking-tighter">No Results Found</h1>
      <p className="text-text-secondary text-sm">No products found. Try adjusting your filters.</p>
    </div>
  );
}

async function Page({ searchParams }: { searchParams: Params }) {
  const { q, m_price, cate } = await searchParams;

  const data = await fetch_search_products(q, m_price, cate);

  return (
    <main className="ctn-width-base mx-auto overflow-x-hidden space-y-10 md:space-y-20 flex-1">
      <div className="p-3 md:p-4 flex flex-col md:flex-row gap-3">
        <FiltersTab q={q} />
        <FiltersSidebar q={q} />
        {data.length ? <ProductsGrid data={data} /> : <NoProductsFound />}
      </div>
    </main>
  );
}

export default Page;
