import { usePathname } from "next/navigation";
import { MenuProps } from "antd";

export type MainMenuRouterType = () => {
  pathname: string;
  items: ItemsType;
};
export type ItemsType = Required<MenuProps>["items"][number][];

const itemsMainMenu: ItemsType = [
  {
    key: "/",
    label: <a href="/">Главная</a>,
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
