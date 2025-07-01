"use client";

import {
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Rate } from "@/components";
import { Label } from "@/ui";
import { FormControl, FormField, FormItem } from "@/ui/form";

type FieldRateProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues, TName>;
  name: TName;
  label?: string;
};

export const FieldRate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
}: FieldRateProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between">
            {label && <Label>{label}</Label>}
            <FormControl>
              <Rate {...field} />
            </FormControl>
          </div>
        </FormItem>
      )}
    />
  );
};
