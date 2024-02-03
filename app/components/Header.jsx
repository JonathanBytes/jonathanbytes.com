'use client'

import Link from "next/link";
import Image from 'next/image';
import SwitchTheme from "./SwitchTheme";
import { NavBar, MobileNav } from "./NavBar";
import { Hamburguer, MainLogo } from "./Icons";

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

export default function Header() {
  return (
    <header className='header'>
      <Link className='flex items-center' href='/'>
        <MainLogo className='text-text text-xl' />
      </ Link>
      <NavBar />
      <SwitchTheme className='hidden md:flex' />
      <a className='btn desktop' href='mailto:contacto@jonathanbytes.com' target='_blank' rel='noreferrer'>Contáctame</a>
      <MobileNav />
      <button type='button' className='button-three' onClick={ButtonToggle} aria-controls='primary-navigation' aria-expanded='false'>
        < Hamburguer />
        <span className='sr-only'>Menu</span>
      </button>
    </header>
  );
}
