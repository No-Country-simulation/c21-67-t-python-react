"use client";

import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-center uppercase  lg:text-lg sm:text-md font-medium text-primary mt-4">
        NUESTRA HISTORIA
      </h1>
      <div className="text-center h-48 overflow-auto touch-auto">
        <p className="text-foreground text-md font-semibold pb-10 px-10">
          En el corazón de Santa Rosa, en una pequeña y acogedora oficina, dos
          amigos de la infancia, Juan y María, se reencontraron después de años
          de haberse distanciado. Ambos compartían una pasión inquebrantable por
          la tecnología y un sueño en común: cambiar la manera en que las
          personas acceden a productos y servicios tecnológicos. <br /> Juan, un
          desarrollador de software brillante, había trabajado en varias
          startups tecnológicas en el extranjero.
          <br /> María, una ingeniera de sistemas con un talento especial para
          la innovación, había dedicado su carrera a mejorar procesos
          tecnológicos en grandes empresas. <br />
          Juntos, decidieron que era el momento de unir fuerzas y dar vida a su
          sueño. Una noche, mientras trabajaban hasta tarde en un proyecto, en
          medio del sonido de las teclas y el aroma del café recién hecho, nació
          la idea de Bytech.
          <br /> Querían un nombre que reflejara su amor por la tecnología y su
          misión de brindar soluciones innovadoras. Comenzaron vendiendo
          componentes tecnológicos básicos, pero pronto se dieron cuenta de que
          podían ofrecer mucho más. Al ver la creciente demanda de servicios
          tecnológicos de alta calidad, ampliaron su oferta a consultorías,
          mantenimiento de sistemas y desarrollos personalizados. Su dedicación
          y compromiso no tardaron en dar frutos. Con el tiempo, Bytech se
          convirtió en un referente en la industria tecnológica, reconocido por
          su excelencia y su capacidad para transformar desafíos en
          oportunidades. Hoy, Bytech no solo vende productos de última
          generación, sino que también ofrece soluciones tecnológicas integrales
          que mejoran la vida de sus clientes y empresas en todo el país.
        </p>
      </div>
      <div className="w-9/12 mt-4">
        <h1 className="text-center uppercase lg:text-lg sm:text-md font-medium text-primary my-4">
          Servicios
        </h1>
        <div className="grid grid-flow-col lg:grid-cols-4 sm:grid-cols-2 gap-2 lg:grid-rows-2 sm:grid-rows-4">
          <img src="/assembling-motherboard.jpg" className="size-48" />
          <img src="/creative-invention.jpg" className="size-48" />
          <img src="/creative-invention2.jpg" className="size-48" />
          <img src="/creative-invention3.jpg" className="size-48" />
          <img src="/creative-invention4.jpg" className="size-48" />
          <img src="/creative-invention5.jpg" className="size-48" />
          <img src="/inventor-working.jpg" className="size-48" />
          <img src="/creative-invention6.jpg" className="size-48" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 sm:max-md:grid-cols-1 gap-4 sm:max-md:gap-8 place-context-center mt-2 m-auto w-4/5">
        <div className="">
          <div className="border-b-4 w-full" />
          <p className="text-foreground my-4 text-justify text-sm w-full">
            'Descubre cómo Bytech puede transformar tu mundo tecnológico.
            Ofrecemos productos y servicios de alta calidad, diseñados para
            satisfacer todas tus necesidades tecnológicas. Desde consultorías
            especializadas hasta la venta de los últimos componentes y sistemas,
            estamos aquí para ayudarte a innovar y crecer.'
          </p>
          <div className="border-b-4 w-full" />
        </div>
        <div className="mx-auto items-center">
          <p className="text-primary text-md font-bold my-4">
            ¿QUERÉS UN TURNO?
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-btnActive hover:text-foreground text-white font-medium text-sm mt-10 py-1.5 px-8 rounded-sm "
          >
            CONTACTANOS
          </Link>
        </div>
      </div>
    </div>
  );
};
