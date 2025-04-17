"use client";
import s from "./index.module.css";
import { Menu } from "antd";
import { useMenuRouter } from "@/utils";

type DesktopProps = {};
export const Desktop: React.FC<DesktopProps> = () => {
  const { pathname, handlerClick, items } = useMenuRouter();
  return (
    <Menu
      items={items}
      className={s.menu}
      onClick={handlerClick}
      activeKey={pathname}
      mode="horizontal"
    />
  );
};
