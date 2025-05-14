import { Heart } from "lucide-react";
import { FC } from "react";

import { Button } from "@/ui";

import s from "./index.module.css";

type LikeProps = unknown;

export const Like: FC<LikeProps> = () => {
  return (
    <Button variant="link" className={s.heart_icon_button}>
      <Heart className={s.heart_icon} />
    </Button>
  );
};
