"use client";

import type React from "react";

import { cn } from "@/utils";

import avatar from "assets/avatar.png";

export interface AvatarProps {
  src?: string | null;
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
      <img src={src ?? avatar.src} alt={alt} className="object-cover" />
    </div>
  );
};
