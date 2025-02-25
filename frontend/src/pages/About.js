import React from "react";
import { motion } from "framer-motion";
import Nosotros1 from "../assets/nosotros1.png";
import Nosotros2 from "../assets/nosotros2.png";
import Nosotros3 from "../assets/nosotros3.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center px-8 py-16 bg-[#5572B2] min-h-screen">
      <h2 className="text-4xl font-bold text-[#1C2751] mb-12">Sobre Nosotros</h2>

      {/* Sección 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mb-12 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 w-full p-6 text-justify">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Invertir con EstrategiasLB
          </h3>
          <p className="text-white">
            En EstrategiasLB, nos especializamos en la gestión estratégica de inversiones y el desarrollo de negocios en los mercados financieros. Nuestro enfoque está orientado a maximizar oportunidades mediante un análisis riguroso y una planificación acorde al perfil de cada inversor. Acompañamos a nuestros clientes con un asesoramiento integral, optimizando su toma de decisiones en función de sus objetivos financieros. Operamos con una amplia variedad de instrumentos que cotizan en Bolsas y Mercados Argentinos (BYMA), bajo la regulación de la Comisión Nacional de Valores (CNV).
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={Nosotros1} alt="Inversión estratégica" className="w-4/5 md:w-3/5 rounded-lg shadow-lg" />
        </div>
      </motion.div>

      {/* Sección 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center justify-between mb-12 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 w-full p-6 text-justify">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Visión
          </h3>
          <p className="text-white">
            Ser la firma líder en asesoramiento financiero y estrategias de inversión en Argentina, reconocida por nuestra transparencia, innovación y capacidad para generar valor sostenible a nuestros clientes. Buscamos consolidarnos como un referente en el mercado de capitales, brindando soluciones eficientes y personalizadas que permitan a nuestros inversores alcanzar sus objetivos financieros con confianza y seguridad.
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={Nosotros2} alt="Visión de crecimiento" className="w-4/5 md:w-3/5 rounded-lg shadow-lg" />
        </div>
      </motion.div>

      {/* Sección 3 */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 w-full p-6 text-justify">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Nuestros Valores
          </h3>
          <ul className="text-white list-disc list-inside">
            <li><strong>Transparencia:</strong> Brindamos información clara y honesta para que nuestros clientes tomen decisiones con confianza.</li>
            <li><strong>Compromiso:</strong> Nos involucramos en cada inversión con responsabilidad, priorizando los intereses de nuestros clientes.</li>
            <li><strong>Excelencia:</strong> Aplicamos los más altos estándares de calidad en nuestras estrategias y asesoramiento financiero.</li>
            <li><strong>Innovación:</strong> Incorporamos herramientas y metodologías avanzadas para optimizar las oportunidades en los mercados.</li>
            <li><strong>Crecimiento Sostenible:</strong> Fomentamos inversiones inteligentes y sostenibles, buscando resultados a largo plazo.</li>
            <li><strong>Educación Financiera:</strong> Promovemos el conocimiento para que cada inversor pueda desarrollar su potencial y autonomía.</li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={Nosotros3} alt="Nuestros valores" className="w-4/5 md:w-3/5 rounded-lg shadow-lg" />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
