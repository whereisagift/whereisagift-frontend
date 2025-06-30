"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Rate } from "@/components/Rate";
import { useSelectedFolderIdsContext } from "@/features/desires/contexts/selectedFolderIds";
import { ProductSource } from "@/types";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import { Form, FormControl, FormField, FormItem } from "@/ui/form";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";

import { useCreateWishMutation } from "./api";
import { FoldersSelect } from "./FoldersSelect";

type AddDesireModalProps = {
  children: ReactNode;
};

const formSchema = z.object({
  url: z.string().url().optional().or(z.literal("")),
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(300).optional().or(z.literal("")),
  price: z.coerce.number().optional().or(z.literal("")),
  rate: z.number().optional().or(z.literal(0)),
  currency: z.string().optional().or(z.literal("")),
});

export const AddDesireModal: FC<AddDesireModalProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createWish, { data, loading, error }] = useCreateWishMutation();
  const { selectedFolderIds } = useSelectedFolderIdsContext();
  console.log(data, loading, error);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      name: "",
      description: "",
      rate: 0,
      price: "",
      currency: "RUB",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createWish({
      variables: {
        wish: {
          name: values.name,
          description: values.description || undefined,
          link: values.url || undefined,
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
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Ссылка на подарок"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Название" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      placeholder="Описание"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Цена" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Select
                          {...field}
                          onValueChange={(value) => field.onChange(value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="RUB">RUB</SelectItem>
                            <SelectItem value="BYN">BYN</SelectItem>
                            <SelectItem value="UAH">UAH</SelectItem>
                            <SelectItem value="KZT">KZT</SelectItem>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>
            <FormField
              control={form.control}
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <Label>Степень желания</Label>
                    <FormControl>
                      <Rate {...field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <FoldersSelect />
            <div className="flex justify-between">
              <Button variant="outline">Отмена</Button>
              <Button>Добавить</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
