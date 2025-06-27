import { useState } from "react";

import { type Item } from "@/components";
import { createContextHOC } from "@/lib/contexts";

const useCurrentFolder = () => {
  const [currentFolder, setCurrentFolder] = useState<Item | undefined>();
  console.log(currentFolder);
  return { currentFolder, setCurrentFolder };
};

export const [withCurrentFolder, useCurrentFolderContext] = createContextHOC(
  useCurrentFolder,
  {
    currentFolder: undefined,
    setCurrentFolder: () => {},
  },
);
