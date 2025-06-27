import { zodResolver } from "@hookform/resolvers/zod";
import { type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Textarea,
} from "@/ui";

import { useCurrentFolderContext, useEditModeContext } from "../../contexts";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(500).optional().or(z.literal("")),
});

export const EditFolderForm: FC = () => {
  const { currentFolder } = useCurrentFolderContext();
  const { selectedDesireIds } = useEditModeContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: currentFolder?.label,
      description: currentFolder?.description,
    },
  });
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Название"
                    {...field}
                    className=" bg-white"
                  />
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
                    placeholder="Описание"
                    {...field}
                    className="bg-white resize-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {Boolean(selectedDesireIds.length) && (
            <Button>Удалить выбранные желания</Button>
          )}
        </form>
      </Form>
    </>
  );
};
