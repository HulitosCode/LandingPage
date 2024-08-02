import React from "react";
import { ReactTyped } from "react-typed";



const Hero = () => {
    return (
        
        <div className="text-white" id="/">
            <div className="max-w-[800px] lg:mt-[-96px] md:mt-[-50px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="font-bold p-2 text-transparent bg-clip-text bg-gradient-to-l from-pink-800 via to-purple-900">
                    <span className="text-white">Bem-vindo ao</span> DevNexus!
                </p>
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-transparent bg-clip-text bg-gradient-to-l from-pink-800 to-purple-900">
                        Conectando Inovação e <span className="text-white" style={{ textShadow: '1px 1px 3px white' }}>Tecnologia</span>
                    </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-xl text-sm font-bold py-4 text-white">
                    Na DevNexus, conectamos você às 
                    </p>
                    <ReactTyped 
                    className="md:text-xl text-sm font-bold pl-2"
                        strings={['melhores', 'soluções', 'tecnológicas']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="md:text-xl font-light text-gray-400">
                    Transformamos suas ideias em experiências digitais inovadoras que impulsionam o sucesso do seu negócio.
                </p>
                <button className="bg-white hover:scale-105 duration-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                    <a href="tel:+258833064723">Contactar</a>
                </button>
            </div>
        </div>
    )
    
}

export default Hero;