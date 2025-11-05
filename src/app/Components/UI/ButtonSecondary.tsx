import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

function ButtonSecondary(Props: ComponentProps<typeof Button>) {
  return (
    <Button {...Props} className="bg-main-background border-main-secondary border-1 md:border-2 text-main-secondary hover:bg-main-secondary hover:text-main-background text-sm font-normal w-full active:scale-95 shadow-sm">
      {Props.children}
    </Button>
  );
}

export default ButtonSecondary;
