"use client";

import { GiftIcon, MoveLeftIcon, MoveRightIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { ButtonToUp } from "@/components/ButtonToUp";
import {
  AddDesireModal,
  AddFolderModal,
  DesireCards,
  DesiresTitle,
  FoldersMenu,
  withCurrentFolder,
  withEditMode,
} from "@/features/desires";
import { Button } from "@/ui";
import { cn } from "@/utils";

const Desires = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

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
          <AddFolderModal collapsed={collapsed} />

          <AddDesireModal>
            <Button variant="outline" className="w-full">
              {collapsed ? (
                <>
                  <PlusIcon className="w-4 h-4" />{" "}
                  <GiftIcon className="h-4 w-4" />
                </>
              ) : (
                "Добавить желание"
              )}
            </Button>
          </AddDesireModal>
          <FoldersMenu display="desktop" collapsed={collapsed} />
        </div>
        <div className={cn("p-4 md:pt-0 px-4 w-full")}>
          <DesiresTitle />
          <DesireCards />
        </div>
      </div>

      {/* Mobile view */}
      <div className={cn("mt-[4vw]", "block md:hidden")}>
        <div className="fixed bottom-0 z-50 w-full h-[var(--secondary-header-size)] px-[2vw] flex justify-between items-center bg-white">
          <AddFolderModal collapsed={collapsed} />

          <FoldersMenu display="mobile" />
        </div>
        <div className={cn("p-4 md:pt-0 px-4 w-full")}>
          <DesiresTitle />
          <DesireCards />
        </div>
      </div>
      <ButtonToUp />
    </div>
  );
};

export default withCurrentFolder(withEditMode(Desires));
