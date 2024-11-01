import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Nav from "./components/LandingPage.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}
