"use client";
import { useEffect, useState, useRef } from "react";
import { propsProduct } from "@/types/product";
import { getProducts } from "@/services/product";
import { CardBase } from "./CardBase";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

export const ProductList = () => {
  const [products, setProducts] = useState<propsProduct[]>();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchAllProducts();
  }, []);

  return (
    <div>
      <h1 className="text-center uppercase  lg:text-lg sm:text-md font-medium text-primary my-4">
        Productos
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-6 mx-2">
        {products?.map((product) => (
          <CardBase {...product} />
        ))}
      </div>
    </div>
  );
};
