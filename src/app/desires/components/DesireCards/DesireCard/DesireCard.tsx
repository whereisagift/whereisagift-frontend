import { FC } from "react";

import { Card } from "@/components/Card";
import { cn } from "@/utils";

import desireDefaultImg from "assets/desireDefaultImg.png";

import { DesireButton } from "../DesireButton";
import { Desire } from "../DesireCards";

type DesireCardProps = {
  desire: Desire;
  likeable?: boolean;
};

export const DesireCard: FC<DesireCardProps> = ({ desire, likeable }) => {
  return (
    <Card
      likeable={likeable}
      image={
        <img
          alt="desire"
          src={desire?.pictureUrl ?? desireDefaultImg.src}
          className="w-full h-full object-cover"
        />
      }
      content={
        <div className="flex flex-col justify-between h-full">
          <p
            className={cn(
              "mt-2 overflow-hidden text-sm font-medium",
              "line-clamp-2",
              !desire.price && "line-clamp-3", // если нет цены, больше строк
            )}
          >
            {desire.name}
          </p>
          {desire.price && (
            <p className="mt-2 text-sm font-semibold">{desire.price} Р.</p>
          )}
        </div>
      }
      button={<DesireButton desire={desire} />}
    />
  );
};
