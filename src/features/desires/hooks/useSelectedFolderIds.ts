import { useState } from "react";

export const useSelectedFolderIds = () => {
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
