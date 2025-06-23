import { FC } from "react";

import { type Item, type Items } from "@/components/types";
import { Button } from "@/ui";
import { cn } from "@/utils";

type MenuProps = {
  collapsed?: boolean;
  items: Items;
  className?: string;
  itemClick: (item: Item) => void;
  selectedItem: Item;
};

export const Menu: FC<MenuProps> = ({
  collapsed,
  items,
  itemClick,
  selectedItem,
}) => {
  const handleClick = (item: Item) => {
    itemClick(item);
  };

  return (
    <div
      className={cn(
        "rounded-lg",
        collapsed ? "w-full" : "w-0 overflow-hidden",
        "transition-all duration-300",
        "flex flex-col gap-2",
        "bg-white",
        "md:border md:border-border",
        "md:w-full",
        "p-2 md:p-1",
        "w-fit",
        "min-w-[150px]",
        "max-h-[calc(100vh-300px)]",
        "overflow-hidden hover:overflow-y-auto",
        "scrollbar-superlight", // <-- вот он
      )}
    >
      {items.map((item: Item) => (
        <Button
          key={item.key}
          variant={item.key === selectedItem?.key ? "default" : "ghost"}
          size="sm"
          justify="start"
          onClick={() => handleClick(item)}
          className="shrink-0"
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};
