import React from "react";
import Sobre from "../assets/imgs/p7.jpg";
import Visao from "../assets/imgs/ferramentas.jpg";

const Vissao = () => {
    return (
        <div id="sobre" className="w-full bg-black py-16 px-4 lg:mt-[-5px]">
            <div className="grid md:grid-cols-2 text-white max-w-screen-xl gap-8 mx-auto p-4">
                <img className="h-full w-full object-cover" src={Sobre} alt="/" />
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-4xl text-white mb-6">Sobre Nós</h1>
                    <span className="text-gray-300">
                        Na <span className="text-white font-medium">DevNexus</span>, somos apaixonados por tecnologia e inovação. Com uma equipe de especialistas em desenvolvimento e design, nossa missão é conectar você com as melhores soluções digitais. Combinamos criatividade, tecnologia e experiência para entregar produtos que não apenas atendem às suas necessidades, mas superam suas expectativas.
                    </span>    
                </div>
            </div>
            <div className="grid md:grid-cols-2 text-white max-w-screen-xl gap-8 mx-auto py-10 p-4">
                <div className="py-10">
                    <div className="bg-[#0c0c0c] black border-l-8 border-purple-900 rounded-lg p-8 hover:scale-105 duration-300">
                        <h2 className="text-white text-2xl font-extrabold mb-2">Nossa Visão</h2>
                        <p className="text-md font-normal text-gray-300 dark:text-gray-400 mb-4">
                            Ser o parceiro de confiança para empresas que buscam transformar suas ideias em soluções digitais inovadoras e de alta qualidade.
                        </p>
                    </div>
                    <br />
                    <div className="bg-[#0c0c0c] py-10 border-r-8 border-purple-900 rounded-lg p-8 hover:scale-105 duration-300">
                        <h2 className="text-white text-2xl font-extrabold mb-2">Nossa Missão</h2>
                        <p className="text-md font-normal text-gray-300 dark:text-gray-400 mb-4">
                            Oferecer soluções tecnológicas personalizadas que ajudem nossos clientes a se destacarem no mercado, utilizando as melhores práticas de desenvolvimento e design.
                        </p>
                    </div>
                </div>
                <div className="py-10">
                    <img className="h-full w-full object-cover" src={Visao} alt="/" />
                </div>
            </div>
        </div>
    );
}

export default Vissao;
