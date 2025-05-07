"use client";

import { FolderOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { DesireCards, Folders } from "app/desires/components";
import s from "./index.module.css";

export const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickFoldersButton = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={s.container}>
      <div className={s.container_nav}>
        <Button className={s.button_add} icon={<PlusOutlined size={70} />}>
          Добавить желание
        </Button>
        <Button
          type="primary"
          icon={<FolderOutlined />}
          onClick={handleClickFoldersButton}
        >
          Мои папки
        </Button>
        {isMenuOpen && <Folders />}
      </div>

      <DesireCards display="Mobile" />
    </div>
  );
};
