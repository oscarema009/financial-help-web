const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { nombre, correo, telefono, consulta } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Email configurado en .env
        pass: process.env.PASSWORD, // Contraseña de la cuenta
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "oscar.industial@gmail.com", // Cambia esto al correo donde quieres recibir consultas
      subject: `Consulta de ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nConsulta: ${consulta}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
};

module.exports = { sendEmail };
