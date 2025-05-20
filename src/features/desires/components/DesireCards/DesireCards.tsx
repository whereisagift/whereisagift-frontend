import { cn } from "@/utils";

import * as mock from "mock.json";

import { DesireCard } from "../DesireCard";

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

export const DesireCards = () => {
  const desires: Desire[] = mock.desires;

  return (
    <div
      className={cn(
        "p-4 md:pt-0 px-4 w-full grid gap-4 sm:gap-6 md:gap-8",
        "md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]",
        "grid-cols-[repeat(auto-fill,minmax(130px,1fr))]",
      )}
    >
      {desires.map((desire, index) => (
        <DesireCard key={`${desire.url}${index}`} desire={desire} likeable />
      ))}
    </div>
  );
};
