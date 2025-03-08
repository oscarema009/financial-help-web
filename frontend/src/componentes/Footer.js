import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        
        {/* Datos de la empresa */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-[#00A3FF] font-semibold">EstrategiasLB</h2>
          <p className="text-sm text-gray-300">Asesoría financiera para un crecimiento seguro.</p>
          <p className="text-sm text-gray-400 mt-1">Email: estrategiaslb@gmail.com</p>
          <p className="text-sm text-gray-400">Tel: +5491138607950</p>
        </div>

        {/* Redes sociales (Íconos más grandes en desktop) */}
        <div className="flex space-x-6">
          <motion.a
            href="https://www.instagram.com/estrategiaslb/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-gray-300 hover:text-[#00A3FF] transition"
          >
            <Instagram size={32} className="md:size-18" />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/18znPR5fFm/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-gray-300 hover:text-[#00A3FF] transition"
          >
            <Facebook size={32} className="md:size-18" />
          </motion.a>

          <motion.a
            href="https://wa.me/5491138607950"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-gray-300 hover:text-[#00A3FF] transition"
          >
            <MessageCircle size={32} className="md:size-18" />
          </motion.a>
        </div>

        {/* Créditos del desarrollador */}
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            Página creada por{" "}
            <motion.a
              href="https://www.linkedin.com/in/oscaremmanuelvelazquez/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#00A3FF" }}
              className="text-[#00A3FF] font-semibold hover:underline"
            >
              Velazquez Oscar Emmanuel
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
}
