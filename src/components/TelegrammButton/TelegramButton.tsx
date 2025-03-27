import Script from "next/script";
import { useEffect, useRef } from "react";

export interface TelegramUser {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
  auth_date: string;
  hash: string;
}

interface Props {
  telegramLogin: string;
  onLogin: (user: TelegramUser) => void;
  radius?: number;
  size: "large" | "medium" | "small";
  showAvatar?: boolean;
}

declare global {
  interface Window {
    onTelegramAuth?: (user: TelegramUser) => void;
  }
}

export const TelegramButton = ({
  telegramLogin,
  onLogin,
  size,
  radius,
  showAvatar = true,
}: Props) => {
  const onLoginRef = useRef(onLogin);

  useEffect(() => {
    window.onTelegramAuth = onLoginRef.current;

    return () => {
      window.onTelegramAuth = undefined;
    };
  }, []);

  return (
    <Script
      strategy="lazyOnload"
      src="https://telegram.org/js/telegram-widget.js?22"
      data-telegram-login={telegramLogin}
      data-size={size}
      data-radius={radius}
      data-userpic={String(showAvatar)}
      data-onauth="onTelegramAuth(user)"
      data-request-access="write"
    />
  );
};
