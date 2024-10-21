"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <div className="flex flex-1 flex-col justify-center p-6 mt-4 mx-auto w-4/5 border-2 border-primary">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-footer">
            Registrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nameUser"
                  className="block text-sm font-medium leading-6 text-footer"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    id="nameUser"
                    name="nameUser"
                    type="text"
                    placeholder="Juan Carlos"
                    required
                    autoComplete="nameUser"
                    className="block w-full rounded-md border-0 p-1.5 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastnameUser"
                  className="block text-sm font-medium leading-6 text-footer"
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    id="lastnameUser"
                    name="lastnameUser"
                    type="text"
                    placeholder="Gonzales"
                    required
                    autoComplete="lastnameUser"
                    className="block w-full rounded-md border-0 p-1.5 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-footer"
                >
                  Locacion
                </label>
                <div className="mt-2">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="La plata, Buenos Aires, Argentina"
                    required
                    autoComplete="location"
                    className="block w-full rounded-md border-0 p-1.5 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cellphone"
                  className="block text-sm font-medium leading-6 text-footer"
                >
                  Celular
                </label>
                <div className="mt-2">
                  <input
                    id="cellphone"
                    name="cellphone"
                    type="text"
                    placeholder="+54 11 568945"
                    required
                    autoComplete="cellphone"
                    className="block w-full rounded-md border-0 p-1.5 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-footer"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="correo@gmail.com"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 p-1.5 text-footer shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-footer"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
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
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    ) : (
                      <BsEyeSlash
                        cursor="pointer"
                        className="size-5"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="re-password"
                    className="block text-sm font-medium leading-6 text-footer"
                  >
                    Confirmar Contraseña
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="re-password"
                    name="re-password"
                    type={passwordVisible ? "text" : "password"}
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
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    ) : (
                      <BsEyeSlash
                        cursor="pointer"
                        className="size-5"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btnActive hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Ya tienes cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-secondary hover:text-primary"
            >
              Inicio sesion
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
