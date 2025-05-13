import { FC, ReactNode } from "react";

import { Like } from "../Like";

import s from "./index.module.css";

type CardProps = {
  image: ReactNode;
  content: ReactNode;
  button?: ReactNode;
  likeable?: boolean;
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({
  image,
  content,
  likeable,
  button,
  children,
}) => {
  return (
    <div className={s.card}>
      <div className={s.image_container}>
        {likeable && <Like />}
        <div className={s.image}>{image}</div>
      </div>
      <div className={s.footer_container}>
        {content}
        {button}
      </div>
      {children}
    </div>
  );
};
