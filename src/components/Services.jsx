import React from "react";
import Sistema from "../assets/imgs/p7.jpg";
import Site from "../assets/imgs/p6.jpg";
import Design from "../assets/imgs/p4.jpg";

const Services = () => {
    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="grid md:grid-cols-3 max-w-screen-xl gap-8 mx-auto p-4">
                
                <div className="hover:scale-105 duration-300 max-w-sm border border-blue-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={Sistema} alt="Desenvolvimento de Sistemas Web" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">Desenvolvimento de Sistemas Web</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-200">Transformamos suas ideias em aplicativos e plataformas web robustos e escaláveis. Desde sistemas complexos até sites intuitivos, garantimos uma experiência de usuário fluida e eficaz.</p>
                    </div>
                </div>

                <div className="hover:scale-105 duration-300 max-w-sm border border-purple-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={Site} alt="Criação de Sites" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">Criação de Sites</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-200">Criamos sites modernos e atraentes que capturam a essência da sua marca. Desde o design até a implementação, cada detalhe é cuidadosamente considerado para criar uma presença online impactante.</p>
                    </div>
                </div>

                <div className="hover:scale-105 duration-300 max-w-sm border border-pink-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={Design} alt="Identidade Visual" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">Identidade Visual</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-200">Desenvolvemos uma identidade visual que comunica eficazmente sua marca. Desde logotipos até paletas de cores, garantimos que todos os elementos visuais sejam coesos e impactantes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
