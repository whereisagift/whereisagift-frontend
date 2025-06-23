import { Check, Pencil } from "lucide-react";
import { FC } from "react";

import { useEditModeContext } from "@/features/desires";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@/ui";

export const EditFolderIcon: FC = () => {
  const { isEditMode, setIsEditMode } = useEditModeContext();

  const handleSubmit = (value: boolean) => {
    setIsEditMode(value);
  };

  return (
    <>
      {!isEditMode && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="icon"
              className="h-8 w-8 p-0 z-1"
              onClick={() => handleSubmit(true)}
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Редактировать папку</p>
          </TooltipContent>
        </Tooltip>
      )}
      {isEditMode && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="icon"
              className="h-8 w-8 p-0"
              onClick={() => handleSubmit(false)}
            >
              <Check className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Сохранить изменения</p>
          </TooltipContent>
        </Tooltip>
      )}
    </>
  );
};
