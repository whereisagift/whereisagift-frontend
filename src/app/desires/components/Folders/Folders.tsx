import { FC } from "react";

import { cn } from "@/utils";

type FoldersProps = {
  collapsed?: boolean;
};

const items = [
  { key: "5352552", label: "Все" },
  { key: "53525452", label: "ДР" },
  { key: "3535644", label: "Свадьба" },
  { key: "654777", label: "Мои Идеи" },
];

export const Folders: FC<FoldersProps> = ({ collapsed }) => {
  return (
    <div
      className={cn(
        "rounded-lg",
        collapsed ? "w-0 overflow-hidden" : "w-full",
        "transition-all duration-300",
        "flex flex-col gap-2",
        "p-2",
        "bg-white",
        "border border-border",
        "md:w-full not-md:max-w-max", // Desktop
        "fixed md:static bottom-[calc(2vw+var(--secondary-header-size))] right-[2vw] z-50 p-4", // Mobile
      )}
    >
      {items.map((item) => (
        <button
          key={item.key}
          className="text-left text-sm font-medium px-4 py-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
