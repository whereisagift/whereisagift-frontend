import React, { useState } from "react";
import s from "./index.module.css";
import classNames from "classnames";
import { useMenuRouter } from "@/utils";
import { Menu } from "antd";

type MobileProps = {};
export const Mobile: React.FC<MobileProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, handlerClick, items } = useMenuRouter();

  const menuOnClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(s.container, { [s.container_active]: isMenuOpen })}
    >
      <div
        className={classNames(s.burger, { [s.active]: isMenuOpen })}
        aria-label="Открыть главное меню"
        onClick={menuOnClick}
      >
        <span></span>
      </div>
      {isMenuOpen && (
        <Menu
          items={items}
          className={s.menu}
          onClick={handlerClick}
          activeKey={pathname}
        />
      )}
    </div>
  );
};
