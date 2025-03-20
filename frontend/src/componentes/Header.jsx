import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Íconos para el menú hamburguesa
import logo from "../assets/LBlogo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          className="w-10 md:w-20 md:rounded-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Menú en desktop */}
        <nav className="hidden md:flex space-x-6 text-white text-lg font-medium">
          <Link to="/" className="hover:text-[#00A3FF] transition">Inicio</Link>
          <Link to="/servicios" className="hover:text-[#00A3FF] transition">Servicios</Link>
          <Link to="/asesoria-financiera" className="hover:text-[#00A3FF] transition">Asesoría</Link>
          <Link to="/gestion-portafolios" className="hover:text-[#00A3FF] transition">Gestión de Portafolio</Link>
          <Link to="/Pymes" className="hover:text-[#00A3FF] transition">Pymes</Link>
          <Link to="/grupos" className="hover:text-[#00A3FF] transition">Comunidad</Link>
          <Link to="/Contacto" className="hover:text-[#00A3FF] transition">Contacto</Link>
        </nav>

        {/* Botón de menú hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#1C2751] absolute top-16 left-0 w-full shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col text-white text-lg font-medium py-4">
            <Link to="/" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/servicios" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/asesoria-financiera" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Asesoría</Link>
            <Link to="/gestion-portafolios" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Gestión de Portafolio</Link>
            <Link to="/Pymes" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Pymes</Link>
            <Link to="/grupos" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Comunidad</Link>
            <Link to="/Contacto" className="py-2 text-center hover:bg-[#00A3FF] transition" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
