import React from "react";
import Header from "../src/componentes/Header";
import Footer from "../src/componentes/Footer";
import Landing from "./pages/Landing";
//import Portfolios from "./pages/PortafolioPage";
import Profiles from "./pages/InvestmentProfiles";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      {/* Cabecera */}
      <Header />

      {/* Secciones */}
      <Landing />
      
      <Profiles />
      <ContactPage />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
//<Portfolios />

