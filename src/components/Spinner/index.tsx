import { type FC } from "react";

import { cn } from "@/utils"; // если нет — просто убери

type SpinnerProps = {
  size?: number; // в пикселях
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({ size = 24, className }) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-t-transparent",
        className,
      )}
      style={{
        width: size,
        height: size,
        borderColor: "#6F47D7", // основной цвет
        borderTopColor: "transparent", // прозрачный верх
      }}
    />
  );
};
