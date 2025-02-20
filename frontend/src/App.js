import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Landing from "./pages/Landing";
import AboutUs from "./pages/About";
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
      <AboutUs />
      
      <Profiles />
      <ContactPage />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
//<Portfolios />

