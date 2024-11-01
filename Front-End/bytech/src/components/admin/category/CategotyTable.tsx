"use client";
import { deleteCategoryById, getCategory } from "@/services/category";
import { propsCategory } from "@/types/category";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

export const CategoryTable = () => {
  const [categorys, setCategorys] = useState<propsCategory[]>();
  const editCategory = (id: number) => {};

  const deleteCategory = async (id: number) => {
    const rsp = await deleteCategoryById(id);
    if (rsp) {
      alert(rsp);
    }
  };

  useEffect(() => {
    const fetchAllCategorys = async () => {
      const allCategorys = await getCategory();
      setCategorys(allCategorys);
    };
    fetchAllCategorys();
  }, [categorys]);

  return (
    <div className="mt-2 mx-auto">
      <h1 className="text-center uppercase lg:text-lg sm:text-md font-semibold text-primary my-2">
        CATEGORIAS
      </h1>
      <div className="flex justify-end mb-2 p-2 w-4/5 mx-auto">
        <Link
          href="/admin/category/create"
          className="rounded-sm bg-secondary px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-btnActive hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          AGREGAR CATEGORIA
        </Link>
      </div>
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
              Estado
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
          {categorys?.map((ele, index) => (
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
                {ele.status == true ? "Activo" : "Inactivo"}
              </td>
              <td className="text-foregound text-center p-2 border-2 hover:text-success cursor-pointer">
                <button onClick={() => editCategory(ele.id)}>
                  <FaEdit></FaEdit>
                </button>
              </td>
              <td className="text-foregound text-center p-2 border-2 hover:text-destructive cursor-pointer">
                <button onClick={() => deleteCategory(ele.id)}>
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
