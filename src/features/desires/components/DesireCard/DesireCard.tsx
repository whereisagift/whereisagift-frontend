import { type CheckedState } from "@radix-ui/react-checkbox";
import { type FC } from "react";

import { Card, type Desire } from "@/components";
import { Checkbox } from "@/ui";
import { cn } from "@/utils";

import desireDefaultImg from "assets/desireDefaultImg.png";

import { useEditModeContext } from "../../contexts";
import { DesireButton } from "../DesireButton";

type DesireCardProps = {
  desire: Desire;
  likeable?: boolean;
};

export const DesireCard: FC<DesireCardProps> = ({ desire, likeable }) => {
  const { isEditMode, addDesireId, removeDesireId } = useEditModeContext();

  const handleClick = (check: CheckedState) => {
    if (check) {
      addDesireId(desire.id);
    } else {
      removeDesireId(desire.id);
    }
  };

  return (
    <Card
      likeable={likeable}
      selectButton={
        isEditMode && (
          <Checkbox onCheckedChange={(check) => handleClick(check)} />
        )
      }
      image={
        <img
          alt="desire"
          src={desire?.img ?? desireDefaultImg.src}
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
            <p className="mt-2 text-sm font-semibold">
              {desire.price.value} {desire.price.currency}
            </p>
          )}
        </div>
      }
      button={<DesireButton desire={desire} />}
    />
  );
};
