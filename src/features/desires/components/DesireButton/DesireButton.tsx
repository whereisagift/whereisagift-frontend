"use client";

import { type FC, useState } from "react";

import { Button } from "@/components/ui/button";

import { ButtonContent } from "./ButtonContent";

export const DesireButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);
  return (
    <Button
      variant="default"
      disabled={false}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log("jghg")}
    >
      <ButtonContent />
    </Button>
  );
};
