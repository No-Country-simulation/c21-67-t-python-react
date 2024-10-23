import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Card } from "./Card";
import Link from "next/link";
import { propsCategory } from "@/types/category";
import { getCategory } from "@/services/category";
import { useEffect, useState } from "react";

export const CategoryList = () => {
  const [categorys1, setCategorys1] = useState<propsCategory[]>();

  useEffect(() => {
    const fetchAllCategorys = async () => {
      const allCategorys = await getCategory();
      setCategorys1(allCategorys);
    };
    fetchAllCategorys();
  }, []);

  return (
    <>
      <div className="lg:block sm:max-lg:hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="w-4/5 mt-2"
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        >
          {categorys1?.map((categoria) => (
            <SwiperSlide key={categoria.id} className="p-2 bg-secondary">
              <Link href={"/category/" + categoria.id}>
                <Card {...categoria} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden sm:max-lg:block">
        <Swiper
          className="w-4/5 mt-2"
          slidesPerView={2}
          spaceBetween={25}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {categorys1?.map((categoria) => (
            <SwiperSlide key={categoria.id} className="p-2 bg-secondary">
              <Link href={"/category/" + categoria.id}>
                <Card {...categoria} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
