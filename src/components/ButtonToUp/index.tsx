import { ArrowUp } from "lucide-react";

import { Button } from "@/ui";

import s from "./index.module.css";

export const ButtonToUp = () => {
  return (
    <Button className={s.button_to_up}>
      <ArrowUp className={s.heart_icon} />
    </Button>
  );
};
