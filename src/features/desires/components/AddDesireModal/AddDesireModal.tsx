import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Rate } from "@/components/Rate";
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
import { Textarea } from "@/ui/textarea";

type AddDesireModalProps = {
  children: ReactNode;
};

const formSchema = z.object({
  url: z.string().url().optional().or(z.literal("")),
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500).optional().or(z.literal("")),
  price: z.coerce.number().optional().or(z.literal("")),
  rate: z.number().optional().or(z.literal(0)),
});

export const AddDesireModal: FC<AddDesireModalProps> = ({ children }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      name: "",
      description: "",
      rate: 0,
      price: "",
    },
  });

  console.log(`errors: ${form.formState.errors}`);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
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
              name="rate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Rate {...field} />
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
