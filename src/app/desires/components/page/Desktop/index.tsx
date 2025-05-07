"use client";

import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  FolderAddOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import s from "./index.module.css";
import { DesireCards, Folders } from "../..";

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
      <DesireCards display="Desktop" />
    </Flex>
  );
};
