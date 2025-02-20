import React from "react";
import Nosotros1 from "../assets/nosotros1.png";
import Nosotros2 from "../assets/nosotros2.png";
import Nosotros3 from "../assets/nosotros3.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50 min-h-screen">
      {/* Columna Izquierda: Texto */}
      <div className="md:w-1/2 w-full p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre Nosotros</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Invertir en Bolsa con EstrategiasLB
          </h3>
          <p className="text-gray-600">
            En EstrategiasLB, nos especializamos en la gestión estratégica de inversiones y el desarrollo de negocios en los mercados financieros. Nuestro enfoque está orientado a maximizar oportunidades mediante un análisis riguroso y una planificación acorde al perfil de cada inversor. Acompañamos a nuestros clientes con un asesoramiento integral, optimizando su toma de decisiones en función de sus objetivos financieros. Operamos con una amplia variedad de instrumentos que cotizan en Bolsas y Mercados Argentinos (BYMA), bajo la regulación de la Comisión Nacional de Valores (CNV).
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Visión de EstrategiasLB
          </h3>
          <p className="text-gray-600">
            Ser la firma líder en asesoramiento financiero y estrategias de inversión en Argentina, reconocida por nuestra transparencia, innovación y capacidad para generar valor sostenible a nuestros clientes. Buscamos consolidarnos como un referente en el mercado de capitales, brindando soluciones eficientes y personalizadas que permitan a nuestros inversores alcanzar sus objetivos financieros con confianza y seguridad. Nos comprometemos a evolucionar constantemente, integrando nuevas tecnologías y metodologías de análisis que potencien la toma de decisiones estratégicas en un entorno dinámico y desafiante.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            Nuestros Valores en EstrategiasLB
          </h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li><strong>Transparencia:</strong> Brindamos información clara y honesta para que nuestros clientes tomen decisiones con confianza.</li>
            <li><strong>Compromiso:</strong> Nos involucramos en cada inversión con responsabilidad, priorizando los intereses de nuestros clientes.</li>
            <li><strong>Excelencia:</strong> Aplicamos los más altos estándares de calidad en nuestras estrategias y asesoramiento financiero.</li>
            <li><strong>Innovación:</strong> Incorporamos herramientas y metodologías avanzadas para optimizar las oportunidades en los mercados.</li>
            <li><strong>Crecimiento Sostenible:</strong> Fomentamos inversiones inteligentes y sostenibles, buscando resultados a largo plazo.</li>
            <li><strong>Educación Financiera:</strong> Promovemos el conocimiento para que cada inversor pueda desarrollar su potencial y autonomía.</li>
          </ul>
        </div>
      </div>

      {/* Columna Derecha: Imágenes en combinación vertical */}
      <div className="md:w-1/3 w-full p-6 flex flex-col items-center gap-1">
        <img src={Nosotros1} alt="Inversión estratégica" className="w-4/5 md:w-3/5 rounded-lg shadow-lg" />
        <img src={Nosotros2} alt="Visión de crecimiento" className="w-4/5 md:w-3/5 rounded-lg shadow-lg " />
        <img src={Nosotros3} alt="Nuestros valores" className="w-4/5 md:w-3/5 rounded-lg shadow-lg " />
      </div>
    </div>
  );
};

export default AboutUs;
