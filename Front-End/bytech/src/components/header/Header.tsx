"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
  const [IsVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 bg-primary mt-0  place-items-center">
        <div className="p-2 mx-2">
          <Link href="/">
            <img
              alt="imagen del logo"
              src="/logo.png"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="col-span-2 justify-around lg:flex sm:max-lg:hidden gap-2 flex-wrap">
          <div className="flex gap-6 items-center text-background">
            <Link href="/product">Productos</Link>
            <Link href="/about">Sobre Nosotros</Link>
            <Link href="/contact">Contacto</Link>
          </div>
          <div className=" lg:block md:hidden">
            <input
              type="text"
              name="search"
              placeholder="Ingrese busqueda"
              className="rounded-md border-solid border-2 p-1"
            />
            <button className="mx-2 text-lg" type="submit">
              <FaSearch color="white"></FaSearch>
            </button>
          </div>
        </div>
        <div className="block text-4xl sm:max-lg:hidden col-end-5">
          <Link href="/login">
            <RxAvatar color="white"></RxAvatar>
          </Link>
        </div>

        {/* Menú hamburguesa */}
        <div className="container mx-auto col-end-5 col-span-2 flex justify-end h-full py-4 px-4 gap-4 lg:hidden md:flex place-items-center">
          <div className="relative inline-block text-left">
            <button onClick={() => setIsVisible(!IsVisible)}>
              <GiHamburgerMenu className="size-9" color="white" />
            </button>
            {IsVisible && (
              <div
                onClick={() => setIsVisible(!IsVisible)}
                className="p-2 absolute right-0 z-10 origin-top-right bg-primary  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="flex flex-col flex-wrap gap-2 text-white divide-y divide-secondary">
                  <Link href="/products">Productos</Link>
                  <Link href="/about">Sobre Nosotros</Link>
                  <Link href="contact">Contacto</Link>
                  <Link href="/login">Inicio Sesion</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
