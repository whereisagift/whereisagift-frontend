"use client";
import { Menu } from "antd";

import { useMainMenuRouter } from "@/utils";

import s from "./index.module.css";

type DesktopProps = object;
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
