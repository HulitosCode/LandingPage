import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vissao from "./components/Vissao";
import Services from "./components/Services";
import Servicos from "./components/Servicos";
import Preco from "./components/Preco";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
        <Vissao />
        <Servicos />
        <Services />
        <Preco />
        <Cards />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
