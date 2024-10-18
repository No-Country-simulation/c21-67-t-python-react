"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <div className="flex flex-1 flex-col justify-center p-6 mt-4 mx-auto w-4/5 border-2 border-primary">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-footer">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-secondary hover:text-indigo-500"
                  >
                    Olvidaste la contraseña?
                  </a>
                </div>
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-btnActive hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Sign in
              </button>
            </div>
          </form>

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
