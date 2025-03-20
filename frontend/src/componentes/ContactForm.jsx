import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    consulta: "",
    entrevista: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, correo, telefono, consulta, entrevista } = formData;
    const phoneNumber = "+5491138607950"; // Reemplaza con tu número de WhatsApp

    if (!nombre || !telefono || !consulta) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Mensaje que se enviará a WhatsApp
    const whatsappMessage = `Hola! Mi nombre es ${nombre}. Mi correo es ${correo}. Mi teléfono es ${telefono}. Consulta: ${consulta}. ¿Entrevista o videollamada?: ${entrevista}.`;

    // Genera el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Consultas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Correo</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Escribe tu correo"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Escribe tu teléfono"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Consulta</label>
          <textarea
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Escribe tu consulta"
            required
          />
        </div>

        <div className="mb-4">
          <p className="block text-sm font-medium mb-2">
            ¿Quieres hacer una entrevista o videollamada?
          </p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="entrevista"
                value="Sí"
                checked={formData.entrevista === "Sí"}
                onChange={handleChange}
                className="mr-2"
              />
              Sí
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="entrevista"
                value="No"
                checked={formData.entrevista === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
