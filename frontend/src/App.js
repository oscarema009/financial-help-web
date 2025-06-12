import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./pages/Home"; 
import Services from "./pages/Services";
import AdminCartera from "./pages/Gestion";
import Pymes from "./pages/Pymes";
import ComunidadWhatsApp from "./pages/ComunidadWhatsApp";
import AprendeConNosotros from './pages/AprendeConNosotros';
import AsesoriaFinanciera from "./pages/AsesoriaFinanciera";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="pt-16 md:pt-20">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/gestion-portafolios" element={<AdminCartera />} />
        <Route path="/grupos" element={<ComunidadWhatsApp />} />
        <Route path="/aprende-con-nosotros" element={<AprendeConNosotros />} />
        <Route path="/pymes" element={<Pymes />} />
        <Route path="/asesoria-financiera" element={<AsesoriaFinanciera />} />
        <Route path="/Contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



