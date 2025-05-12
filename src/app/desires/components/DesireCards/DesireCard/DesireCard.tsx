import cn from "classnames";
import { Card } from "@/components/Card";
import { DesireButton } from "app/desires/components/DesireCards/DesireButton";
import { Desire } from "app/desires/components/DesireCards/DesireCards";
import desireDefaultImg from "assets/desireDefaultImg.png";
import s from "./index.module.css";

type DesireCardProps = {
  desire: Desire;
  likeable?: boolean;
};

export const DesireCard: React.FC<DesireCardProps> = ({ desire, likeable }) => {
  return (
    <Card
      likeable={likeable}
      image={
        <img alt="desire" src={desire?.pictureUrl ?? desireDefaultImg.src} />
      }
      content={
        <div className={s.content_container}>
          <p
            className={cn(s.name, {
              [s.name_without_price]: !desire.price,
            })}
          >
            {desire.name}
          </p>
          {desire.price && <p className={s.price}>{desire.price} Р.</p>}
        </div>
      }
      button={<DesireButton desire={desire} />}
    />
  );
};
