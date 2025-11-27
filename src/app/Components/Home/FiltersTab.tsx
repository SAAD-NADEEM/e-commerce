import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FiltersForm from "../UI/FiltersForm";


function FiltersTab({ q }: { q: string }) {
  return (
    <ButtonGroup className="w-full shadow-s rounded-md lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="bg-main-background w-1/2 active:bg-main-background/10 duration-100"
          >
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-4">
          <SheetHeader>
            <SheetTitle className="text-text-primary font-bold text-3xl tracking-tight">
              Filters
            </SheetTitle>
          </SheetHeader>
          <Separator className="pt-0" />
         <FiltersForm />
        </SheetContent>
      </Sheet>
      <Button
        variant="outline"
        className="bg-main-background w-1/2 active:bg-main-background/10 duration-100"
      >
        Sort
      </Button>
    </ButtonGroup>
  );
}

export default FiltersTab;
