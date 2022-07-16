import React, { useEffect, useState } from "react";

export default function TopGlowingBar({ title }) {

  const [isLanding, setIsLanding] = useState(true);
  
  useEffect(() => {
    const glowingTitle = document.querySelector(".top__title");
    if (glowingTitle != null) {
      setIsLanding(false);
      glowingTitle.style.width = "100%";
      glowingTitle.style.transform = "translateX(0px)";
      glowingTitle.style.opacity = "1";
    } else {
      setIsLanding(true);
      const topBar = document.querySelector(".landing-bar-top");
      topBar.style.width = "100%";
    }
  }, []);

  return (
    <div className="top">
      {title ? (
        <h2 className="top__title glowing-font"> &lt;{title}&gt;</h2>
      ) : null}
      <div className={`top__glowing-bar ${isLanding ? "landing-bar-top" : null}`}></div>
    </div>
  );
}
