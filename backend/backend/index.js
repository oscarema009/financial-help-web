const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Asegura que Express entienda JSON

// Ruta para enviar el correo
app.post("/send-email", async (req, res) => {
  try {
    const { nombre, correo, telefono, consulta } = req.body;

    if (!nombre || !correo || !telefono || !consulta) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "oscar.industial@gmail.com",
        pass: "dsru qypd vrie hpzz",
      },
    });

    const mailOptions = {
      from: "oscar.industial@gmail.com",
      to: "oscar.industial@gmail.com",
      subject: "Nueva consulta desde la web",
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nConsulta: ${consulta}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Correo enviado correctamente" });

  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: "Error al enviar el correo." });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
