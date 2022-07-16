import React, { useEffect, useState } from "react";

export default function BotGlowingBar({ title }) {

  const [isLanding, setIsLanding] = useState(true);

  useEffect(() => {
    const glowingTitle = document.querySelector(".bot__title");
    if (glowingTitle != null) {
      setIsLanding(false);
      glowingTitle.style.width = "100%";
      glowingTitle.style.transform = "translateX(0px)";
      glowingTitle.style.opacity = "1";
    } else {
      setIsLanding(true);
      const botBar = document.querySelector(".landing-bar-bot");
      botBar.style.width = "100%";
    }
  }, []);

  return (
    <div className="bot">
      <div className={`bot__glowing-bar ${isLanding ? "landing-bar-bot" : null}`}></div>
      {title ? (
        <p className="bot__title glowing-font"> &lt;/{title}&gt;</p>
      ) : null}
    </div>
  );
}
