import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

function ButtonPrimary(Props: ComponentProps<typeof Button>) {
  return (
    <Button {...Props} className="bg-main-primary text-sm font-normal w-[180px] md:w-[246px] active:scale-95 active:bg-main-primary/80 shadow-sm">
      {Props.children}
    </Button>
  );
}

export default ButtonPrimary;
