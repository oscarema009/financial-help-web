import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/lb2.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Detecta si scrolleaste 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1C2751] shadow-lg"
          : "bg-gradient-to-r from-[#1C2751] to-[#0A183D]"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="EstrategiasLB"
          className="w-10 md:w-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex space-x-6 text-white text-lg font-medium">
          <Link to="/" className="hover:text-[#00A3FF] transition">
            Inicio
          </Link>
          <Link to="/AboutUs" className="hover:text-[#00A3FF] transition">
            Nosotros
          </Link>
          <Link to="/Profiles" className="hover:text-[#00A3FF] transition">
            Perfiles
          </Link>
          <Link to="/Services" className="hover:text-[#00A3FF] transition">
            Servicios
          </Link>
          <Link to="/AdminCartera" className="hover:text-[#00A3FF] transition">
            Gestion de Portafolio
          </Link>
          <Link to="/Pymes" className="hover:text-[#00A3FF] transition">
            Pymes
          </Link>
          <Link to="/ComunidadWhatsApp" className="hover:text-[#00A3FF] transition">
            Comunidad
          </Link>
          <Link to="/ContactPage" className="hover:text-[#00A3FF] transition">
            Contacto
          </Link>
        </nav>

        {/* Botón de suscripción */}
        <motion.a
          href="#suscripcion"
          className="text-base font-bold px-5 py-2 bg-[#00A3FF] text-white rounded-xl shadow-lg hover:bg-[#344C92] transition relative overflow-hidden"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.5 } }}
        >
          Suscribirse
        </motion.a>
      </div>
    </header>
  );
}

