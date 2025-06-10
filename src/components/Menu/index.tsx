import { FC } from "react";

import { type Item, type Items } from "@/components/types";
import { Button } from "@/ui";
import { cn } from "@/utils";

type MenuProps = {
  collapsed?: boolean;
  items: Items;
  selectedItem?: Item;
  className?: string;
  itemClick: (item: Item) => void;
};

export const Menu: FC<MenuProps> = ({
  collapsed,
  items,
  selectedItem,
  itemClick,
  className,
}) => {
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
        className,
      )}
    >
      {items.map((item: Item) => (
        <Button
          key={item.key}
          variant={item === selectedItem ? "default" : "ghost"}
          size="sm"
          justify="start"
          onClick={() => itemClick(item)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};
