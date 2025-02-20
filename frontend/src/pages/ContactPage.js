import React, { useState } from "react";
import Negociacion from "../assets/negociacion.png";
import Telefono from "../assets/telefono.png";
import Correo from "../assets/correo.png";
import Ubicacion from "../assets/ubicacion.png";
import Whatsapp from "../assets/whatsapp.png";
import axios from "axios"; // Instalarlo con npm install axios



const ContactPage = () => {
  // Definir estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      nombre,
      correo,
      telefono,
      consulta,
    };
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Correo enviado correctamente.");
      } else {
        alert("Error al enviar el correo. Intenta nuevamente.");
        console.error("Error del servidor:", result);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error al conectar con el servidor.");
    }
  };
  



  const whatsappMessage = encodeURIComponent(
    "¡Hola! Gracias por contactarnos. ¿En qué podemos ayudarte? ¿Estás interesado en alguno de nuestros servicios?"
  );

  const whatsappURL = `https://wa.me/+5493794881936?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 bg-gray-50 min-h-screen relative">
      {/* Columna 1: Datos de contacto */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg relative">
        <img
          src={Negociacion}
          alt="Oficina"
          className="w-full h-100 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center mb-4">
          <img
            src={Ubicacion}
            className="h-6 w-6 text-blue-600 mr-2"
            alt="Ubicación"
          />
          <p className="text-gray-700">
            Ubicación: Corrientes, Corrientes, Rivadavia 1578
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={Correo}
            className="h-6 w-6 text-blue-600 mr-2"
            alt="Correo"
          />
          <p className="text-gray-700">Correo: Estrategiaslb@gmail.com</p>
        </div>
        <div className="flex items-center">
          <img
            src={Telefono}
            className="h-6 w-6 text-blue-600 mr-2"
            alt="Teléfono"
          />
          <p className="text-gray-700">Teléfono: +549348959119</p>
        </div>

        {/* Botón flotante de WhatsApp */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-[-25px] right-[-25px] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 animate-pulse"
        >
          <img
            src={Whatsapp}
            className="h-10 w-10 text-blue-600 mr-2"
            alt="Teléfono"
          />
        </a>
      </div>

      {/* Columna 2: Formulario de Consulta */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Consultas</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium mb-2"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Escribe tu nombre"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="correo"
              className="block text-sm font-medium mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Escribe tu correo"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium mb-2"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Escribe tu teléfono"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="consulta"
              className="block text-sm font-medium mb-2"
            >
              Consulta
            </label>
            <textarea
              id="consulta"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Escribe tu consulta"
            ></textarea>
          </div>

          <div className="mb-4">
            <p className="block text-sm font-medium mb-2">
              ¿Quieres hacer una entrevista o videollamada?
            </p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="opcion"
                  value="si"
                  className="mr-2"
                />
                Sí
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="opcion"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
