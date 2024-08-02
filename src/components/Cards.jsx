import React from "react";

const Cards = () => {
    return (
        <div className='w-full bg-white py-[10rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 p-4'>
                <div data-aos="zoom-in" className='w-full shadow-2xl border-2 border-blue-600 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Desenvolvimento de Sistemas Web</h2>
                    <p className='text-center text-4xl font-bold'>Preço Por Negociação</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Requisitos de Negócio</p>
                        <p className='py-2 border-b mx-8'>Requisitos Funcionais</p>
                        <p className='py-2 border-b mx-8'>Requisitos Não Funcionais</p>
                        <p className='py-2 border-b mx-8'>Requisitos Técnicos</p>
                        <p className='py-2 border-b mx-8'>Requisitos de Projeto e Design</p>
                        <p className='py-2 border-b mx-8'>Requisitos de Implementação</p>
                        <p className='py-2 border-b mx-8'>Requisitos de Testes e Qualidade</p>
                        <p className='py-2 border-b mx-8'>Requisitos de Implantação</p>
                        <p className='py-2 border-b mx-8'>Requisitos de Manutenção e Suporte</p>
                    </div>
                    <button className='bg-blue-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        <a href="https://wa.me/+258833064723" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </button>
                </div>
                <div data-aos="zoom-out" className='w-full shadow-2xl border-2 border-purple-600 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Criação de sites</h2>
                    <p className='text-center text-4xl font-bold'>35.000,00 MZN</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Site Responsivo</p>
                        <p className='py-2 border-b mx-8'>Página Inicial</p>
                        <p className='py-2 border-b mx-8'>Até 5 Páginas Adicionais</p>
                        <p className='py-2 border-b mx-8'>Formulário de Contato</p>
                        <p className='py-2 border-b mx-8'>Design Personalizado</p>
                        <p className='py-2 border-b mx-8'>Funcionalidades Personalizadas</p>
                        <p className='py-2 border-b mx-8'>Identidade Visual Completa</p>
                        <p className='py-2 border-b mx-8'>Consultoria de Marketing Digital</p>
                        <p className='py-2 border-b mx-8'>SEO Avançado</p>
                        <p className='py-2 border-b mx-8'>Manutenção e Atualizações por 3 Meses</p>
                        <p className='py-2 border-b mx-8'>1 Ano de Dominio Gratuito</p>
                        <p className='py-2 border-b mx-8'>1 Ano de Hospedagem Gratuita</p>
                    </div>
                    <button className='bg-purple-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                        <a href="https://wa.me/+258833064723" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </button>
                </div>
                <div data-aos="zoom-in" className='w-full border-2 border-pink-600 shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <h2 className='text-2xl font-bold text-center py-8'>Identidade Visual</h2>
                    <p className='text-center text-4xl font-bold'>Preço Por Serviço</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Logotipo</p>
                        <p className='py-2 border-b mx-8'>Cartões de Visita</p>
                        <p className='py-2 border-b mx-8'>Papel Timbrado</p>
                        <p className='py-2 border-b mx-8'>Envelopes</p>
                        <p className='py-2 border-b mx-8'>Gestão de Redes Sociais</p>
                        <p className='py-2 border-b mx-8'>Materiais Digitais</p>
                        <p className='py-2 border-b mx-8'>Brand Book (Manual da Marca)</p>
                        <p className='py-2 border-b mx-8'>Design de Embalagens</p>
                        <p className='py-2 border-b mx-8'>Rótulos</p>
                        <p className='py-2 border-b mx-8'>Brindes</p>
                        <p className='py-2 border-b mx-8'>Banners e Faixas</p>
                    </div>
                    <button className='bg-pink-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>
                        <a href="https://wa.me/+258833064723" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cards;