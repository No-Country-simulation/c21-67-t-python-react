"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FormSchema, FormValues } from "./Data";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import DialogeMessage from "../dialogue/DialogeMessage";
import { dataUser } from "@/types/user";
import { getUsers } from "@/services/users";

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState<"ÉXITO" | "ERROR">("ÉXITO");
  const [inforUser, setInfouser] = useState<dataUser>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const fetchGetUser = async (email: string) => {
    const getUser = await getUsers();
    const data = getUser.filter((ele) => ele.email == email);

    if (data) {
      setInfouser(data[0]);
    } else {
      alert("Usuario no encontrado");
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    form.reset();
    setDialogType("ÉXITO");
    setDialogMessage("Se inico sesion correctamente");
    setDialogOpen(true);
  };

  return (
    <>
      <div className="flex flex-1 flex-col justify-center p-6 mt-4 mx-auto w-4/5 border-2 border-primary">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid grid-rows-2 ">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer">
                        Email
                      </FormLabel>
                      <FormControl>
                        <input
                          id="email"
                          type="email"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer mt-2">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="mt-2 relative">
                          <input
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            {...field}
                            placeholder="********"
                            required
                            autoComplete="current-password"
                            className="  block w-full rounded-md border-0 p-1.5 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                          />
                          <div className="absolute inset-y-0 right-0 w-8 top-2">
                            {passwordVisible ? (
                              <BsEye
                                cursor="pointer"
                                className="size-5"
                                onClick={() =>
                                  setPasswordVisible(!passwordVisible)
                                }
                              />
                            ) : (
                              <BsEyeSlash
                                cursor="pointer"
                                className="size-5"
                                onClick={() =>
                                  setPasswordVisible(!passwordVisible)
                                }
                              />
                            )}
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs italic" />
                    </FormItem>
                  )}
                />

                <div className="mt-6">
                  <Button
                    type="submit"
                    className=" uppercase flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btnActive hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  >
                    Iniciar sesión
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

          <p className="mt-10 text-center text-sm text-gray-500">
            Aún no tiene cuenta?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-secondary hover:text-primary"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
