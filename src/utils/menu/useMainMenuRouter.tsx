import { type MenuProps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type MainMenuRouterType = () => {
  pathname: string;
  items: ItemsType;
};
export type ItemsType = Required<MenuProps>["items"][number][];

const itemsMainMenu: ItemsType = [
  {
    key: "/",
    label: <Link href="/">Главная</Link>,
  },
  {
    key: "/desires",
    label: <a href="/desires">Мои Желания</a>,
  },
  {
    key: "/friends",
    label: <a href="/friends">Друзья</a>,
  },
];

export const useMainMenuRouter: MainMenuRouterType = () => {
  const pathname = usePathname();

  return { pathname, items: itemsMainMenu };
};
