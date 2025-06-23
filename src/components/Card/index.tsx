import { FC, ReactNode } from "react";

import { Like } from "../Like";

type CardProps = {
  image: ReactNode;
  content: ReactNode;
  button?: ReactNode;
  likeable?: boolean;
  children?: ReactNode;
  selectButton?: ReactNode;
};

export const Card: FC<CardProps> = ({
  image,
  content,
  likeable,
  button,
  children,
  selectButton,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative">
        {likeable && !selectButton && (
          <div className="absolute top-2 right-2 z-10">
            <Like />
          </div>
        )}
        {selectButton && (
          <div className="absolute top-2 right-2 z-10">{selectButton}</div>
        )}
        <div className="w-full h-[150px] sm:h-[200px]">
          {/* Сюда передаём image */}
          {image}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 px-[1vw] pb-[1vw] h-full">
        {content}
        {button && <div className="w-full">{button}</div>}
      </div>
      {children}
    </div>
  );
};
