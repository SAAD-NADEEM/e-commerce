import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import BrandLogo from "../UI/BrandLogo";

function LilstOfLinks() {
  return (
    <>
      <li className="flex gap-1">
        <Link href={"/"} className="font-medium md:font-normal leading-4">
          Shop All
        </Link>
      </li>
      <li className="flex gap-1">
        <Link href={"/"} className="font-medium md:font-normal leading-4">
          Shop All
        </Link>
      </li>

      <li className="flex gap-1">
        <Link href={"/"} className="font-medium md:font-normal leading-4">
          Best Sellers
        </Link>
      </li>

      <li className="flex gap-1">
        <Link href={"/"} className="font-medium md:font-normal leading-4">
          Collections
        </Link>
      </li>

      <li className="flex gap-1">
        <Link href={"/"} className="font-medium md:font-normal leading-4">
          About Us
        </Link>
      </li>
    </>
  );
}

function Header() {
  return (
    <header className="bg-main-background">
      <div className="max-w-[1440px] mx-auto flex flex-row p-3 md:p-4 justify-between">


        {/* ---------- Menu Icon ----------  */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-main-background bg-main-primary text-2xl font-medium p-3">
                  Menu
                </SheetTitle>
                <SheetDescription>

                  
                  {/* ---------- menu items ----------  */}
                  <div className="p-3 space-y-3">
                    
                      <li className="flex gap-1">
                        <SearchIcon className="h-4 w-4" />
                        <Link href={"/"} className="font-medium leading-4">
                          Search
                        </Link>
                      </li>

                      <li className="flex gap-1">
                        <User2Icon className="h-4 w-4" />
                        <Link href={"/"} className="font-medium leading-4">
                          Account
                        </Link>
                      </li>

                      <LilstOfLinks />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* ---------- Logo area ----------  */}
        <BrandLogo />


        {/* ---------- Desktop header Nav Links ----------  */}
        <div className="md:flex gap-5 items-center hidden">
          <LilstOfLinks />
        </div>

        {/* ---------- Cart Logo ----------  */}
        <div className="flex gap-4 items-center">
          <SearchIcon strokeWidth={1.5} className="md:flex hidden" />
          <User2Icon strokeWidth={1.5} className="md:flex hidden" />
          <ShoppingCartIcon strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
}

export default Header;
