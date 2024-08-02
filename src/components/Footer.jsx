import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='contactos' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-800 via to-purple-900'>DevNexus</h1>
        <p className='py-4'>DevNexus, Conectando Inovação e Tecnologia. Transformamos suas ideias em experiências digitais inovadoras que impulsionam o sucesso do seu negócio.</p>
        <div className='flex gap-4 md:w-[20%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Soluções</h6>
          <ul>
              <li className='py-2 text-sm'>Software</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Sites</li>
              <li className='py-2 text-sm'>Brand</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Empresa</h6>
          <ul>
                <li className='py-2 text-sm'>Sobre</li>
                <li className='py-2 text-sm'>Serviços</li>
                <li className='py-2 text-sm'>Contactos</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Contactos</h6>
            <ul>
                <li className='py-2 text-sm'>+258 84 377 9669</li>
                <li className='py-2 text-sm'>+258 83 306 4723</li>
                {/* <li className='py-2 text-sm'>E-mail: heltonmatimbe8@gmail.com</li> */}
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Politicas</li>
                <li className='py-2 text-sm'>Termos</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;