import React from "react";
import LandingPage from "./Landing";
import About from "./About";
import Profiles from "./InvestmentProfiles";
import Services from "./Services";
import ContactPage from "./ContactPage";

export default function Home() {
  return (
    <div className="w-full">
      <LandingPage />
      <About />
      <Profiles />
      <Services />
      <ContactPage />
    </div>
  );
}
