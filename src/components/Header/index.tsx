"use client";
import s from "./index.module.css";
import { Menu, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import {
  TelegramButton,
  type TelegramUser,
} from "@/components/TelegrammButton";

const items = [
  {
    key: "/",
    label: "Главная",
  },
  {
    key: "/desires",
    label: "Мои Желания",
  },
  {
    key: "/ideas",
    label: "Мои Идеи",
  },
] as const satisfies Required<MenuProps>["items"][number][];

const TELEGRAM_BOT = process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlerClick: Required<MenuProps>["onClick"] = (item) => {
    router.push(item.key);
  };

  const handlerLogin = (user: TelegramUser) => {
    console.log(JSON.parse(JSON.stringify(user)));
  };

  return (
    <div className={s.container}>
      <Menu
        items={items}
        className={s.tabs}
        onClick={handlerClick}
        activeKey={pathname}
        mode="horizontal"
      />
      <TelegramButton
        telegramLogin={TELEGRAM_BOT}
        size="medium"
        onLogin={handlerLogin}
      />
    </div>
  );
};
