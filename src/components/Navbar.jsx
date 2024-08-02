import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from "../assets/imgs/l.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
      <div className="z-50 max-w-screen-xl h-24 flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img className="h-6" src={Logo} alt="" />
          <a href="#" className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-pink-800 to-purple-900">
            DevNexus
          </a>
        </div>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <div className="hidden md:flex">
            <button type="button" className="text-black bg-white font-medium rounded-md text-sm px-4 py-2 text-center">
              <a href="tel:+258843779669">
              Contactar
              </a>
            </button>
          </div>
          <div onClick={handleNav} className="text-white py-2 md:hidden">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        <div className="items-center cursor-pointer text-white justify-between w-full md:flex md:w-auto md:order-1 z-[800]">
          <ul className="hidden md:flex">
            <li className="p-4 font-bold text-pink-800">
              <Link smooth to="#/">Início</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#sobre">Sobre</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#servicos">Serviços</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#precos">Preços</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#contactos">Contactos</Link>
            </li>
          </ul>
        
          <div className={nav ? "fixed left-0 top-0 w-[60%] h-full bg-[#0a0a0a] ease-in-out duration-500 z-[800]" : "fixed left-[-100%]"}>
            <div className="flex items-center justify-between p-4">
              <a href="#" className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-pink-800 to-purple-900">
                DevNexus
              </a>
              <button onClick={handleNav} className="text-white">
                <AiOutlineClose size={25} />
              </button>
            </div>
            <ul className="p-4">
              <li className="p-4">
                <Link smooth to="#/">Início</Link>
              </li>
              <li className="p-4">
                  <Link smooth to="#sobre">Sobre</Link>
              </li>
              <li className="p-4 ">
                  <Link smooth to="#servicos">Serviços</Link>
              </li>
              <li className="p-4">
                <Link smooth to="#contactos">Contactos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
