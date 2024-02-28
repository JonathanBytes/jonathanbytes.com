'use client'

import Link from "next/link";
import { NavBar, MobileNav } from "./NavBar";
import { Hamburguer, MainLogo } from "./Icons";
import SwitchThemeDesktop from "./SwitchThemeDesktop";

function ButtonToggle() {
  const button = document.querySelector(".button-three")
  const mobileNav = document.querySelector(".mobile-nav")
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
  return true
}

export default function Header({ userColors }) {
  return (
    <header className='header'>
      <Link className='flex items-center' href='/'>
        <MainLogo className='text-text text-xl' />
      </ Link>
      <NavBar />
      <div className="flex gap-2 items-center">
        <SwitchThemeDesktop userColors={userColors} className='hidden md:flex relative ' />
        <a className='btn desktop h-8' href='mailto:contacto@jonathanbytes.com' target='_blank' rel='noreferrer'>Contáctame</a>
      </div>
      <MobileNav onClick={ButtonToggle} handleClick={handleClick} userColors={userColors} />
      <button type='button' className='button-three' onClick={ButtonToggle} aria-controls='primary-navigation' aria-expanded='false'>
        < Hamburguer />
        <span className='sr-only'>Menu</span>
      </button>
    </header>
  );
}
