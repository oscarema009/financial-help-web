import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import LandingPage from "./pages/Landing";
import About from "./pages/About";
//import Portfolios from "./pages/PortafolioPage";
import Profiles from "./pages/InvestmentProfiles";
import Services from "./pages/Services";
import AdminCartera from "./pages/Gestion.js"
import Pymes from "./pages/Pymes";
import ComunidadWhatsApp from "./pages/ComunidadWhatsApp.jsx"

import ContactPage from "./pages/ContactPage";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Cabecera */}
      <Header />

      {/* Secciones */}
      <LandingPage />
      <About />
      <Profiles />
      <Services/>
      <AdminCartera/>
      <Pymes />
      <ComunidadWhatsApp/>
      
      
      <ContactPage />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
//<Portfolios />

