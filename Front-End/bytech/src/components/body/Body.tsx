"use client";
import React from "react";
import Link from "next/link";
import CategoryList from "../category/card/CategoryList";

const Body = () => {
  return (
    <>
      <div>
        <CategoryList />
      </div>
      <div>
        <div className="flex justify-center items-center p-6 mb-6">
          <p className="font-light italic mt-5 text-neutral-500 text-center text-lg">
            <a className="font-bold italic text-xl">"</a>
            Innovación y Tecnología al Alcance de Todos
            <a className="font-bold italic text-xl">"</a>
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h1 title="NUESTRA PROPUESTA" color="beige"></h1>
      </div>

      <div className="flex justify-center mb-5 gap-4">
        <Link href="/products">
          <button className="bg-secondary hover:bg-btnActive hover:text-foreground text-white font-medium text-sm mt-10 py-1.5 px-16 rounded-sm sm:px-36 lg:px-80">
            VER TODOS
          </button>
        </Link>
      </div>
    </>
  );
};

export default Body;
