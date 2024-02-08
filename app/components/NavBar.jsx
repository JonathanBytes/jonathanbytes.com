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
      <ul className={`nav list-none p-0 flex justify-between flex-wrap gap-5 ${className}`}>
        <ListItemLink onClick={onClick} href='/projects' className='underlined '>Proyectos</ListItemLink>
        <ListItemLink onClick={onClick} href='/about' className='underlined'>Sobre mí</ListItemLink>
        <li id='dropdownTrigger' className='relative flex flex-col items-center gap-0'>
          <div className="flex gap-1 relative cursor-default">
            Otros <DownArrow />
          </div>
          <div className="absolute w-16 h-2 -bottom-2"></div>
          <ul id='dropdown' className={`absolute top-8 left-0 rounded bg-background text-left pl-1 pr-6 pt-1 shadow-md w-[120px]`}>
            <ListItemLink onClick={onClick} className='sideline' href='/blog'>Blog</ListItemLink
            >
            <ListItemLink onClick={onClick} className='sideline' href='/gallery'>Galería</ListItemLink>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export const MobileNav = ({ onClick }) => {
  return (
    <div data-visible='false' id='primary-navigation' className='mobile-nav hidden transition-transform duration-300 inset-y-0 right-0 fixed z-20 justify-start items-center flex-col opacity-95 bg-background px-4 h-full pt-16 gap-4 font-bold'>
      <NavBar onClick={onClick} className='mobile' />
      <a onClick={onClick} className='underlined relative' href='mailto:contacto@jonathanbytes.com' target='_blank' rel='noreferrer'>Contáctame</a>
      <div className="flex flex-col flex-grow justify-end items-center">
        <SwitchTheme />
      </div>
    </div>
  )
}

