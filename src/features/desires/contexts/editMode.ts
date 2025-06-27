import { useState } from "react";

import { createContextHOC } from "@/lib/contexts";

const useEditMode = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedDesireIds, setSelectedDesireIds] = useState<string[]>([]);

  const addDesireId = (id: string) => {
    setSelectedDesireIds((prev) => [...prev, id]);
  };

  const removeDesireId = (id: string) => {
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
