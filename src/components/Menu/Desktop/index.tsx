"use client";
import s from "./index.module.css";
import { Menu } from "antd";
import { useMainMenuRouter } from "@/utils";

type DesktopProps = {};
export const Desktop: React.FC<DesktopProps> = () => {
  const { pathname, items } = useMainMenuRouter();
  return (
    <Menu
      items={items}
      className={s.menu}
      activeKey={pathname}
      mode="horizontal"
    />
  );
};
