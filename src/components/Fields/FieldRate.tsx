"use client";

import {
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Rate } from "@/components";
import { FormControl, FormField, FormItem, Label } from "@/ui";

type FieldRateProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues, TName>;
  name: TName;
  label?: string;
  disabled?: boolean;
};

export const FieldRate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  disabled,
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
              <Rate {...field} disabled={disabled} />
            </FormControl>
          </div>
        </FormItem>
      )}
    />
  );
};
