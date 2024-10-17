"use client";
import React from "react";
import Link from "next/link";

const Body = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center mb-6">
          <p className="font-light italic mt-5 text-neutral-500 text-center text-lg">
            <a className="font-bold italic text-xl">"</a>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae non quaerat ipsa at fugiat, dolorem itaque optio
            reprehenderit eius facilis perferendis fugit natus eveniet porro
            aliquam aspernatur illo officiis.
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
