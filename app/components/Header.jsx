"use client";

import Link from "next/link";
import { NavBar, MobileNav } from "./NavBar";
import { Hamburguer, MainLogo } from "./Icons";
import ThemeSwitchDesktop from "./theme/ThemeSwitchDesktop";

function ButtonToggle() {
  const button = document.querySelector(".button-three");
  const mobileNav = document.querySelector(".mobile-nav");
  const currentState = mobileNav.getAttribute("data-visible");
  if (!currentState || currentState === "false") {
    button.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("data-visible", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("data-visible", "false");
  }
}

function handleClick() {
  return true;
}

export default function Header({ userColors }) {
  return (
    <header className="header">
      <Link href="/">
        <MainLogo />
      </Link>
      <NavBar />
      <div>
        <ThemeSwitchDesktop
          userColors={userColors}
          className="desktop"
        />
        <a
          className="btn desktop"
          href="mailto:contacto@jonathanbytes.com"
          target="_blank"
          rel="noreferrer"
        >
          Contáctame
        </a>
      </div>
      <MobileNav
        onClick={ButtonToggle}
        handleClick={handleClick}
        userColors={userColors}
      />
      <button
        type="button"
        className="button-three"
        onClick={ButtonToggle}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <Hamburguer />
        <span>Menu</span>
      </button>
    </header>
  );
}
