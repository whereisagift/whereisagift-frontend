import { Navigation } from "@/features/layout/components/Navigation";

import { ProfileMenu } from "../ProfileMenu";

export const Header = () => {
  return (
    <header
      className="grid grid-cols-[1fr_1fr] md:grid-cols-[1.5fr_3fr_1.5fr] items-start sticky top-0 z-40 w-full bg-white"
      style={{ height: "var(--main-header-size)" }}
    >
      <Navigation />
      <ProfileMenu />
    </header>
  );
};
