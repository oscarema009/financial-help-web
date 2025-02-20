import React from "react";
import Perfil1 from "../assets/perfil 1.jpg";
import Perfil2 from "../assets/perfil 2.jpg";
import Perfil3 from "../assets/perfil 3.jpg";
import PerfilEmpresa from "../assets/perfil empresa.png";

const InvestmentProfiles = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8 text-blue-600">Perfiles de Inversión</h1>
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Riesgo Bajo */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
              <img
                src={Perfil1}
                alt="Riesgo Bajo"
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center text-blue-600">Riesgo Bajo</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
          El perfil conservador se caracteriza por una baja adversion al riesgo buscando la seguridad, y
al mismo tiempo asumir un menor nivel de riesgo en sus inversiones, es por eso que la
conformamos de esta manera. Ultimas inversiones:
            GOOG, INTC, PFE, DELL, SPY. Ganancias en el 2024: 21.5%.
          </p>
          {/* Nivel de Riesgo */}
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600">Nivel de Riesgo</p>
            <div className="bg-gray-200 w-full h-3 rounded-full mt-1">
              <div className="bg-blue-500 h-3 rounded-full w-1/3"></div>
            </div>
          </div>
          {/* Nivel de Ganancias */}
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600">Nivel de Ganancias</p>
            <div className="bg-gray-200 w-full h-3 rounded-full mt-1">
              <div className="bg-green-500 h-3 rounded-full w-1/3"></div>
            </div>
          </div>
        </div>

        {/* Card 2 - Riesgo Medio */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
              <img
                src={Perfil2}
                alt="Riesgo Medio"
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center text-blue-600">Riesgo Medio</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
          El perfil moderado busca un balance entre seguridad y crecimiento, asumiendo riesgos controlados para obtener rendimientos competitivos. Está diseñado para quienes prefieren diversificar sus opciones manteniendo un enfoque estratégico. Ultimas inversiones:
            QCOM, KO, INTC, AMD, AAL, PEP.Ganancias en el 2024: 84.6%.
          </p>
          {/* Nivel de Riesgo */}
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600">Nivel de Riesgo</p>
            <div className="bg-gray-200 w-full h-3 rounded-full mt-1">
              <div className="bg-blue-500 h-3 rounded-full w-2/3"></div>
            </div>
          </div>
          {/* Nivel de Ganancias */}
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600">Nivel de Ganancias</p>
            <div className="bg-gray-200 w-full h-3 rounded-full mt-1">
              <div className="bg-green-500 h-3 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Card 3 - Riesgo Alto */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
              <img
                src={Perfil3}
                alt="Riesgo Alto"
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center text-blue-600">Riesgo Alto</h2>
          <p className="text-sm text-gray-600 text-center mt-2">
          El perfil agresivo está enfocado en maximizar el rendimiento a través de estrategias de inversión arriesgadas. Ideal para quienes están dispuestos a asumir riesgos altos con el objetivo de obtener ganancias significativas a largo plazo. Ultimas inversiones:
            AMD, AAL, TSM, QCOM, SNOW.Ganancias en el 2024: 126%.
          </p>
          {/* Nivel de Riesgo */}
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600">Nivel de Riesgo</p>
            <div className="bg-gray-200 w-full h-3 rounded-full mt-1">
              <div className="bg-blue-500 h-3 rounded-full w-full"></div>
            </div>
          </div>
          {/* Nivel de Ganancias */}
          <div className="w-full mt-4">
            <p className="text-sm text-gray-600">Nivel de Ganancias</p>
            <div className="bg-gray-200 w-full h-3 rounded-full mt-1">
              <div className="bg-green-500 h-3 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 - PyMEs */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8 mx-auto max-w-md">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center">
            <img
              src={PerfilEmpresa}
              alt="PyMEs"
              className="rounded-full"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center text-blue-600">PyMEs</h2>
        <p className="text-sm text-gray-600 text-center mt-2">
        Este perfil está diseñado para pequeñas y medianas empresas que buscan maximizar su capital mediante estrategias financieras sólidas. Ofrecemos soluciones personalizadas que equilibran el crecimiento sostenible con la diversificación de activos, asegurando estabilidad y expansión en el mercado.
        </p>
        
      </div>
    </div>
  );
};

export default InvestmentProfiles;
