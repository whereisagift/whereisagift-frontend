"use client";

import { type HTMLInputTypeAttribute } from "react";
import {
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { FormControl, FormField, FormItem, Input } from "@/ui";

type FieldInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues, TName>;
  name: TName;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
};

export const FieldInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  placeholder,
  type,
}: FieldInputProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
