import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import PriceRadio from "../UI/PriceRadio";


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
          <form action="/search" className="space-y-3">
            <input type="hidden" name="q" value={q} />
            <PriceRadio />
          </form>
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
