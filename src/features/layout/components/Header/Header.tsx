"use client";
import { Navigation } from "@/features/layout/components/Navigation";
import { useCurrentUser } from "@/features/users";

import { ProfileMenu } from "../ProfileMenu";

export const Header = () => {
  const { user } = useCurrentUser();

  return (
    <header
      className="grid grid-cols-[1fr_1fr] md:grid-cols-[1.5fr_3fr_1.5fr] items-start sticky top-0 z-40 w-full bg-white"
      style={{ height: "var(--main-header-size)" }}
    >
      {user && <Navigation />}
      <ProfileMenu />
    </header>
  );
};
