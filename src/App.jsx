import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== "/" && <Header />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
