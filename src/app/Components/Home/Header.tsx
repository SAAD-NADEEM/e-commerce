"use client";

import { SearchIcon, ShoppingCartIcon, User2Icon } from "lucide-react";
import BrandLogo from "../UI/BrandLogo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function Header() {

  // to prevent hydration error
  const [isClient, setIsClient] = useState(false)
  const { user } = useUser();
  useEffect(() => {
    setIsClient(true)
  },[])
  if(!isClient) return null


  return (
    <header className="bg-main-background">
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
            <ClerkLoaded>
              {user ? (
                <UserButton />
              ) : (
                <SignInButton oauthFlow="popup" >
                  <Button variant="outline" className="rounded-full">
                    <User2Icon strokeWidth={1.5} height={28} width={28} />
                  </Button>
                </SignInButton>
              )}
            </ClerkLoaded>

            <Button variant="outline" className="rounded-full">
              <ShoppingCartIcon strokeWidth={1.5} height={28} width={28} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
