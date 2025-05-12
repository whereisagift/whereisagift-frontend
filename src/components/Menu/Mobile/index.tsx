import { Menu } from "antd";
import classNames from "classnames";
import React, { useState } from "react";
import { useMainMenuRouter } from "@/utils";
import s from "./index.module.css";

type MobileProps = object;
export const Mobile: React.FC<MobileProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, items } = useMainMenuRouter();

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
        <Menu items={items} className={s.menu} activeKey={pathname} />
      )}
    </div>
  );
};
