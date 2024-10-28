"use client";

import React, { useState } from "react";

import { Galery } from "./Galery";
import { propsProduct } from "@/types/product";

export const DetailsProduct = (product: propsProduct) => {
  return (
    <>
      {/* desktop-tablet */}
      <div className="sm:hidden md:block">
        <div className="grid grid-cols-2 mx-auto p-5 gap-4 ">
          <div>
            <Galery />
          </div>
          <div className="grid grid-rows-3 place-items-center ">
            <div className="place-items-center ">
              <div className="lg:grid lg:grid-cols-3 lg:gap-4 md:gap-2 lg:justify-items-center md:justify-items-start">
                <h2 className="font-semibold text-lg text-primary col-span-2">
                  Nombre producto: {product.name}
                </h2>
                <p className="bg-secondary py-1.5 px-8 text-white rounded-sm lg:my-0 md:mt-2 md:mb-0">
                  ${product.price}
                </p>
              </div>
            </div>
            <p className="w-4/5 m-auto text-clip">
              DESCRIPCION: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quis, reiciendis porro, libero accusantium, assumenda fugit
              mollitia nisi doloribus rem hic natus! Dolor mollitia porro eaque
              earum rerum nostrum saepe quibusdam.
            </p>
            <button
              className="row bg-secondary hover:bg-btnActive hover:text-foreground text-white rounded-sm py-1.5 px-16"
              onClick={() => alert("Producto agregado al carrito")}
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:block md:hidden">
        <div className="grid grid-rows-2 mx-auto p-5 ">
          <div>
            <Galery />
          </div>
          <div className="grid grid-rows-3 place-items-center">
            <div className="place-items-center">
              <div className="">
                <h2 className="font-semibold text-lg text-primary">
                  Nombre producto: {product.name}
                </h2>
                <p className="text-center bg-secondary py-1.5 px-8 text-white rounded-sm mt-2 mb-0">
                  ${product.price}
                </p>
              </div>
            </div>
            <p className="w-4/5 m-auto text-clip">
              DESCRIPCION: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quis, reiciendis porro, libero accusantium, assumenda fugit
              mollitia nisi doloribus rem hic natus! Dolor mollitia porro eaque
              earum rerum nostrum saepe quibusdam.
            </p>
            <button
              className="row bg-secondary hover:bg-btnActive hover:text-foreground text-white rounded-sm py-1.5 px-16"
              onClick={() => alert("Producto agregado al carrito")}
            >
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
