import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

function ButtonSecondary(Props: ComponentProps<typeof Button>) {
  return (
    <Button {...Props} className="bg-main-background border-text-primary border-1 md:border-2 text-text-primary hover:text-main-background text-sm font-normal w-full active:scale-95 shadow-sm">
      {Props.children}
    </Button>
  );
}

export default ButtonSecondary;
