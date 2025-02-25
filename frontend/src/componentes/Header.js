import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/lb2.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-2 bg-gradient-to-b from-[#1C2751] to-transparent backdrop-blur-md z-50">
      {/* Logo */}
      <motion.img 
        src={logo} 
        alt="EstrategiasLB" 
        className="w-7 md:w-6" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      />
      
      {/* Enlaces de navegación */}
      <nav className="hidden md:flex space-x-6 text-white text-lg ">
        <Link to="/" className="hover:text-gray-300 transition text-sm">Inicio</Link>
        <Link to="/portafolios" className="hover:text-gray-300 transition text-sm">Portafolios</Link>
        <Link to="/inversiones" className="hover:text-gray-300 transition text-sm">Inversiones</Link>
        <Link to="/contacto" className="hover:text-gray-300 transition text-sm">Contacto</Link>
      </nav>
      
      {/* Botón de suscripción con efecto */}
      <motion.a 
        href="#suscripcion"
        className=" text-base px-5 py-2 bg-[#1C2751] text-white rounded-xl shadow-lg hover:bg-[#344C92] transition relative overflow-hidden"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.5 } }}
      >
        Suscribirse
      </motion.a>
    </header>
  );
}

