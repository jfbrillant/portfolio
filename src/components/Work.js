import React, { useEffect, useState } from "react";
import TopGlowingbar from "./TopGlowingBar";
import BotGlowingbar from "./BotGlowingBar";

export default function Work() {
  useEffect(() => {
    const container = document.querySelector(".work__container");
    container.style.opacity = "1";
    container.style.flex = "1";
  });

    const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="work">
      <TopGlowingbar title="work" />
      <div className="work__container">
        <div className="work__container__project work__container__project--1" onClick={() => {
          activeProject!==1 ? setActiveProject(1) : setActiveProject(0)
          }}>
          <div className={`work__container__project__content ${activeProject===1 ? "active-project" : ""}`}>
            <div className="work__container__project__content__title">
              <h3>Portfolio</h3>
              <p>Projet personnel</p>
            </div>
            <div className="work__container__project__content__description">
              <p>C'est le site sur lequel vous vous trouvez !</p>
              <p>
                Il a été conçu sous forme de single page application, grâce à la
                library React.
              </p>
            </div>
          </div>
        </div>
        <div className="work__container__project work__container__project--2" onClick={() => {
          activeProject!==2 ? setActiveProject(2) : setActiveProject(0)
        }}>
        <div className={`work__container__project__content ${activeProject===2 ? "active-project" : ""}`}>
            <div className="work__container__project__content__title">
              <h3>Groupomania</h3>
              <p>Projet d'étude</p>
            </div>
            <div className="work__container__project__content__description">
              <p>
                Groupomania est un réseau social d'entreprise, permettant à
                partir d'un compte utilisateur, de partager, de commenter ou de
                réagir à des images ou des gifs sur un feed.
              </p>
              <p>
                Le site à été conçu avec la librairie React pour le front et
                Node.js pour le back.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BotGlowingbar title="work" />
    </div>
  );
}
