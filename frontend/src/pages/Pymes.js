import React from "react";
import { FaMoneyBillWave, FaChartLine, FaRocket } from "react-icons/fa";
import PymeImage from "../assets/pymes.jpg";


import { motion } from "framer-motion";

const Pymes = () => {
  return (
    <div className="bg-[#1C2751] min-h-screen px-6 py-16 mt-16">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Beneficios de las PyMEs con Estrategias LB
      </h2>

      {/* Sección Inicial */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
        <motion.img 
          src={PymeImage} 
          alt="PyMEs y financiamiento"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          className="md:w-1/2 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Financiamiento más accesible y flexible</h3>
          <p className="text-lg text-white">
            Si tu PyME aún depende solo de los bancos, es posible que estés pagando de más. Con el mercado de capitales,
            accedé a tasas más bajas, mayor flexibilidad y beneficios fiscales que optimizan tu estructura financiera.
          </p>
        </motion.div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Alternativas de inversión */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaMoneyBillWave className="text-5xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">💰 Alternativas de inversión y financiamiento</h3>
          
          <ul className="text-gray-600 text-left mt-3 list-disc list-inside">
            <li> Cheques de Pago Diferido </li>
            <li> Obligaciones Negociables PyME </li>
            <li> Pagarés Bursátiles </li>
            <li> Facturas de Crédito Electrónicas </li>
          </ul>
        </motion.div>

        {/* Beneficios Fiscales */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaChartLine className="text-5xl text-green-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">📉 Beneficios fiscales exclusivos</h3>
          <ul className="text-gray-600 text-left mt-3 list-disc list-inside">
            <li> Exención del Impuesto a los Débitos y Créditos.</li>
            <li> Mejor tratamiento fiscal en ciertos instrumentos.</li>
            <li> Financiamiento sin afectar tu calificación bancaria.</li>
          </ul>
        </motion.div>

        {/* Facilidad y Agilidad */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaRocket className="text-5xl text-red-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">⚡ Facilidad y agilidad en cada operación</h3>
          <ul className="text-gray-600 text-left mt-3 list-disc list-inside">
            <li> Apertura de cuenta 100% digital.</li>
            <li> Menos requisitos que en un banco.</li>
            <li> Operá desde cualquier lugar con plataformas online.</li>
          </ul>
        </motion.div>
      </div>

      {/* Mensaje Final */}
      <motion.div 
        className="mt-12 text-center text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl text-white font-semibold">🚀 Impulsá tu PyME con Estrategias LB</h3>
        <p className="text-lg text-white mt-2">
          El mercado de capitales es la clave para financiar tu empresa de manera eficiente, reduciendo costos y maximizando oportunidades.
        </p>
        <p className="text-lg font-semibold mt-2 text-blue-600">¡Hacé crecer tu negocio con nosotros!</p>
      </motion.div>
    </div>
  );
};

export default Pymes;
