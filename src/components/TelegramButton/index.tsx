"use client";

import { memo, useEffect, useRef } from "react";

import type { TelegramUser } from "@/types";

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

export const TelegramButton = memo(
  ({ telegramLogin, onLogin, size, radius, showAvatar = true }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const onLoginRef = useRef(onLogin);

    // Обновление ссылки на колбэк
    useEffect(() => {
      onLoginRef.current = onLogin;
    }, [onLogin]);

    useEffect(() => {
      window.onTelegramAuth = (user: TelegramUser) => {
        onLoginRef.current(user);
      };

      // Очистим контейнер перед вставкой скрипта (на случай повторного рендера)
      if (containerRef.current) {
        containerRef.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.setAttribute("data-telegram-login", telegramLogin);
        script.setAttribute("data-size", size);
        script.setAttribute("data-userpic", String(showAvatar));
        script.setAttribute("data-request-access", "write");
        script.setAttribute("data-onauth", "onTelegramAuth(user)");
        if (radius !== undefined) {
          script.setAttribute("data-radius", radius.toString());
        }

        containerRef.current.appendChild(script);
      }

      return () => {
        window.onTelegramAuth = undefined;
      };
    }, [telegramLogin, size, radius, showAvatar]);

    return (
      <div
        ref={containerRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 mr-[2vw]"
      />
    );
  },
);

TelegramButton.displayName = "TelegramButton";
