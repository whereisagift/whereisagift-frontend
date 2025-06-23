import { FC } from "react";

import {
  useCurrentFolderContext,
  useEditModeContext,
} from "@/features/desires";
import { DeleteFolderModal } from "@/features/desires/components/DeleteFolderModal";
import { TypographyH3, TypographyH4 } from "@/ui";

import {
  EditFolderForm,
  EditFolderIcon,
} from "features/desires/components/EditFolder";

export const DesiresTitle: FC = () => {
  const { currentFolder } = useCurrentFolderContext();
  const { isEditMode } = useEditModeContext();

  if (!currentFolder) return <div></div>;
  return (
    <div className="flex justify-between items-baseline mb-4 gap-4">
      {!isEditMode && (
        <div className="flex flex-col">
          <TypographyH3>{currentFolder.label}</TypographyH3>
          {currentFolder.description && (
            <TypographyH4>{currentFolder.description}</TypographyH4>
          )}
        </div>
      )}
      {isEditMode && <EditFolderForm />}
      <div className="flex gap-2">
        <EditFolderIcon />
        <DeleteFolderModal />
      </div>
    </div>
  );
};
