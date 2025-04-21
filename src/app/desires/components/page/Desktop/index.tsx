"use client";

import { useState } from "react";
import { Button, Flex } from "antd";
import { DesireCards, Folders } from "app/desires/components";
import s from "./index.module.css";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  FolderAddOutlined,
  GiftOutlined,
} from "@ant-design/icons";

export const Desktop = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Flex className={s.container}>
      <Flex vertical gap={20} className={s.containerLeftNav}>
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? (
            <DoubleRightOutlined />
          ) : (
            <>
              <DoubleLeftOutlined /> Скрыть панель
            </>
          )}
        </Button>
        <Button type="primary">
          {collapsed ? <FolderAddOutlined /> : "Создать новую папку"}
        </Button>
        <Button type="primary">
          {collapsed ? <GiftOutlined /> : "Добавить желание"}
        </Button>
        <Folders collapsed={collapsed} />
      </Flex>
      <DesireCards display="desktop" />
    </Flex>
  );
};
