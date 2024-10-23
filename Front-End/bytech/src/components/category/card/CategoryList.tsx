import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Card } from "./Card";
import Link from "next/link";

interface props {
  id: number;
  name: string; //(max_length=255)
  description: string;
  status: boolean; //(default=True)
}
export default function App() {
  const categorys: props[] = [
    {
      id: 1,
      name: "Procesadores",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quidem iste earum. Maiores ipsa unde aperiam mollitia illo beatae minima provident, hic rerum corporis sed similique inventore nisi, distinctio vitae!",
      status: true,
    },
    {
      id: 2,
      name: "Memorias Ram",
      description: "Test Category",
      status: true,
    },
    {
      id: 3,
      name: "Discos duros",
      description: "Test Category",
      status: true,
    },
    {
      id: 4,
      name: "Placas",
      description: "Test Category",
      status: true,
    },
    {
      id: 5,
      name: "Teclados",
      description: "Test Category",
      status: true,
    },
    {
      id: 6,
      name: "Tarjetas de video",
      description: "Test Category",
      status: true,
    },
  ];
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
          {categorys.map((categoria) => (
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
          {categorys.map((categoria) => (
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
}
