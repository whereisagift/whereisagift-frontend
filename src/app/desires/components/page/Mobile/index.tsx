"use client";

import { FolderIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/ui";
import { cn } from "@/utils";

import { DesireCards } from "../../DesireCards";
import { Folders } from "../../Folders";

export const Mobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickFoldersButton = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      className={cn(
        "mt-[4vw]",
        "block md:hidden", // показываем только на мобильных
      )}
    >
      <div className="fixed bottom-0 z-50 w-full h-[var(--secondary-header-size)] px-[2vw] flex justify-between items-center bg-white">
        <Button className="rounded-full p-2" variant="default" size="icon">
          <PlusIcon className="w-6 h-6" />
          <span className="sr-only">Добавить желание</span>
        </Button>

        <Button
          variant="default"
          onClick={handleClickFoldersButton}
          className="flex items-center gap-2"
        >
          <FolderIcon className="w-5 h-5" />
          Мои папки
        </Button>
      </div>

      {isMenuOpen && <Folders />}
      <DesireCards />
    </div>
  );
};
