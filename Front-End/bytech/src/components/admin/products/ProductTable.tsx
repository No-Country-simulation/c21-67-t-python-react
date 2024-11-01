"use client";
import { getProducts } from "@/services/product";
import { propsProduct } from "@/types/product";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

export const ProductTable = () => {
  const [products, setProducts] = useState<propsProduct[]>();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchAllProducts();
  }, []);

  return (
    <div className="mt-2 mx-auto">
      <h1 className="text-center uppercase lg:text-lg sm:text-md font-medium text-primary my-4">
        Productos
      </h1>
      <table className="mx-auto w-4/5">
        <thead>
          <tr>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              #
            </th>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              Nombre
            </th>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              Descripcion
            </th>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              Precio
            </th>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              Stock
            </th>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              Editar
            </th>
            <th className="bg-footer px-2 py-2 text-background border-2 border-foreground">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((ele, index) => (
            <tr key={ele.id}>
              <td className="text-foregound text-center p-2 border-2">
                {index + 1}
              </td>
              <td className="text-foregound text-center p-2 border-2">
                {ele.name}
              </td>
              <td className="text-foregound text-center p-2 border-2">
                {ele.description.substring(0, 15)}
              </td>
              <td className="text-foregound text-center p-2 border-2">
                {ele.price}
              </td>
              <td className="text-foregound text-center p-2 border-2">
                {ele.stock}
              </td>
              <td className="text-foregound text-center p-2 border-2 hover:text-success cursor-pointer">
                <button>
                  <FaEdit></FaEdit>
                </button>
              </td>
              <td className="text-foregound text-center p-2 border-2 hover:text-destructive cursor-pointer">
                <button>
                  <BsTrash></BsTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
