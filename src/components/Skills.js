import React, { useEffect, useState } from "react";
import TopGlowingbar from "./TopGlowingBar";
import BotGlowingbar from "./BotGlowingBar";

export default function Skills() {
  const [activeStack, setActiveStack] = useState("");

  useEffect(() => {
    const container = document.querySelector(".skills__container");
    const stackDescription = document.querySelector(".skills__container__description");
    container.style.opacity = "1";
    container.style.flex = "1";
    stackDescription.style.opacity = "1"
  }, [activeStack]);

  return (
    <div className="skills">
      <TopGlowingbar title="skills"/>
      <div className="skills__container">
        <div className="skills__container__stack">
          <h3
            className={`bold skills__container__stack--front ${
              activeStack === "front" ? "active-stack" : "inactive-stack"
            }`}
            onClick={() => {
              setActiveStack("front");
            }}
          >
            FRONT
          </h3>
          <h3
            className={`bold skills__container__stack--back ${
              activeStack === "back" ? "active-stack" : "inactive-stack"
            }`}
            onClick={() => {
              setActiveStack("back");
            }}
          >
            BACK
          </h3>
          <h3
            className={`bold skills__container__stack--tools ${
              activeStack === "tools" ? "active-stack" : "inactive-stack"
            }`}
            onClick={() => {
              setActiveStack("tools");
            }}
          >
            TOOLS
          </h3>
        </div>
        <div className="skills__container__description">
          {activeStack === "front" ? (
            <div className="skills__container__description--front">
              <div className="skills__container__description--icons">
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-js"></i>
                <i className="fa-brands fa-bootstrap"></i>
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-sass"></i>
              </div>
              <div className="skills__container__description--text">
                <p>
                  C'est ma spécialité ! J'utilise prinicipalement la librairie
                  <strong> JavaScript</strong>
                  <strong> React</strong> combinée à <strong>Redux</strong> dans
                  mes projets ce qui me permet de développer des applications et
                  des sites web
                  <strong> performants</strong> et <strong>évolutifs</strong>.
                </p>
                <p>
                  J'aime également utiliser le pré-processeur{" "}
                  <strong>Sass</strong> pour écrire mon code{" "}
                  <strong>CSS</strong>, le rendre plus <strong>concis</strong>{" "}
                  et <strong>lisible</strong> et ainsi faire de jolies
                  animations.
                </p>
              </div>
            </div>
          ) : activeStack === "back" ? (
            <div className="skills__container__description--back">
              <div className="skills__container__description--icons">
                <i className="fa-solid fa-server"></i>
                <i className="fa-brands fa-node"></i>
                <i className="fa-solid fa-database"></i>
              </div>
              <div className="skills__container__description--text">
                <p>
                  Parce qu'il est important d'être <strong>polyvalent</strong>,
                  je suis également formé coté serveur !
                </p>
                <p>
                  Je suis capable de construire des{" "}
                  <strong>API restfull</strong> sécurisées grâce au runtime{" "}
                  <strong>Node.js</strong> et à son framework{" "}
                  <strong>Express.js</strong>.
                </p>
                <p>
                  Pour la création et la manipulation de{" "}
                  <strong>base de donnée</strong>, j'utilise selon le contexte{" "}
                  <strong>MySQL</strong> combiné à <strong>Sequelize</strong> ou{" "}
                  <strong>MongoDB</strong> combiné à <strong>Mongoose</strong>.
                </p>
              </div>
            </div>
          ) : activeStack === "tools" ? (
            <div className="skills__container__description--tools">
              <div className="skills__container__description--icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-git"></i>
                <i className="fa-brands fa-gitkraken"></i>
              </div>
              <div className="skills__container__description--text">
                <p>
                  J'ai pris la bonne habitude de <strong>versionner</strong> les
                  projets sur lesquels je travaille grâce à <strong>git</strong>{" "}
                  et <strong>gitKraken</strong> et j'utilise également{" "}
                  <a
                    href="https://github.com/jfbrillant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>gitHub</strong>{" "}
                  </a>
                  pour héberger certains projets et travailler en collaboration
                  avec d'autres développeurs.
                </p>
                <p>
                  Pour écrire tout ce code, j'utilise l'éditeur{" "}
                  <strong>Visual Studio Code</strong>.
                </p>
              </div>
            </div>
          ) : (
            <div className="skills__container__description--no-active-stack">
              <i className="fa-solid fa-circle-arrow-up fa-beat-fade"></i>
              <p className="bold">Séléctionnez une stack !</p>
            </div>
          )}
        </div>
      </div>
      <BotGlowingbar title="skills"/>
    </div>
  );
}
