'use client'

import Link from 'next/link'
import { DesktopNavBar, MobileNavBar } from './NavBar'
import { Hamburguer, MainLogo } from './Icons'
import ThemeSwitchDesktop from './theme/ThemeSwitchDesktop'

function ButtonToggle() {
  const button = document.querySelector('.button-three')
  const mobileNav = document.querySelector('.mobile-nav')
  const currentState = mobileNav.getAttribute('data-visible')
  if (!currentState || currentState === 'false') {
    button.setAttribute('aria-expanded', 'true')
    mobileNav.setAttribute('data-visible', 'true')
  } else {
    button.setAttribute('aria-expanded', 'false')
    mobileNav.setAttribute('data-visible', 'false')
  }
}

export default function Header() {
  return (
    <header className="flex justify-between align-center flex-wrap w-full max-w-4xl px-4 py-6">
      <Link href="/" className="flex items-center flex-start">
        <MainLogo className="text-xl" />
      </Link>

      <DesktopNavBar className="hidden md:flex items-center" />
      <div className="hidden md:flex gap-2 items-center">
        {/* <ThemeSwitchDesktop
          userColors={userColors}
          className="hidden md:flex"
        /> */}
        <a
          className="bg-black text-white font-mono px-3 py-1 rounded-md"
          href="mailto:contacto@jonathanbytes.com"
          target="_blank"
          rel="noreferrer"
        >
          Contáctame
        </a>
      </div>

      {/* <MobileNavBar className="md:hidden block" />
      <button
        type="button"
        className="button-three md:hidden block"
        onClick={ButtonToggle}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <Hamburguer />
        <span>Menu</span>
      </button> */}
    </header>
  )
}
