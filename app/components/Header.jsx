'use client'

import Link from 'next/link'
import { useState } from 'react'
import { DesktopNavBar, MobileNavBar } from './NavBar'
import { Hamburguer, MainLogo } from './Icons'
import ThemeSwitchDesktop from './theme/ThemeSwitchDesktop'

export default function Header({ initialUserColors }) {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  const handleToggle = () => {
    setIsMobileNavVisible(!isMobileNavVisible)
  }

  return (
    <header className="flex justify-between align-center items-center flex-wrap w-full max-w-4xl px-4 py-4 min-h-20">
      <Link href="/" className="flex items-center flex-start">
        <MainLogo className="text-xl" />
      </Link>

      <DesktopNavBar className="hidden md:flex items-center" />
      <div className="hidden md:flex gap-2 items-center">
        <ThemeSwitchDesktop userColors={initialUserColors} />
        <a
          className="bg-foreground text-background font-mono px-3 py-1 rounded-md"
          href="mailto:contacto@jonathanbytes.com"
          target="_blank"
          rel="noreferrer"
        >
          Contáctame
        </a>
      </div>

      {/* Mobile nav backdrop */}
      {isMobileNavVisible && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={handleToggle}
          aria-hidden="true"
        />
      )}

      <MobileNavBar
        className="mobile-nav md:hidden text-xl font-bold fixed top-0 right-0 h-svh min-w-40 bg-background/95 backdrop-blur-xs z-20 pt-20 translate-x-full "
        data-visible={isMobileNavVisible}
        initialUserColors={initialUserColors}
        onClick={handleToggle}
      />
      <button
        type="button"
        className={`hamburger-menu-btn bg-transparent p-0 border-0 w-10 aspect-square md:hidden overflow-hidden cursor-pointer flex items-center justify-center z-30 ${
          isMobileNavVisible ? 'fixed top-5 right-4' : ''
        }`}
        onClick={handleToggle}
        aria-controls="primary-navigation"
        aria-expanded={isMobileNavVisible}
      >
        <Hamburguer />
        <span className="sr-only">Menu</span>
      </button>
    </header>
  )
}
