import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserTie, FaBell, FaSyncAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function AsesoriaFinanciera() {
  const beneficios = [
    { icon: <FaChartLine className="text-3xl text-[#00A3FF]" />, text: "Diagnóstico Completo: Revisamos tus inversiones actuales." },
    { icon: <FaUserTie className="text-3xl text-[#00A3FF]" />, text: "Estrategia a Medida: Creamos un plan según tu perfil." },
    { icon: <FaBell className="text-3xl text-[#00A3FF]" />, text: "Seguimiento Constante: Te informamos sobre cambios clave." },
    { icon: <FaSyncAlt className="text-3xl text-[#00A3FF]" />, text: "Ajustes Proactivos: Adaptamos el plan al mercado." }
  ];

  const testimonios = [
    { texto: "Gracias a EstrategiasLB aprendí a diversificar mis inversiones y hoy veo crecimiento constante.", autor: "Ana, Emprendedora" },
    { texto: "Me ayudaron a armar un plan financiero que me permitió ahorrar para mi primera propiedad.", autor: "Carlos, Profesional Independiente" },
    { texto: "Con su asesoría entendí cómo funciona el mercado y ahora invierto con más confianza.", autor: "Lucía, Freelancer" }
  ];

  return (
    <section className="min-h-screen bg-[#f4f7fa] text-[#1C2751]">
      {/* Hero */}
      <motion.div 
        className="text-center py-16 bg-[#1C2751] text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Asesoría Financiera Personalizada</h1>
        <p className="mt-4 text-lg md:text-xl">Optimiza tu estrategia de inversión con el acompañamiento de expertos.</p>
        <motion.a 
          href="/contacto"
          className="mt-6 inline-block bg-[#00A3FF] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#344C92] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar Asesoría
        </motion.a>
      </motion.div>

      {/* Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-12 px-4 md:px-0">
        {beneficios.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            {item.icon}
            <p className="text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Proceso */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold">¿Cómo funciona?</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Evaluación Inicial", "Estrategia Personalizada", "Seguimiento Constante", "Ajustes y Resultados"].map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md w-64"
              whileHover={{ y: -5 }}
            >
              <p className="text-xl font-bold text-[#00A3FF]">{index + 1}.</p>
              <p className="mt-2">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonios (Slider Automático) */}
      <div className="bg-[#E8F1FA] py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Lo que dicen nuestros clientes</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="max-w-3xl mx-auto"
        >
          {testimonios.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center italic p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg">{`"${item.texto}"`}</p>
                <p className="mt-4 font-bold">{item.autor}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Final */}
      <motion.div 
        className="py-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">¿Listo para transformar tus inversiones?</h2>
        <a 
          href="/contacto" 
          className="mt-6 inline-block bg-[#00A3FF] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#344C92] transition"
        >
          Solicitar Asesoría
        </a>
      </motion.div>
    </section>
  );
}
