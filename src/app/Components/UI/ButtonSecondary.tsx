import { Button } from "@/components/ui/button";

function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return (
    <Button className="bg-main-background border-text-primary border-1 md:border-2 text-text-primary hover:text-main-background text-sm font-normal w-[180px] md:w-[246px]">
      {children}
    </Button>
  );
}

export default ButtonSecondary;
