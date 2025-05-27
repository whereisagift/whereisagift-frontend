"use client";

import { useState } from "react";

import { Menu } from "@/components/Menu";
import { TelegramButton } from "@/components/TelegramButton";
import type { Item, Items } from "@/components/types";
import { Avatar } from "@/features/layout/components/Avatar";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/ui";

import { useCurrentUser } from "./hooks";

const TELEGRAM_BOT = process.env.NEXT_PUBLIC_TELEGRAM_BOT ?? "";

const items: Items = [
  { key: "3535644", label: "Настройки" },
  { key: "654777", label: "Выйти" },
];

export const ProfileMenu = () => {
  const [login, { data, loading }] = useCurrentUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  console.log({ selectedItem });

  const handleClickFoldersButton = () => setIsMenuOpen((prev) => !prev);
  const handleClickFolderItem = (item: Item) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
  };

  console.log(data, loading);

  if (loading) return null;

  if (!data) {
    return (
      <TelegramButton
        telegramLogin={TELEGRAM_BOT}
        size="medium"
        onLogin={login}
      />
    );
  }
  return (
    <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          onClick={handleClickFoldersButton}
          className="self-center justify-self-end pr-0 mr-[2vw]"
        >
          {`${data?.me.firstName} ${data?.me.lastName}`}
          <Avatar src={data.me.photoUrl} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0" align="end">
        <Menu items={items} itemClick={handleClickFolderItem} />
      </PopoverContent>
    </Popover>
  );
};
