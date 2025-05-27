"use client";

import {
  FolderIcon,
  FolderPlusIcon,
  GiftIcon,
  MoveLeftIcon,
  MoveRightIcon,
  PlusIcon,
} from "lucide-react";
import { useState } from "react";

import { ButtonToUp } from "@/components/ButtonToUp";
import { type Item, type Items } from "@/components/types";
import { DesireCards } from "@/features/desires";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/ui";
import { cn } from "@/utils";

import { Menu } from "components/Menu";

const items: Items = [
  { key: "5352552", label: "Все" },
  { key: "53525452", label: "ДР" },
  { key: "3535644", label: "Свадьба" },
  { key: "654777", label: "Мои Идеи" },
];

const Desires = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  const handleClickFoldersButton = () => setIsMenuOpen((prev) => !prev);
  const handleClickFolderItem = (item: Item) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col">
      {/* Desktop view */}
      <div className={cn("overflow-visible mt-[4vw]", "hidden md:flex")}>
        <div className="sticky h-full top-[calc(4vw+var(--main-header-size))] max-w-[250px] ml-[2vw] flex flex-col gap-2">
          <Button variant="outline" onClick={toggleCollapsed}>
            {collapsed ? (
              <MoveRightIcon className="h-4 w-4" />
            ) : (
              <>
                <MoveLeftIcon className="h-4 w-4 mr-2" />
                Скрыть панель
              </>
            )}
          </Button>
          <Button variant="outline">
            {collapsed ? (
              <FolderPlusIcon className="h-4 w-4" />
            ) : (
              "Создать новую папку"
            )}
          </Button>
          <Button variant="outline">
            {collapsed ? <GiftIcon className="h-4 w-4" /> : "Добавить желание"}
          </Button>
          <Menu
            collapsed={collapsed}
            items={items}
            className="md:static  p-4"
            itemClick={handleClickFolderItem}
            selectedItem={selectedItem}
          />
        </div>
        <DesireCards />
      </div>

      {/* Mobile view */}
      <div className={cn("mt-[4vw]", "block md:hidden")}>
        <div className="fixed bottom-0 z-50 w-full h-[var(--secondary-header-size)] px-[2vw] flex justify-between items-center bg-white">
          <Button className="rounded-full p-2" variant="default" size="icon">
            <PlusIcon className="w-6 h-6" />
            <span className="sr-only">Добавить желание</span>
          </Button>

          <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                onClick={handleClickFoldersButton}
                className="flex items-center gap-2"
              >
                <FolderIcon className="w-5 h-5" />
                Мои папки
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0" align="end">
              <Menu
                items={items}
                itemClick={handleClickFolderItem}
                selectedItem={selectedItem}
              />
            </PopoverContent>
          </Popover>
        </div>

        <DesireCards />
      </div>
      <ButtonToUp />
    </div>
  );
};

export default Desires;
