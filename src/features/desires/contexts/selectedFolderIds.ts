import { useState } from "react";

import { createContextHOC } from "@/lib/contexts";

const useSelectedFolderIds = () => {
  const [selectedFolderIds, setSelectedFolderIds] = useState<string[]>([]);

  const addFolderId = (id: string) => {
    setSelectedFolderIds((prev) => [...prev, id]);
  };

  const removeFolderId = (id: string) => {
    setSelectedFolderIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  return {
    selectedFolderIds,
    addFolderId,
    removeFolderId,
  };
};

export const [withSelectedFolderIds, useSelectedFolderIdsContext] =
  createContextHOC(useSelectedFolderIds, {
    selectedFolderIds: [],
    addFolderId: () => {},
    removeFolderId: () => {},
  });
