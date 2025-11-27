import FiltersForm from "../UI/FiltersForm";



function FiltersSidebar() {

  return (
    <div className="min-w-[200px] h-fit p-3 hidden gap-3 lg:flex flex-col bg-main-background shadow-md rounded-md">
      <header className="text-text-primary text-3xl leading-8 font-bold tracking-tight">
        Filters
      </header>
      <FiltersForm />
    </div>
  );
}

export default FiltersSidebar;
