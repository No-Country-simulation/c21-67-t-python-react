"use client";

import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FormSchema } from "./Data";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import DialogeMessage from "../dialogue/DialogeMessage";
import { Button } from "../ui/button";
import { createUser } from "@/services/users";
import { propsUser } from "@/types/user";
import { useRouter } from "next/navigation";

export const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [infouser, setInfouser] = useState<string>();
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState<"ÉXITO" | "ERROR">("ÉXITO");
  const nav = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      address: "",
      cellphone: 0,
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const fetchCreateUser = async (dataUser: propsUser, seller: boolean) => {
    const getUser = await createUser(dataUser, seller);
    setInfouser(getUser);
  };

  const onSubmit: SubmitHandler<propsUser> = (data) => {
    console.log(data);
    fetchCreateUser(data, true);
    if (infouser) {
      form.reset();
      setDialogType("ÉXITO");
      setDialogMessage(infouser);
      setDialogOpen(true);
      setTimeout(() => {
        nav.push("/login");
      }, 10000);
    } else {
      alert("se produjo un error");
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center p-6 mt-4 mx-auto w-4/5 border-2 border-primary">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-primary">
          Registrate
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full ">
        <Form {...form}>
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="sm:max-md:col-span-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer">
                        Nombre
                      </FormLabel>
                      <FormControl>
                        <input
                          id="name"
                          type="text"
                          {...field}
                          required
                          autoComplete="name"
                          placeholder="Juan Carlos"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:max-md:col-span-2">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer">
                        Apellido
                      </FormLabel>
                      <FormControl>
                        <input
                          id="lastname"
                          type="text"
                          autoComplete="lastname"
                          {...field}
                          required
                          placeholder="Americo"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:max-md:col-span-2">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer">
                        Direccion
                      </FormLabel>
                      <FormControl>
                        <input
                          id="address"
                          type="text"
                          {...field}
                          autoComplete="address"
                          required
                          placeholder="La plata, Buenos Aires, Argentina"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:max-md:col-span-2">
                <FormField
                  control={form.control}
                  name="cellphone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer">
                        Celular
                      </FormLabel>
                      <FormControl>
                        <input
                          id="cellphone"
                          type="number"
                          {...field}
                          autoComplete="cellphone"
                          required
                          placeholder="+54 11 654788"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
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
                          required
                          autoComplete="email"
                          placeholder="carlos@gmail.com"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:max-md:col-span-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer mt-2">
                        Contraseña
                      </FormLabel>
                      <FormControl>
                        <div className="mt-2 relative">
                          <input
                            id="password"
                            type={passwordVisible ? "text" : "password"}
                            {...field}
                            placeholder="********"
                            required
                            autoComplete="password"
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
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:max-md:col-span-2">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium leading-6 text-footer mt-2">
                        Confirmar Contraseña
                      </FormLabel>
                      <FormControl>
                        <div className="mt-2 relative">
                          <input
                            id="confirmPassword"
                            type={passwordVisible ? "text" : "password"}
                            {...field}
                            placeholder="********"
                            required
                            autoComplete="confirmPassword"
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
                      <FormMessage className="text-destructive text-xs italic" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className=" uppercase flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btnActive hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                REGISTRARSE
              </Button>
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

        <p className="mt-5 text-center text-sm text-gray-500">
          Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-secondary hover:text-primary"
          >
            Inicia sesion
          </Link>
        </p>
      </div>
    </div>
  );
};
