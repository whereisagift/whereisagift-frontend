"use client";

import { usePathname } from "next/navigation";

export type MainMenuRouterType = () => {
  pathname: string;
  items: {
    key: string;
    label: string;
    href: string;
  }[];
};

const itemsMainMenu = [
  {
    key: "/",
    label: "Главная",
    href: "/",
  },
  {
    key: "/desires",
    label: "Мои Желания",
    href: "/desires",
  },
  {
    key: "/friends",
    label: "Друзья",
    href: "/friends",
  },
];

export const useMainMenuRouter: MainMenuRouterType = () => {
  const pathname = usePathname();

  return { pathname, items: itemsMainMenu };
};
