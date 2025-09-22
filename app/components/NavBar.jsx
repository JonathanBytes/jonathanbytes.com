import Link from 'next/link'
import { DownArrow } from './Icons'
import ThemeSwitch from './theme/ThemeSwitch'

const ListItemLink = ({ children, onClick, href, className }) => {
  return (
    <li>
      <Link onClick={onClick} className={className} href={href}>
        {children}
      </Link>
    </li>
  )
}

export const NavBar = ({ onClick, className }) => {
  return (
    <nav>
      <ul
        className={`nav ${className}`}
      >
        <ListItemLink
          onClick={onClick}
          href="/projects"
          className="underlined"
        >
          Proyectos
        </ListItemLink>
        <ListItemLink onClick={onClick} href="/about" className="underlined">
          Sobre mí
        </ListItemLink>
        <li
          id="dropdownTrigger"
        >
          <div>
            Otros <DownArrow />
          </div>
          <div></div>
          <ul
            id="dropdown"
          >
            <ListItemLink onClick={onClick} className="sideline" href="/blog">
              Blog
            </ListItemLink>
            <ListItemLink
              onClick={onClick}
              className="sideline"
              href="/gallery"
            >
              Galería
            </ListItemLink>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export const MobileNav = ({ onClick, handleClick, userColors }) => {
  return (
    <div
      data-visible="false"
      id="primary-navigation"
      className="mobile-nav"
    >
      <NavBar onClick={onClick} className="mobile" />
      <a
        onClick={onClick}
        className="underlined"
        href="mailto:contacto@jonathanbytes.com"
        target="_blank"
        rel="noreferrer"
      >
        Contáctame
      </a>
      <div>
        <ThemeSwitch onClick={onClick} initialUserColors={userColors} />
      </div>
    </div>
  )
}
