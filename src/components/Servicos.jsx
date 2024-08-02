import React from "react";

const Servicos = () => {
    return (
        <div id="servicos" className="py-16 text-white px-4 text-center">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-l from-pink-800 via to-purple-900">Serviços de Alta Qualidade para o Seu Negócio</h1>
                    <p>Descubra nossas soluções e peça sua cotação hoje mesmo.</p>
                </div>
                <button className="hover:scale-105 duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
                    <a href="https://wa.me/+258833064723" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                </button>
            </div>
        </div>
    );
}


export default Servicos;