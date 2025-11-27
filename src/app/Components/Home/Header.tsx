
import { SearchIcon } from "lucide-react";
import BrandLogo from "../UI/BrandLogo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CartComponent from "./CartComponent";
import UserIcon from "../UI/UserIcon";

function Header() {

  


  return (
    <header className="bg-main-background sticky top-0 z-50 border-b-1">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] p-3 md:p-4 justify-between items-center">
          {/* ---------- Logo area ----------  */}
          <BrandLogo />

          {/* ---------- Cart Logo ----------  */}
          <form
            action={"/search"}
            className="w-full mt-3 md:mt-0 md:w-1/2 order-3 md:order-none mx-auto col-span-2 md:col-span-1 flex items-center gap-3 border-1 pr-2 rounded-md border-text-secondary"
          >
            <Input
              type="text"
              name="q"
              required
              placeholder="Search Product Name"
              className="shadow-none border-none text-main-primary focus-visible:ring-0"
            />
            <Button
              variant={"ghost"}
              type="submit"
              className="hover:bg-main-background"
            >
              <SearchIcon strokeWidth={1} />
            </Button>
          </form>
          <div className="flex gap-4 items-center pr-1">
            <UserIcon />           

            <CartComponent />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
