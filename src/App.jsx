import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}
