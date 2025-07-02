"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, type ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  FieldInput,
  FieldRate,
  FieldSelect,
  FieldTextarea,
} from "@/components";
import { CURRENCY } from "@/constants";
import { ProductSource } from "@/types";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
} from "@/ui";

import { useSelectedFolderIds } from "../../hooks";

import { useCreateWishMutation } from "./api";
import { FoldersSelect } from "./FoldersSelect";

type AddDesireModalProps = {
  children: ReactNode;
};

const formSchema = z.object({
  url: z.string().url().optional().or(z.literal("")),
  img: z.string().url().optional().or(z.literal("")),
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(300).optional().or(z.literal("")),
  price: z.coerce.number().optional().or(z.literal("")),
  rate: z.number().optional().or(z.literal(0)),
  currency: z.string().optional().or(z.literal("")),
});

const currencyItems = CURRENCY.map((value) => ({
  label: value,
  value,
}));

export const AddDesireModal: FC<AddDesireModalProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createWish, { data, loading, error }] = useCreateWishMutation();
  const { selectedFolderIds, addFolderId, removeFolderId } =
    useSelectedFolderIds();
  const [selectedFolderIdsError, setSelectedFolderIdsError] =
    useState<string>();

  useEffect(() => {
    if (selectedFolderIds.length) setSelectedFolderIdsError(undefined);
  }, [selectedFolderIds.length]);

  console.log(data, loading, error);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: loading,
    defaultValues: {
      url: "",
      img: "",
      name: "",
      description: "",
      rate: 0,
      price: "",
      currency: "RUB",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!selectedFolderIds.length) {
      setSelectedFolderIdsError("Выберете минимум одну папку");
      return;
    }
    await createWish({
      variables: {
        wish: {
          name: values.name,
          description: values.description || undefined,
          link: values.url || undefined,
          img: values.img || undefined,
          rate: values.rate,
          price:
            values.price && values.currency
              ? {
                  currency: values.currency,
                  value: values.price,
                }
              : undefined,
          type: ProductSource.Manual,
          wishlistIds: selectedFolderIds,
        },
      },
    });
    setIsModalOpen(false);
  }

  const handleOpenModalChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
    form.reset();
  };

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(open) => handleOpenModalChange(open)}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="not-md:w-full not-md:h-full md:w-1/2 md: h-fit pt-10">
        <DialogHeader>
          <DialogDescription />
          <DialogTitle>Добавить новое желание</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FieldInput
              control={form.control}
              name="url"
              type="url"
              placeholder="Ссылка"
            />
            <FieldInput
              control={form.control}
              name="name"
              type="text"
              placeholder="Название"
            />
            <FieldTextarea
              control={form.control}
              name="description"
              placeholder="Описание"
              className="resize-none"
            />
            <FieldInput
              control={form.control}
              name="img"
              type="url"
              placeholder="Ссылка на картинку"
            />
            <div className="flex justify-between">
              <FieldInput
                control={form.control}
                name="price"
                type="number"
                placeholder="Цена"
              />
              <FieldSelect
                control={form.control}
                name="currency"
                items={currencyItems}
              />
            </div>
            <FieldRate
              control={form.control}
              name="rate"
              label="Степень желания"
              disabled={loading}
            />
            <FoldersSelect
              addFolderId={addFolderId}
              removeFolderId={removeFolderId}
              error={selectedFolderIdsError}
            />
            <div className="flex justify-between">
              <Button variant="outline" disabled={loading}>
                Отмена
              </Button>
              <Button disabled={loading}>Добавить</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
