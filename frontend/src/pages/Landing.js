import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Sustituye estas imágenes por las que quieras (como las de los celulares que aparecen en la ilustración)
import PhoneImage1 from "../assets/tablet.png";  // Puedes colocar una imagen con mockup de celular

export default function LandingPage() {
  return (
    <section className="relative w-full h-auto md:h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-gradient-to-r from-[#1C2751] to-[#0A183D] overflow-hidden">
      
      {/* Contenedor de imágenes (solo visible en pantallas medianas y grandes) */}
      <div className="hidden md:flex absolute left-5 md:left-16 top-1/4 space-x-4 z-10 ">
        <motion.img 
          src={PhoneImage1} 
          alt="Phone 1"
          className="h-[60vh] w-[60vh] drop-shadow-lg"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        />
        
      </div>

      {/* Contenido de texto - full width en móvil, mitad derecha en desktop */}
      <div className="ml-auto text-left w-full md:w-1/2 z-10">
        <motion.p 
          className="text-[#00A3FF] uppercase font-bold tracking-wider mb-2 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Estrategias LB
        </motion.p>

        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Invertí en Vos
        </motion.h1>

        <motion.p 
          className="text-base md:text-xl text-[#c9daff] mb-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Operá carteras de CEDEARs de las industrias más relevantes armadas por nuestros especialistas.
        </motion.p>

        {/* Botón centrado en móvil, alineado a la izquierda en desktop */}
        <motion.div 
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#inversiones"
            className="bg-[#00A3FF] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#008BCC] transition"
          >
            Invertir
          </a>
        </motion.div>
      </div>

      {/* En móvil, si quieres mostrar una imagen también */}
      <div className="md:hidden flex justify-center mt-8">
        <img src={PhoneImage1} alt="Phone Mockup" className="w-1/3 drop-shadow-lg"/>
      </div>
    </section>
  );
}

