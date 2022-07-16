import React, { useEffect } from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  useEffect(() => {
    const title = document.querySelector("main");
    title.style.height = "84%";
  });
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
