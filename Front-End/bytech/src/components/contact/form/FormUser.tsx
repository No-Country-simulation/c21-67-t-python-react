"use client";
import { FormSchema, FormValues } from "./Data";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { sendEmail } from "@/lib/send-emails";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import DialogeMessage from "@/components/dialogue/DialogeMessage";

export const DataContact: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState<"ÉXITO" | "ERROR">("ÉXITO");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      usercellphone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    sendEmail(data);
    form.reset();
    setDialogType("ÉXITO");
    setDialogMessage("Su mensaje ha sido enviado exitosamente");
    setDialogOpen(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4">
        <div className="grid grid-rows-4 ">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium leading-6 text-footer">
                  Nombre
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    {...field}
                    id="name"
                    maxLength={50}
                    placeholder="Carlos Retamoso"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs italic" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usercellphone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium leading-6 text-footer">
                  Celular
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    {...field}
                    maxLength={20}
                    placeholder="54 9 3456895"
                    id="number"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs italic" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="useremail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium leading-6 text-footer">
                  Email
                </FormLabel>
                <FormControl>
                  <input
                    id="usermail"
                    type="text"
                    {...field}
                    placeholder="carlos@gmail.com"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs italic" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium leading-6 text-footer">
                  Dejanos tu mensaje
                </FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    id="message-user"
                    maxLength={300}
                    placeholder="Me gustaria..."
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs italic" />
              </FormItem>
            )}
          />
          <div className="mt-6">
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btnActive hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              ENVIAR
            </Button>
          </div>
        </div>
      </form>
      <DialogeMessage
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        type={dialogType}
        message={dialogMessage}
        textButtonOne="CERRAR"
        textButtonTwo="VOLVER A INICIO"
        buttonTwoHref="/"
      />
    </Form>
  );
};
