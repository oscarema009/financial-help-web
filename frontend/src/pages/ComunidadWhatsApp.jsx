import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaBell, FaUsers, FaGlobe } from 'react-icons/fa';

export default function ComunidadWhatsApp() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1C2751] to-[#344C92] py-16 px-6 md:px-20 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Mockup del chat */}
        <motion.div
          className="relative bg-white text-black p-4 rounded-3xl shadow-xl w-full max-w-[400px] mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-gray-500 text-center">Grupo: EstrategiasLB 💼</p>
          <div className="space-y-3 mt-3">
            <div className="bg-[#f1f5f9] p-2 rounded-lg text-sm">
              📢 Nueva alerta: Nvidia sube 3.5% tras presentar resultados.
            </div>
            <div className="bg-[#f1f5f9] p-2 rounded-lg text-sm">
              📊 ¿Qué opinan del nuevo ETF de Bitcoin? 🤔
            </div>
            <div className="bg-[#D1FAE5] p-2 rounded-lg text-sm self-end text-right">
              Buen dato, gracias por avisar!
            </div>
          </div>
        </motion.div>

        {/* Contenido textual y CTA */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Unite a nuestra comunidad de inversores
          </h2>
          <p className="text-lg text-[#c9daff]">
            Recibí alertas de inversión, noticias clave y compartí ideas con otros inversores 
            en nuestro exclusivo grupo de WhatsApp.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <FaBell className="text-[#82A1D1]" size={24} />
              <p>Alertas en tiempo real</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaGlobe className="text-[#82A1D1]" size={24} />
              <p>Noticias clave</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaUsers className="text-[#82A1D1]" size={24} />
              <p>Comunidad activa</p>
            </div>
          </div>
          <motion.a
            href="https://chat.whatsapp.com/L7tt9GjgqHz6ulMzAdJqR3"
            target="_blank"
            className="inline-flex items-center space-x-3 bg-[#25D366] text-[#1C2751] font-bold text-lg py-3 px-6 rounded-full hover:bg-[#128C7E] transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp size={24} />
            <span>Unirme al Grupo</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
