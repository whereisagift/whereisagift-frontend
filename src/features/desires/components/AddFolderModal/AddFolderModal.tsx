import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/ui/form";
import { Input } from "@/ui/input";

import { useCreateWishListMutation } from "./api";

type AddFolderModalProps = {
  children: ReactNode;
};

const formSchema = z.object({
  name: z.string().min(2).max(50),
});

export const AddFolderModal: FC<AddFolderModalProps> = ({ children }) => {
  const [createWishList, { data, loading, error }] =
    useCreateWishListMutation();

  console.log({ data, loading, error });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    createWishList({
      variables: {
        name: values.name,
      },
    });

    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="not-md:w-full not-md:h-full md:w-1/2 md: h-fit pt-10">
        <DialogHeader>
          <DialogDescription />
          <DialogTitle>Добавить новую папку</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
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
