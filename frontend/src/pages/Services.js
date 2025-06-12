import React from "react";
import { Link } from "react-router-dom";
import Card from "../componentes/Card";
import Personas from "../assets/personas.jpg";

// Importar imágenes de servicios
import asesoriasImg from "../assets/hombre.png";
import administracionImg from "../assets/presupuesto.png";
import portafoliosImg from "../assets/economico.png";
import capacitacionesImg from "../assets/capacitacion.png";
import cuentaExtranjeraImg from "../assets/alrededor-del-mundo.png";
import pymesImg from "../assets/empresa.png";
import gruposImg from "../assets/grupo-de-chat.png";

import Logo1 from "../assets/cocos.png";
import Logo2 from "../assets/iol.png";
import Logo3 from "../assets/interactive.png";
import Logo4 from "../assets/balanz.png";
import Logo5 from "../assets/bulls markets.png";

const services = [
  {
    title: "Asesorías Financieras",
    description: "Optimiza tu estrategia de inversión con expertos en mercados financieros.",
    image: asesoriasImg,
    link: "/asesoria-financiera",
  },
  {
    title: "Gestión de Portafolios",
    description: "Administramos tu cartera de inversión con estrategias avanzadas.",
    image: portafoliosImg,
    link: "/gestion-portafolios",
  },
  //{
    //title: "Capacitaciones Privadas",
    //description: "Aprendé estrategias de inversión con sesiones exclusivas y personalizadas.",
    //image: capacitacionesImg,
    //link: "/capacitaciones",
  //},
  //{
    //title: "Apertura de Cuenta Extranjera",
    //description: "Accedé a mercados internacionales con una cuenta en el exterior.",
    //image: cuentaExtranjeraImg,
    //link: "/cuenta-extranjera",
  //},
  {
    title: "Servicios para PyMEs",
    description: "Soluciones de financiamiento y optimización para tu empresa.",
    image: pymesImg,
    link: "/pymes",
  },
  {
    title: "Comunidad de WhatsApp",
    description: "Accedé a nuestras comunidades de inversión y aprendizaje financiero.",
    image: gruposImg,
    link: "/grupos",
  },
];

const whatsappMessage = encodeURIComponent(
  "¡Hola! Gracias por contactarnos. ¿En qué podemos ayudarte? ¿Estás interesado en alguno de nuestros servicios?"
);

const whatsappURL = `https://wa.me/+5491138607950?text=${whatsappMessage}`;

const Services = () => {
  return (
    <div className="min-h-screen ">
      {/* 🔹 Encabezado con imagen de fondo */}
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center text-white text-center"
        style={{
          backgroundImage: `url(${Personas})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Potenciá tus inversiones con Estrategias LB</h1>
          <a
            href={whatsappURL}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 inline-block"
          >
            Hablá con un asesor
          </a>
        </div>
      </div>

      {/* 🔹 Sección de tarjetas */}
      <div className="py-8 px-4 bg-gradient-to-b from-[#1C2751] to-[#344C92]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image} // Enviar la imagen a la tarjeta
              buttonText="Más Información"
              onButtonClick={() => (window.location.href = service.link)}
            />
          ))}
        </div>
      </div>

          {/* ✅ Logos de empresas – fuera del grid de tarjetas */}
      <div className="bg-[#344C92] py-4">
        <h3 className="text-2xl font-bold mb-6 text-center text-white">
          Trabajan con nosotros
        </h3>
        <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center ">
          {[Logo1, Logo2, Logo3, Logo4, Logo5].map((logo, index) => (
        <div
          key={index}
          className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden"
        >
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-full h-full object-contain p-2"
          />
        </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default Services;

