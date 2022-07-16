import React, { useEffect } from 'react'

export default function Footer() {
    useEffect(() => {
        const footer = document.querySelector("footer");
        footer.style.opacity = "1";
      });
    return (
        <footer>
            <p>JF Brillant © 2021</p>
        </footer>
    )
}
