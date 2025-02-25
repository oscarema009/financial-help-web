import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import investmentImage from "../assets/dollar.png";
import extraImage from "../assets/2.png";

export default function LandingPage() {
  return (
    <section className="relative w-full h-screen flex items-center px-6 md:px-12 bg-[#5572B2]">
      {/* Imagen flotante a la izquierda */}
      <motion.img 
        src={investmentImage} 
        alt="Investment" 
        className="w-1/4 max-w-md absolute left-10 md:left-20 top-1/4 transform -translate-y-1/2"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      />

      {/* Contenido de texto y botones */}
      <div className="text-left w-full md:w-2/3 flex flex-col items-start ml-auto pr-10 md:pr-20">
        <motion.h1 
          className="text-6xl md:text-5xl font-bold text-[#1C2751] mb-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Invirtiendo con confianza,
          <span className="text-white"> aseguramos tu crecimiento económico.</span>
        </motion.h1>
        <motion.p 
          className="text-x2 md:text-2xl text-[#1C2751] mb-8 font-bold"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Estrategias LB te ayuda a construir un futuro financiero sólido con inversiones seguras.
        </motion.p>
        
        {/* Botones */}
        <div className="flex space-x-6">
          <motion.a 
            href="#inversiones" 
            className="px-7 py-4 bg-[#1C2751] text-white text-2xl font-semibold rounded-lg shadow-lg hover:bg-[#344C92] transition"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Inversiones
          </motion.a>
          <motion.a 
            href="#portafolios" 
            className="px-8 py-4 bg-[#344C92] text-white text-2xl font-semibold rounded-lg shadow-lg hover:bg-[#82A1D1] transition"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Portafolios
          </motion.a>
        </div>
      </div>
      
      {/* Imagen en la parte inferior derecha */}
      <motion.img 
        src={extraImage} 
        alt="Extra Investment" 
        className="w-1/3  absolute bottom-10 right-10 rounded-2xl "
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
    </section>
  );
}





