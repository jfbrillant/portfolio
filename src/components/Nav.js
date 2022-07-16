import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show-nav");
  }

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li
          className={`bold navbar__links__link navbar__links__link--1 ${
            activeNav === "about" ? "active-nav" : "inactive-nav"
          }`}
          onClick={() => {
            setActiveNav("about");
          }}
        >
          <Link to="/about">ABOUT</Link>
        </li>
        <li
          className={`bold navbar__links__link navbar__links__link--2 ${
            activeNav === "skills" ? "active-nav" : "inactive-nav"
          }`}
          onClick={() => {
            setActiveNav("skills");
          }}
        >
          <Link to="/skills">SKILLS</Link>
        </li>
        <li
          className={`bold navbar__links__link navbar__links__link--3 ${
            activeNav === "work" ? "active-nav" : "inactive-nav"
          }`}
          onClick={() => {
            setActiveNav("work");
          }}
        >
          <Link to="/work">WORK</Link>
        </li>
        <li
          className={`bold navbar__links__link navbar__links__link--4 ${
            activeNav === "contact" ? "active-nav" : "inactive-nav"
          }`}
          onClick={() => {
            setActiveNav("contact");
          }}
        >
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          setToggle(!toggle);
          toggleMenu();
        }}
        className="navbar__burger"
        aria-label="menu"
      >
        <span className="navbar__burger__bar"></span>
      </button>
    </nav>
  );
}
