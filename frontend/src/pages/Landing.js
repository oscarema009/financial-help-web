import React from "react";
import { motion } from "framer-motion";
import ChartSymbolCard from "../componentes/chartsymbol";
import MarketOverviewCard from "../componentes/MarketOverviewCard";
import News from "../componentes/News";

export default function LandingPage() {
  return (
    <section className="relative w-full flex flex-col xl:flex-row gap-10 px-4 md:px-12 py-8 bg-gradient-to-r from-[#1C2751] to-[#0A183D] overflow-hidden mt-24">
      {/* Columna izquierda: Título, descripción y gráfico */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center z-20 mb-8 xl:mb-0">
        <motion.h1
          className="font-fintech text-[#00A3FF] uppercase text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wider mb-2 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Estrategias LB
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Invertí en Vos
        </motion.h2>
        <motion.p
          className="text-base md:text-xl text-[#c9daff] mb-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Desde el equipo Estrategia LB te ofrecemos un servicio personalizado acorde
          a tu perfil y horizonte de inversión.
        </motion.p>
        <div className="w-full">
          <ChartSymbolCard />
        </div>
      </div>

      {/* Columna derecha: Cards MarketOverviewCard y News */}
      <div className="w-full xl:w-1/2 flex flex-col xl:flex-row gap-6 justify-center items-stretch">
        <div className="w-full xl:w-1/2 flex mb-6 xl:mb-0">
          <MarketOverviewCard />
        </div>
        <div className="w-full xl:w-1/2 flex">
          <News />
        </div>
      </div>
    </section>
  );
}



