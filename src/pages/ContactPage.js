import React from "react";
import Negociacion from "../assets/negociacion.png";
import Telefono from "../assets/telefono.png";
import Correo from "../assets/correo.png";
import Ubicacion from "../assets/ubicacion.png";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 bg-gray-50 min-h-screen">
      {/* Columna 1: Datos de contacto */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg">
        <img
          src={Negociacion} // Reemplaza con tu imagen
          alt="Oficina"
          className="w-full h-100 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center mb-4">
          <img
            src={Ubicacion}
            className="h-6 w-6 text-blue-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          
          <p className="text-gray-700">Ubicación: Corrientes, Corrientes, Rivadavia 1578</p>
        </div>
        <div className="flex items-center mb-4">
        <img
            src={Correo}
            className="h-6 w-6 text-blue-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          <p className="text-gray-700">Correo: Estrategiaslb@gmail.com</p>
        </div>
        <div className="flex items-center">
        <img
            src={Telefono}
            className="h-6 w-6 text-blue-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          <p className="text-gray-700">Teléfono: +549348959119</p>
        </div>
      </div>

      {/* Columna 2: Formulario de Consulta */}
    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Consultas</h2>
        <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium mb-2">
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
          <label htmlFor="correo" className="block text-sm font-medium mb-2">
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
          <label htmlFor="telefono" className="block text-sm font-medium mb-2">
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
          <label htmlFor="consulta" className="block text-sm font-medium mb-2">
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
          <p className="block text-sm font-medium mb-2">¿Quieres hacer una entrevista o videollamada?</p>
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