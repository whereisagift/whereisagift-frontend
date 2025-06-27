import { type WishlistsQuery } from "@/features/desires/components/FoldersMenu/api";

export type Items = Item[];
export type Desire = WishlistsQuery["wishlists"][number]["wishes"][number];
export type Item = {
  key: string;
  label: string;
  description?: string;
  item?: Item[];
  desires?: Desire[];
};
