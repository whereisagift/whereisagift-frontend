"use client";

import { TelegramButton } from "@/components/TelegramButton";

import { useCurrentUser } from "./hooks";

const TELEGRAM_BOT = process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "";

export const ProfileMenu = () => {
  const [login, { data, loading }] = useCurrentUser();

  console.log(data, loading);
  return (
    !data && (
      <TelegramButton
        telegramLogin={TELEGRAM_BOT}
        size="medium"
        onLogin={login}
      />
    )
  );
};
