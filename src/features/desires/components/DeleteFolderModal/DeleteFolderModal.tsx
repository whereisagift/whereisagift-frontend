import { Trash2 } from "lucide-react";
import { FC, useState } from "react";

import { useCurrentFolderContext } from "@/features/desires";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

export const DeleteFolderModal: FC = () => {
  const { currentFolder } = useCurrentFolderContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <Tooltip>
        <Dialog
          open={isModalOpen}
          onOpenChange={(open) => handleOpenModalChange(open)}
        >
          <DialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="icon" className="h-8 w-8 p-0 z-1">
                <Trash2 className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
          </DialogTrigger>
          <DialogContent className="not-md:w-full not-md:h-full md:w-1/2 md: h-fit pt-10">
            <DialogHeader>
              <DialogDescription />
              <DialogTitle>Удалить папку {currentFolder?.label}?</DialogTitle>
            </DialogHeader>
            <div className="mt-4 flex justify-between">
              <Button type="reset" variant="outline" onClick={handleCancel}>
                Отмена
              </Button>
              <Button type="submit" onClick={handleSubmit}>
                Удалить
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <TooltipContent>
          <p>Удалить папку</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};
