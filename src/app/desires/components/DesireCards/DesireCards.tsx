import { Flex } from "antd";

import * as mock from "mock.json";

import { DesireCard } from "./DesireCard";
import s from "./index.module.css";

type DesireCardsProps = {
  display: "Mobile" | "Desktop";
};

enum GapMode {
  Mobile = "small",
  Desktop = "large",
}

export type Desire = {
  name: string;
  url: string;
  pictureUrl?: string;
  booking?: Booking;
  orderDate?: string;
  price?: string;
};

export type Booking = {
  reservist: {
    id: string;
    nickname: string;
  };
  date: string;
};

export const DesireCards: React.FC<DesireCardsProps> = ({ display }) => {
  const desires: Desire[] = mock.desires;
  return (
    <Flex
      justify="space-around"
      autoCapitalize="words"
      gap={GapMode[display]}
      wrap
      className={s.cardsContainer}
    >
      {desires.map((desire, index) => (
        <DesireCard key={`${desire.url}${index}`} desire={desire} likeable />
      ))}
    </Flex>
  );
};
