import React, { useEffect, useState } from "react";
import { getProducts } from "@/services/produc";
import { propsProduct } from "@/types/product";
import { CardBase } from "./CardBase";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
    <>
      <div>
        <h1 className="text-center uppercase  lg:text-lg sm:text-md font-medium text-primary mb-2">
          Productos Recomendados
        </h1>
      </div>
      {/* desktop */}
      <div className="lg:block sm:max-lg:hidden">
        <Swiper
          className="w-4/5"
          slidesPerView={3}
          spaceBetween={25}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} className="p-2">
              <CardBase {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* tablet */}
      <div className="lg:hidden sm:hidden md:block">
        <Swiper
          className="w-4/5"
          slidesPerView={2}
          spaceBetween={25}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} className="p-2">
              <CardBase {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* mobile */}
      <div className="sm:block md:hidden">
        <Swiper
          className="w-4/5"
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} className="p-2">
              <CardBase {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
