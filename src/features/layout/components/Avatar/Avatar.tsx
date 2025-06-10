"use client";

import React from "react";

import { cn } from "@/utils";

export interface AvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative w-6 h-6 rounded-full overflow-hidden ml-2",
        className,
      )}
    >
      <img src={src} alt={alt} className="object-cover" />
    </div>
  );
};
