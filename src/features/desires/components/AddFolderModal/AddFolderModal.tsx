import { zodResolver } from "@hookform/resolvers/zod";
import { FolderPlusIcon, PlusIcon } from "lucide-react";
import { type FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Textarea,
} from "@/ui";

import { useCreateWishListMutation } from "./api";

type AddFolderModalProps = {
  collapsed?: boolean;
};

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500).optional().or(z.literal("")),
});

const defaultFormValues = {
  name: "",
  description: "",
};

export const AddFolderModal: FC<AddFolderModalProps> = ({ collapsed }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createWishList, { data, loading, error }] =
    useCreateWishListMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });
  console.log(data, loading, error);

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    await createWishList({
      variables: {
        wishlist: {
          name: values.name,
          description: values.description,
          wishIds: [],
        },
      },
    });

    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    form.reset();
  };

  const handleOpenModalChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
    form.reset();
  };

  return (
    <>
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => handleOpenModalChange(open)}
      >
        <DialogTrigger asChild>
          <Button variant="outline">
            {collapsed ? (
              <>
                <PlusIcon className="w-4 h-4" />{" "}
                <FolderPlusIcon className="h-4 w-4" />
              </>
            ) : (
              "Создать новую папку"
            )}
          </Button>
        </DialogTrigger>
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

              <div className="flex justify-between pt-4">
                <Button variant="outline" type="reset" onClick={handleCancel}>
                  Отмена
                </Button>
                <Button type="submit">Сохранить</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
