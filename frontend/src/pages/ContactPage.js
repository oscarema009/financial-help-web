import React from "react";
import ContactForm from "../componentes/ContactForm"; // Importamos el componente ContactForm
import Negociacion from "../assets/negociacion.png";
import Telefono from "../assets/telefono.png";
import Correo from "../assets/correo.png";
import Ubicacion from "../assets/ubicacion.png";
import Whatsapp from "../assets/whatsapp.png";

const ContactPage = () => {
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Estoy interesado en sus servicios y me gustaría obtener más información. ¿Podrían asesorarme?"
  );

  const whatsappURL = `https://wa.me/+5491138607950?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 pb-12 bg-[#1C2751]  relative mt-16">
      {/* Columna 1: Datos de contacto */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg relative">
        <img src={Negociacion} alt="Oficina" className="w-full h-100 object-cover rounded-lg mb-4" />
        <div className="flex items-center mb-4">
          <img src={Ubicacion} className="h-6 w-6 text-blue-600 mr-2" alt="Ubicación" />
          <p className="text-gray-700">Ubicación: Corrientes, Corrientes, Rivadavia 1578</p>
        </div>
        <div className="flex items-center mb-4">
          <img src={Correo} className="h-6 w-6 text-blue-600 mr-2" alt="Correo" />
          <p className="text-gray-700">Correo: contacto@estrategiaslb.com.ar</p>
        </div>
        <div className="flex items-center">
          <img src={Telefono} className="h-6 w-6 text-blue-600 mr-2" alt="Teléfono" />
          <p className="text-gray-700">Teléfono: +5491158504752</p>
        </div>

        {/* Botón flotante de WhatsApp */}
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
          className="absolute bottom-[-25px] right-[-25px] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 animate-pulse">
          <img src={Whatsapp} className="h-10 w-10" alt="WhatsApp" />
        </a>
      </div>

      {/* Columna 2: Formulario de Contacto */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
