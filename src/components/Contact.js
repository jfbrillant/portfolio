import React, { useEffect } from "react";
import TopGlowingbar from "./TopGlowingBar";
import BotGlowingbar from "./BotGlowingBar";

export default function Contact() {
  useEffect(() => {
    const container = document.querySelector(".contact__container");
    container.style.opacity = "1";
    container.style.flex = "1";
  });

  return (
    <div className="contact">
      <TopGlowingbar title="contact" />
      <div className="contact__container">
        <div className="contact__container__mail">
          <p>
            Si vous avez un projet en tête ou si vous souhaitez échanger
            quelques mots, n'hesitez pas à m'envoyer un message !
          </p>
          <a href="mailto:jf.brillant@gmail.com" className="bold glowing-font">
            jf.brillant@gmail.com
          </a>
        </div>
        <div className="contact__container__social">
          <p>Vous pouvez également me trouver sur Linkedin.</p>
          <a
            href="https://www.linkedin.com/in/jfbrillant/"
            target="_blank"
            rel="noopener noreferrer"
            className="glowing-icon"
          >
            <i className="ico fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <BotGlowingbar title="contact" />
    </div>
  );
}
