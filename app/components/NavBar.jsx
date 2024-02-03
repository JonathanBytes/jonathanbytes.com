import Link from "next/link"
import { DownArrow } from "./Icons"
import SwitchTheme from "./SwitchTheme"

const ListItemLink = ({ children, onClick, href, className }) => {
  return (
    <li className="text-center relative">
      < Link onClick={onClick} className={className} href={href}>
        {children}
      </Link>
    </li>
  )
}

export const NavBar = ({ onClick, className }) => {
  return (
    <nav>
      <ul className={`nav list-none p-0 flex justify-between flex-wrap ${className}`}>
        <ListItemLink onClick={onClick} href='/projects' className='underlined'>Proyectos</ListItemLink>
        <ListItemLink onClick={onClick} href='/about' className='underlined'>Sobre mí</ListItemLink>
        <li className='relative flex flex-col items-center gap-0 other'>
          <div className="flex gap-1">
            Otros <DownArrow />
          </div>
          <ul className='dropdown primary'>
            <ListItemLink onClick={onClick} href='/blog'>Blog</ListItemLink
            >
            <ListItemLink onClick={onClick} href='/gallery'>Galería</ListItemLink>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export const MobileNav = ({ ButtonToggle }) => {
  return (
    <div data-visible='false' id='primary-navigation' className='mobile-nav hidden transition-transform duration-300 inset-y-0 right-0 fixed z-20 justify-start items-center flex-col opacity-95 bg-background px-4 h-full pt-16 gap-4 font-bold'>
      <NavBar onClick={ButtonToggle} className='mobile' />
      <a onClick={ButtonToggle} className='underlined relative' href='mailto:contacto@jonathanbytes.com' target='_blank' rel='noreferrer'>Contáctame</a>
      <div className="flex flex-col flex-grow justify-end items-center">
        <SwitchTheme />
      </div>
    </div>
  )
}

