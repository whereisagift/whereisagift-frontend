"use client";
import { Menu } from "@/components/Menu";
import { TelegramButton, type TelegramUser } from "@/components/TelegramButton";

import s from "./index.module.css";

const TELEGRAM_BOT = process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "";

export const Header = () => {
  const handlerLogin = (user: TelegramUser) => {
    console.log(JSON.parse(JSON.stringify(user)));
  };

  return (
    <div className={s.container}>
      <Menu />

      <TelegramButton
        telegramLogin={TELEGRAM_BOT}
        size="medium"
        onLogin={handlerLogin}
      />
    </div>
  );
};
