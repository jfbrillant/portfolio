import React, { useEffect } from 'react'
import Nav from './Nav'

export default function Header() {
    useEffect(() => {
        const header = document.querySelector("header");
        header.style.opacity = "1";
      });
    return (
        <header>
            <Nav />
        </header>
    )
}
