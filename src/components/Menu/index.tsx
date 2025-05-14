"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { buttonVariants } from "@/ui";
import { cn, useMainMenuRouter } from "@/utils";

export const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, items } = useMainMenuRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className={cn(
          "absolute top-1/2 left-4 -translate-y-1/2",
          "flex flex-col justify-center items-center",
          "w-[30px] h-[36px]",
          "md:invisible",
          "relative cursor-pointer group focus:outline-none ",
        )}
        onClick={toggleMenu}
        aria-label="Открыть главное меню"
      >
        <span
          className={cn(
            "block w-full h-[1px] bg-black transition-all duration-300 origin-center",
            isMenuOpen && "rotate-45 translate-y-[8.5px]",
          )}
        />
        <span
          className={cn(
            "block w-full h-[1px] bg-black transition-all duration-300 origin-center my-2",
            isMenuOpen && "scale-0 opacity-0",
          )}
        />
        <span
          className={cn(
            "block w-full h-[1px] bg-black transition-all duration-300 origin-center",
            isMenuOpen && "-rotate-45 -translate-y-[8.5px]",
          )}
        />
      </button>
      <nav
        tabIndex={0}
        className={cn(
          "relative w-full md:flex justify-center  z-39 transition-all duration-300",
          "not-md:top-[100%] not-md:absolute not-md:overflow-hidden not-md:bg-white not-md:flex not-md:flex-col not-md:justify-start",
          isMenuOpen ? "h-[calc(100vh-100%)]" : "h-0",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              buttonVariants({ variant: "link" }),
              pathname === item.href && "text-primary",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};
