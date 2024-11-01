"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
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
import { FormSchema, FormValues } from "./DataForm";
import { createCategory } from "@/services/category";
import { categoryCreate } from "@/types/category";

export const FormCategoria: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState<"ÉXITO" | "ERROR">("ÉXITO");
  const [info, setInfo] = useState<string>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const fetchCreate = async (data: categoryCreate) => {
    const category = await createCategory(data);
    if (category) {
      setInfo(category.name);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetchCreate(data);
    if (info) {
      form.reset();
      setDialogType("ÉXITO");
      setDialogMessage("Se creo categoria exitosamente");
      setDialogOpen(true);
    }
  };

  return (
    <div className="items-center mx-auto w-4/5 p-4 my-4 border-solid border-2 border-primary">
      <h2 className=" text-center text-lg font-semibold w-full text-primary">
        CREAR CATEGORIA
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4">
          <div className="grid grid-rows-2 gap-2 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-md font-medium leading-6 text-footer">
                    Nombre de Categoria
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      {...field}
                      id="name"
                      maxLength={50}
                      placeholder="Categoria"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs italic" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-md font-medium leading-6 text-footer">
                    Descripcion
                  </FormLabel>
                  <FormControl>
                    <input
                      id="description"
                      type="text"
                      {...field}
                      placeholder="Descripcion del producto"
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
                CREAR
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
          textButtonTwo="VOLVER A CATEGORIAS"
          buttonTwoHref="/admin/category"
        />
      </Form>
    </div>
  );
};
