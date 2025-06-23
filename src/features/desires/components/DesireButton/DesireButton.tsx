"use client";

import { type FC, useState } from "react";

import { Button } from "@/components/ui/button";

import { type Desire } from "../DesireCards";

import { ButtonContent } from "./ButtonContent";

type DesireButtonProps = {
  desire: Desire;
};

export const DesireButton: FC<DesireButtonProps> = ({ desire }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="default"
      disabled={Boolean(desire.booking)}
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log("jghg")}
    >
      <ButtonContent desire={isHovered ? undefined : desire} />
    </Button>
  );
};
