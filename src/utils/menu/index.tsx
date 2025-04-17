import { usePathname, useRouter } from "next/navigation";
import { MenuProps } from "antd";

export type MenuRouterType = () => {
  pathname: string;
  handlerClick: Required<MenuProps>["onClick"];
  items: ItemsType;
};
export type ItemsType = Required<MenuProps>["items"][number][];

const items: ItemsType = [
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

export const useMenuRouter: MenuRouterType = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlerClick: Required<MenuProps>["onClick"] = (item) => {
    router.push(item.key);
  };

  return { pathname, handlerClick, items };
};
