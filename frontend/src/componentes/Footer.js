import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import LogoCNV from "../assets/CNV_A.png"; // Cambia la ruta si está en otro lugar

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
        
        {/* Datos de la empresa */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-[#00A3FF] font-semibold">EstrategiasLB</h2>
          <p className="text-sm text-gray-300">Asesoría financiera para un crecimiento seguro.</p>
          <p className="text-sm text-gray-400 mt-1">Email: contacto@estrategiaslb.com.ar</p>
          <p className="text-sm text-gray-400">Tel: +5491138607950</p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6 md:py-8">
          <motion.a
            href="https://www.instagram.com/estrategiaslb/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-gray-300 hover:text-[#00A3FF] transition"
          >
            <Instagram size={32} />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/18znPR5fFm/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-gray-300 hover:text-[#00A3FF] transition"
          >
            <Facebook size={32} />
          </motion.a>

          <motion.a
            href="https://wa.me/5491138607950"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-gray-300 hover:text-[#00A3FF] transition"
          >
            <MessageCircle size={32} />
          </motion.a>
        </div>

        {/* Logo CNV */}
        <div className="flex justify md:justify">
          <img
            src={LogoCNV}
            alt="Logo CNV"
            className="w-20 md:w-24 object-contain"
          />
        </div>
      </div>

      {/* Créditos finales */}
      <div className=" border-t border-gray-800 pt-4 text-right text-sm text-gray-500">
        <div className="container mx-auto px-4">
          Página creada por{" "}
          <motion.a
            href="https://www.linkedin.com/in/oscaremmanuelvelazquez/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[#00A3FF] font-semibold hover:underline"
          >
            Velazquez Oscar Emmanuel
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
