import React from "react";
import Laptop from "../assets/imgs/planejamento.jpg";


const Preco = () => {
    return (
        <div id="precos" className="w-full bg-[#050505] py-16 px-4">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 p-4">
                <img data-aos="zoom-in" className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div data-aos="fade-left" className="flex flex-col justify-center">
                    <p className="text-white uppercase font-bold">Ajudamos a Escalar Seu Negócio</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-800 via to-purple-900 py-2">Planos e Preços Competitivos</h1>
                    <p className="text-gray-400">
                        Entendemos que investir em desenvolvimento web e identidade visual é um passo importante. Por isso, oferecemos preços competitivos e pacotes escaláveis para atender a empresas de todos os tamanhos.                    
                    </p>
                    <button className="hover:scale-105 duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
                        <a href="https://wa.me/+258833064723" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Preco;