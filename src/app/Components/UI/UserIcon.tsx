"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { User2Icon } from "lucide-react";
import { useEffect, useState } from "react";

function UserIcon() {
  const { user } = useUser();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return <Skeleton className="h-9 w-9 rounded-full border-2" />;

  return (
    <ClerkLoaded>
      {user ? (
        <UserButton />
      ) : (
        <SignInButton oauthFlow="popup">
          <Button
            variant="outline"
            className="rounded-full bg-main-background text-text-primary"
          >
            <User2Icon strokeWidth={1.5} height={28} width={28} />
          </Button>
        </SignInButton>
      )}
    </ClerkLoaded>
  );
}

export default UserIcon;
