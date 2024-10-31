"use client";
import { propsProduct } from "@/types/product";
import Link from "next/link";

export const CardBase = ({ id, images, name }: propsProduct) => {
  console.log(id);

  return (
    <div
      key={id}
      className="flex flex-col justify-center items-center bg-background rounded-lg drop-shadow-lg relative"
    >
      <p className="absolute text-primary font-medium text-lg p-2 top-2">
        {name}
      </p>
      <img
        alt=""
        src={images ?? "https://swiperjs.com/demos/images/nature-2.jpg"}
        height={300}
        width={300}
      />
      <div className="absolute bottom-2">
        <Link
          href={`product/${id}`}
          className="bg-secondary hover:bg-btnActive hover:text-foreground text-white rounded-sm py-1.5 px-16"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};
