import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vissao from "./components/Vissao";
import Services from "./components/Services";
import Servicos from "./components/Servicos";
import Preco from "./components/Preco";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ScrollUpButton from './components/ScrollUpButton'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
   


function App() {

  useEffect(() => {
    AOS.init({duration: 2000});
}, []);

  return (
    <BrowserRouter>
        <Navbar />
        <Hero />
        <Vissao />
        <Servicos />
        <Services />
        <Preco />
        <Cards />
        <ScrollUpButton />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
