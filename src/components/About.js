import React, { useEffect, useState } from "react";
import TopGlowingbar from "./TopGlowingBar";
import BotGlowingbar from "./BotGlowingBar";
import pic from "../assets/picture_jfbrillant.jpg";
import cv from "../assets/CV_WEB_JF.pdf";

export default function About() {
  useEffect(() => {
    const container = document.querySelector(".about__container");
    container.style.opacity = "1";
    container.style.flex = "1";

    const nextButton = document.querySelector(
      ".about__card__button-container--next"
    );
    const prevButton = document.querySelector(
      ".about__card__button-container--prev"
    );
    if (activeWindow === 1) {
      prevButton.style.opacity = "0.2";
      prevButton.style.cursor = "default";
    } else if (activeWindow === 3) {
      nextButton.style.opacity = "0.2";
      nextButton.style.cursor = "default";
    } else {
      prevButton.style.opacity = "1";
      prevButton.style.cursor = "pointer";
      nextButton.style.opacity = "1";
      nextButton.style.cursor = "pointer";
    }
  });

  const [activeWindow, setActiveWindow] = useState(1);

  const windowPrev = () => {
    if (activeWindow > 1) {
      setActiveWindow(activeWindow - 1);
    }
  };

  const windowNext = () => {
    if (activeWindow < 3) setActiveWindow(activeWindow + 1);
  };

  return (
    <div className="about">
      <TopGlowingbar title="about" />
      <div className="about__container">
        <div className="about__card">
          <div className="about__card__topwindow">
            <div className="about__card__topwindow__round-button"></div>
          </div>
          {activeWindow === 1 ? (
            <div className="about__card--1">
              <div className="about__card__content__me">
                <div className="about__card__content__me--picture">
                  <img src={pic} alt="Jean-Félix BRILLANT" />
                </div>
                <div className="about__card__content__me--text">
                  <h3>Jean-Félix Brillant</h3>
                  <p>Développeur Web</p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i><strong>Bordeaux</strong>
                  </p>
                </div>
              </div>
              <p>Je suis actuellement à la recherche d'un poste en CDI !</p>
              <a
                className="bold about__card--cv-btn"
                href={cv}
                target="_blank"
                rel="noreferrer"
              >
                Curriculum vitæ
              </a>
            </div>
          ) : activeWindow === 2 ? (
            <div className="about__card__content">
                <h3>Informatique</h3>
              <div className="about__card__content--text">
                <p>
                  J'ai eu la chance dès l'age de 7 ans d'avoir un premier
                  ordinateur à la maison !
                </p>
                <p>
                  L'outil informatique est alors rapidement devenu une réelle
                  passion et les premiers démontages, bidouillages et les
                  premières lignes de code sont arrivés très vite !
                </p>
                <p>
                  Aujourd'hui, j'ai fait le choix d'en faire un metier et je
                  m'attele à coder des sites <strong>funs</strong>,{" "}
                  <strong>interactifs</strong> et <strong>visuels</strong> !
                </p>
              </div>
            </div>
          ) : activeWindow === 3 ? (
            <div className="about__card__content">
                <h3>Musique</h3>
              <div className="about__card__content--text">
                <p>
                  Multi-instrumentiste et principalement batteur depuis plus de
                  20 ans, j'ai eu l'occasion de de jouer au sein de multiples
                  projets sur la scène Bordelaise.
                </p>
                <p>
                  J'ai entre autre enregistré 2 EPs en studio et effectué une
                  centaine de concerts en France, Allemagne et Belgique.
                </p>
                <p>
                  J'ai également exercé en tant que professeur de batterie
                  pendant 4 ans au sein d'une école de musique !
                </p>
              </div>
            </div>
          ) : null}
          <div className="about__card__button-container">
            <button
              className="about__card__button-container--prev"
              onClick={(e) => {
                e.preventDefault();
                windowPrev();
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="about__card__button-container--next"
              onClick={(e) => {
                e.preventDefault();
                windowNext();
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <BotGlowingbar title="about" />
    </div>
  );
}
