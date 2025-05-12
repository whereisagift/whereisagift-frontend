"use client";

import { Button } from "antd";
import { useState } from "react";
import { ButtonContent } from "app/desires/components/DesireCards/DesireButton/ButtonContent";
import { Desire } from "app/desires/components/DesireCards/DesireCards";

import s from "./index.module.css";

type ButtonContentProps = {
  desire: Desire;
};

export const DesireButton: React.FC<ButtonContentProps> = ({ desire }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      type="primary"
      disabled={Boolean(desire.booking)}
      className={s.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonContent desire={isHovered ? undefined : desire} />
    </Button>
  );
};
