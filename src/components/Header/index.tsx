"use client";
import s from "./index.module.css";
import { Menu, MenuProps, Tabs, TabsProps } from "antd";
import { usePathname, useRouter } from "next/navigation";

const items = [
  {
    key: "/",
    label: "Главная",
  },
  {
    key: "/desires",
    label: "Мои Желания",
  },
  {
    key: "/ideas",
    label: "Мои Идеи",
  },
] as const satisfies Required<MenuProps>["items"][number][];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlerClick: Required<MenuProps>["onClick"] = (item) => {
    router.push(item.key);
  };
  return (
    <div className={s.container}>
      <Menu
        items={items}
        className={s.tabs}
        onClick={handlerClick}
        activeKey={pathname}
        mode="horizontal"
      />
    </div>
  );
};
