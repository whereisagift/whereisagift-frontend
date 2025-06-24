import { FolderIcon } from "lucide-react";
import { type FC, useEffect, useMemo, useState } from "react";

import type { Item, Items } from "@/components";
import { Menu } from "@/components";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/ui";

import { useCurrentFolderContext } from "../../contexts";

import { useWishlistsQuery } from "./api";

type FoldersMenuProps = {
  display: "desktop" | "mobile";
  collapsed?: boolean;
};

export const FoldersMenu: FC<FoldersMenuProps> = ({ display, collapsed }) => {
  const { data, loading, error } = useWishlistsQuery();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentFolder, setCurrentFolder } = useCurrentFolderContext();

  console.log(loading, error);

  const items: Items | undefined = useMemo(
    () =>
      data?.wishlists
        ?.map((wishlist) => {
          return {
            key: wishlist.id,
            label: wishlist.name,
            description: wishlist.description || undefined,
          };
        })
        .reverse(),
    [data?.wishlists],
  );

  useEffect(() => {
    if (items) {
      setCurrentFolder(items[0]);
    }
  }, [items, setCurrentFolder]);

  const handleClickFoldersButton = () => setIsMenuOpen((prev) => !prev);

  const handleClickFolderItem = (item: Item) => {
    setIsMenuOpen(false);
    setCurrentFolder(item);
  };

  if (!items) return <div className="text-center">У вас пока нет папок</div>;
  if (!currentFolder) return;
  if (display === "desktop")
    return (
      <>
        <Menu
          collapsed={collapsed}
          items={items}
          className="md:static  p-4"
          itemClick={handleClickFolderItem}
          selectedItem={currentFolder}
        />
      </>
    );
  return (
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
          selectedItem={currentFolder}
        />
        ;
      </PopoverContent>
    </Popover>
  );
};
