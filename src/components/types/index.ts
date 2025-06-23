export type Items = Item[];

export type Item = {
  key: string;
  label: string;
  description?: string;
  item?: Item[];
};
