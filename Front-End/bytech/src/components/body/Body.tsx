"use client";
import React from "react";
import Link from "next/link";
import { CategoryList } from "../category/card/CategoryList";
import { ProductList } from "../product/ProductList";

const Body = () => {
  return (
    <>
      <div>
        <CategoryList />
      </div>
      <div className="flex justify-center items-center p-6">
        <p className="font-light italic mt-2 text-footer text-center text-lg">
          <a className="font-medium italic text-xl">"</a>
          Innovación y Tecnología al Alcance de Todos
          <a className="font-medium italic text-xl">"</a>
        </p>
      </div>
      <div className="mb-5">
        <div>
          <ProductList />
        </div>
        <div className="flex justify-self-center items-center">
          <Link
            href="/products"
            className=" bg-secondary hover:bg-btnActive hover:text-foreground text-white font-medium text-sm mt-10 py-1.5 px-16 rounded-sm sm:px-36 lg:px-80"
          >
            VER TODOS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
