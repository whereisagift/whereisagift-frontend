import type { CheckedState } from "@radix-ui/react-checkbox";
import { type FC } from "react";

import { Spinner } from "@/components/Spinner";
import { AddFolderModal } from "@/features/desires";
import { useWishlistsQuery } from "@/features/desires/components/FoldersMenu/api";
import { Switch } from "@/ui";
import { Label } from "@/ui/label";

type FoldersSelectProps = {
  addFolderId: (id: string) => void;
  removeFolderId: (id: string) => void;
};

export const FoldersSelect: FC<FoldersSelectProps> = ({
  addFolderId,
  removeFolderId,
}) => {
  const { data: dataWishlists, loading } = useWishlistsQuery();

  const handleClick = (checked: CheckedState, id: string) => {
    if (checked) {
      addFolderId(id);
    } else {
      removeFolderId(id);
    }
  };

  const wishlists = dataWishlists?.wishlists;

  if (loading) return <Spinner />;
  if (!wishlists)
    return (
      <div className="flex gap-3 items-start">
        <Label>У вас нет папок</Label>
        <AddFolderModal />
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      <Label>Добавить желание в папки:</Label>
      {wishlists?.map((wishlist) => (
        <div
          key={wishlist.id + wishlist.__typename}
          className="flex gap-3 items-start"
        >
          <Switch
            onCheckedChange={(checked) => handleClick(checked, wishlist.id)}
          />
          <Label>{wishlist.name}</Label>
        </div>
      ))}
    </div>
  );
};
