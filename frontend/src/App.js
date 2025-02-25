import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Landing from "./pages/Landing";
import AboutUs from "./pages/About";
//import Portfolios from "./pages/PortafolioPage";
import Profiles from "./pages/InvestmentProfiles";
import Pymes from "./pages/Pymes";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Cabecera */}
      <Header />

      {/* Secciones */}
      <Landing />
      
      
      <Profiles />
      <Services/>
      
      <ContactPage />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
//<Portfolios />

