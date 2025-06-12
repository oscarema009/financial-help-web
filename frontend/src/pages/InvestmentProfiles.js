import React from "react";
import ModeradoCard from "../componentes/ModeradoCard";
import ArriesgadoCard from "../componentes/ArriesgadoCard";
import ArriesgadoArgMundoCard from "../componentes/ArriesgadoArgMundoCard";
import CriptoCard from "../componentes/CriptoCard";

const InvestmentProfiles = () => {
  return (
    <div className="px-4 md:px-8 bg-gradient-to-b from-[#1C2751] to-[#344C92] py-8 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8 text-white">Nuestros Perfiles de Inversión</h1>
      {/* Cards de perfiles de inversión */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ModeradoCard />
        <ArriesgadoCard />
        <ArriesgadoArgMundoCard />
        <CriptoCard />
      </div>
    </div>
  );
};

export default InvestmentProfiles;
