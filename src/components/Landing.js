import React, { useEffect } from "react";
import TopGlowingbar from "./TopGlowingBar";
import BotGlowingbar from "./BotGlowingBar";

export default function Landing() {
  useEffect(() => {
    const helloTitle = document.querySelector(".hello");
    const bigTitle = document.querySelector(".big-typo");
    helloTitle.style.opacity = "1";
    bigTitle.style.opacity = "1";
  });
  return (
    <div id="landing">
      <TopGlowingbar title={null}/>
      <h1>
        <div className="hello">Bonjour, je m'appelle Jean-Félix et je suis</div>
        <div className="big-typo">
          DEVELOPPEUR
          <br />
          FRONT - END.
        </div>
      </h1>
      <BotGlowingbar />
    </div>
  );
}
