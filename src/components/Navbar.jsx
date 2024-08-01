import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
      <div className="max-w-screen-xl h-24 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-l from-pink-800 via to-purple-900 ">DevNexus</span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="text-black bg-white font-medium rounded-md text-sm px-4 py-2 text-center">
            Contactar
          </button>
          <div onClick={handleNav} className="text-white py-2 md:hidden">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        <div className="items-center cursor-pointer text-white justify-between w-full md:flex md:w-auto md:order-1">
          <ul className="hidden md:flex">
            <li className="p-4 font-bold text-pink-800">
              <Link smooth to="/">Inicio</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#sobre">Sobre</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#servicos">Servicos</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#precos">Precos</Link>
            </li>
            <li className="p-4">
              <Link smooth to="#contactos">Contactos</Link>
            </li>
          </ul>
        
          <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-white m-4">DevNexus.</h1>
            <ul className="uppercase p-4">
              <li className="p-4 border-b border-gray-600">Inicio</li>
              <li className="p-4 border-b border-gray-600">
                  <Link smooth to="#sobre">Sobre</Link>
              </li>
              <li className="p-4 border-b border-gray-600">
                  <Link smooth to="#servicos">Servicos</Link>
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
