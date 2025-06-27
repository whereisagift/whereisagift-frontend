import { useMemo } from "react";

import { useCurrentFolderContext } from "@/features/desires";
import { TypographyH4 } from "@/ui";
import { cn } from "@/utils";

import { DesireCard } from "../DesireCard";

export type Booking = {
  reservist: {
    id: string;
    nickname: string;
  };
  date: string;
};

export const DesireCards = () => {
  const { currentFolder } = useCurrentFolderContext();

  const desires = useMemo(() => {
    return currentFolder?.desires;
  }, [currentFolder?.desires]);

  return (
    <div
      className={cn(
        "w-full grid gap-4 sm:gap-6 md:gap-8",
        "md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]",
        "grid-cols-[repeat(auto-fill,minmax(130px,1fr))]",
        desires?.length || "flex",
      )}
    >
      {desires?.length ? (
        desires.map((desire, index) => (
          <DesireCard key={desire.id + index} desire={desire} likeable />
        ))
      ) : (
        <TypographyH4>У вас пока нет желаний</TypographyH4>
      )}
    </div>
  );
};
