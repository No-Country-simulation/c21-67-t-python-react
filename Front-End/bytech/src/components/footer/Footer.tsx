import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 place-items-center mt-12 md:grid-cols-2 sm:grid-cols-1">
      <div className="">
        <p className="text-footer text-sm">Copyright@2024</p>
      </div>

      <div className="mt-2">
        <div className="flex ">
          <input
            type="text"
            name="search"
            placeholder="Ingrese aqui su email"
            className="border-solid border-2 border-footer  p-1 text-footer"
          />

          <button className="bg-secondary border border-solid text-sm text-white p-2 active:bg-btnActive hover:bg-btnActive hover:text-foreground ">
            SUSCRIBETE
          </button>
        </div>
        <div className="flex place-items-center justify-around mt-3">
          <div className="flex -mx-2">
            <a href="#" className="mx-2" aria-label="Facebook">
              <IoLogoFacebook className="text-footer text-[30px] hover:text-gris " />
            </a>
            <a href="#" className="mx-2" aria-label="Facebook">
              <FaLinkedinIn className="text-footer text-[30px] hover:text-gris" />
            </a>
            <a href="#" className="mx-2" aria-label="Facebook">
              <IoLogoTwitter className="text-footer text-[30px]  hover:text-gris" />
            </a>
            <a href="#" className="mx-2" aria-label="Github">
              <IoLogoInstagram className="text-footer text-[30px] hover:text-gris" />
            </a>
          </div>
        </div>
      </div>

      <div className="m-2 flex flex-col justify-center items-center space-y-2 h-full ">
        <a
          href="/politicasdeprivacidad"
          className="text-sm duration-300 text-footer hover:underline"
        >
          Políticas de privacidad
        </a>
        <a
          href="/terminasycondiciones"
          className="text-sm duration-300 text-footer hover:underline"
        >
          Términos y condiciones
        </a>
        <a
          href="/contacto"
          className="text-sm duration-300 text-footer hover:underline"
        >
          Contacto
        </a>
      </div>
    </div>
  );
}

export default Footer;
