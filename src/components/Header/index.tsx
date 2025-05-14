"use client";

import { Menu } from "@/components/Menu";
import { TelegramButton, type TelegramUser } from "@/components/TelegramButton";

const TELEGRAM_BOT = process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "";

export const Header = () => {
  const handlerLogin = (user: TelegramUser) => {
    console.log(JSON.parse(JSON.stringify(user)));
  };

  return (
    <header
      className="grid md:grid-cols-[0.5fr_3fr_0.5fr] sticky top-0 z-40 w-full bg-white"
      style={{ height: "var(--main-header-size)" }}
    >
      <Menu />
      <TelegramButton
        telegramLogin={TELEGRAM_BOT}
        size="medium"
        onLogin={handlerLogin}
      />
    </header>
  );
};
