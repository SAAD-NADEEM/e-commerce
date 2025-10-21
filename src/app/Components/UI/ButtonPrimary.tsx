import { Button } from "@/components/ui/button";

function ButtonPrimary({children}: {children: React.ReactNode}) {
  return (
    <Button className="bg-main-primary text-sm font-normal w-[180px] md:w-[246px] active:scale-95 active:bg-main-primary/80 shadow-sm">
      {children}
    </Button>
  );
}

export default ButtonPrimary;
