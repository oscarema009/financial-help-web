import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import inversionesBg from "../assets/estrategias.jpg";

const faqs = [
  { question: "¿Qué es el mandato discrecional?", answer: "Es un servicio donde gestionamos tu cartera por vos, tomando decisiones estratégicas para optimizar tu inversión." },
  { question: "¿Es seguro el servicio?", answer: "Sí, trabajamos con plataformas reguladas y tomamos decisiones basadas en análisis de mercado." },
  { question: "¿Cuánto capital necesito?", answer: "No hay un mínimo fijo, pero recomendamos un monto adecuado según el perfil de inversión." }
];

const AdminCartera = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#1C2751]">
      {/* Encabezado con imagen de fondo */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${inversionesBg})` }}

      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold">Tu Dinero, Nuestra Estrategia</h1>
          <p className="mt-2 text-lg">Nosotros nos ocupamos de tus inversiones, vos disfrutá de los resultados.</p>
          <a
            href="/contacto"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 inline-block"
          >
            Quiero que gestionen mi cartera
          </a>
        </div>
      </div>

      {/* Sección de información */}
      <div className="py-16 px-6 bg-[#1C2751] text-center">
        <h2 className="text-3xl font-semibold text-white">¿Por Qué Necesitás Administración de Cartera?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          {[
            "Ahorrar no es suficiente. Tu capital pierde valor si no lo invertís bien.",
            "No tenés tiempo para operar. Nosotros tomamos decisiones estratégicas por vos.",
            "Las oportunidades no esperan. Compramos y vendemos en tiempo real."
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pasos */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">Un Proceso en 3 Pasos</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          {["Abrí tu cuenta Broker", "Dás conformidad con un solo clic.", "Nosotros ejecutamos por vos."].map((step, index) => (
            <motion.div
              key={index}
              className="p-6 bg-blue-600 text-white rounded-lg w-full sm:w-1/3"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Beneficios */}
      <div className="py-16 px-6 bg-[#1C2751] text-center">
        <h2 className="text-3xl font-semibold text-white">Beneficios de Nuestra Gestión Profesional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
          {["Análisis estratégico de mercado.", "Ejecutamos en tiempo real.", "Optimizamos cartera sin que pierdas tiempo.", "Minimizamos riesgos con gestión activa."].map((benefit, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-2xl" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">Preguntas Frecuentes</h2>
        <div className="max-w-4xl mx-auto mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-4">
              <button
                className="w-full text-left text-lg text-blue-600 font-medium flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-white text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && <p className="mt-2 text-white">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Dejá que hagamos crecer tu capital</h2>
        <p className="mt-2 text-lg">Contactanos hoy y empezá a invertir sin preocupaciones.</p>
        <a
          href="/contacto"
          className="mt-4 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 inline-block hover:bg-gray-200"
        >
          Hablar con un asesor
        </a>
      </div>
    </div>
  );
};

export default AdminCartera;
