import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}
