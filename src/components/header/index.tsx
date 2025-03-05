import s from "./index.module.css";
import { Tabs, TabsProps } from "antd";

export const Header = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Главная",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Мои Желания",
    },
    {
      key: "3",
      label: "Мои Идеи",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Друзья",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className={s.container}>
      <Tabs
        defaultActiveKey="1"
        items={items}
        className={s.tabs}
        size="large"
      />
    </div>
  );
};
