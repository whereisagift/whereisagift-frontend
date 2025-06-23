import { useState } from "react";

import { createContextHOC } from "@/lib/contexts";

const useEditMode = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedDesireIds, setSelectedDesireIds] = useState<number[]>([]);

  const addDesireId = (id: number) => {
    setSelectedDesireIds((prev) => [...prev, id]);
  };

  const removeDesireId = (id: number) => {
    setSelectedDesireIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  return {
    isEditMode,
    setIsEditMode,
    selectedDesireIds,
    addDesireId,
    removeDesireId,
  };
};

export const [withEditMode, useEditModeContext] = createContextHOC(
  useEditMode,
  {
    isEditMode: false,
    setIsEditMode: () => {},
    selectedDesireIds: [],
    addDesireId: () => {},
    removeDesireId: () => {},
  },
);
