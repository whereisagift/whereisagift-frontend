"use client";

import {
  FolderPlusIcon,
  GiftIcon,
  MoveLeftIcon,
  MoveRightIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/ui";
import { cn } from "@/utils";

import { DesireCards } from "../../DesireCards";
import { Folders } from "../../Folders";

export const Desktop = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "overflow-visible mt-[4vw]",
        "hidden md:flex", // скрываем на мобильных
      )}
    >
      <div className="sticky top-[calc(4vw+var(--main-header-size))] max-w-[250px] ml-[2vw] flex flex-col gap-2">
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
        <Folders collapsed={collapsed} />
      </div>

      <DesireCards />
    </div>
  );
};
