import { MenuProps, Menu } from "antd";
import s from "./index.module.css";

type MenuItem = Required<MenuProps>["items"][number];
type FoldersProps = {
  collapsed?: boolean;
};

const items: MenuItem[] = [
  {
    key: "5352552",
    label: "Все",
  },
  {
    key: "53525452",
    label: "ДР",
  },
  {
    key: "3535644",
    label: "Свадьба",
  },
  {
    key: "654777",
    label: "Мои Идеи",
  },
];

export const Folders: React.FC<FoldersProps> = ({ collapsed }) => {
  return (
    <Menu
      className={s.menu}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      inlineCollapsed={collapsed}
      multiple
    />
  );
};
