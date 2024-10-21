import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="mx-auto flex flex-col justify-center">
      <div className="mx-auto my-10">
        <h1 className="text-primary font-semibold">SECCIÓN EN MANTENIMIENTO</h1>
      </div>

      <div className="w-full flex flex-col gap-2 items-center mx-auto mt-5">
        <Image
          src="/errorpage.png"
          alt="isologo"
          className="w-48 h-48 object-cover"
          width={800}
          height={800}
        />

        <div className="mt-10">
          <Link
            href="/"
            className=" mb-2 bg-secondary block px-3.5 py-2.5 text-center text-sm font-semibold text-accent border border-solid hover:drop-shadow-lg hover:bg-btnActive"
          >
            VOLVER AL INICIO
          </Link>
          <Link
            href="/products"
            className="bg-btnActive block px-3.5 py-2.5 text-center text-sm font-semibold text-accent border border-solid hover:drop-shadow-lg hover:bg-secondary"
          >
            VER PRODUCTOS
          </Link>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
