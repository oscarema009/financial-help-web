import React from "react";
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

const services = [
  {
    title: "Asesorías Financieras",
    description: "Optimiza tu estrategia de inversión con expertos en mercados financieros.",
    image: asesoriasImg,
    link: "/asesorias",
  },
  {
    title: "Gestión de Portafolios",
    description: "Administramos tu cartera de inversión con estrategias avanzadas.",
    image: portafoliosImg,
    link: "/portafolios",
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
    title: "Grupos de WhatsApp",
    description: "Accedé a nuestras comunidades de inversión y aprendizaje financiero.",
    image: gruposImg,
    link: "/grupos",
  },
];

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
            href="/contacto"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 inline-block"
          >
            Hablá con un asesor
          </a>
        </div>
      </div>

      {/* 🔹 Sección de tarjetas */}
      <div className="py-16 px-2 bg-gradient-to-b from-[#1C2751] to-[#344C92]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
    </div>
  );
};

export default Services;

