import { MenuProps, Menu } from "antd";
import s from "./index.module.css";
import * as mock from "mock.json";

type MenuItem = Required<MenuProps>["items"][number];

export const Folders = () => {
  const folders = mock.folders;

  const items = [
    {
      key: "/",
      label: "ДР",
    },
    {
      key: "/desires",
      label: "Свадьба",
    },
    {
      key: "/ideas",
      label: "Мои Идеи",
    },
  ] as const satisfies Required<MenuProps>["items"][number][];

  return (
    <Menu
      className={s.menu}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
