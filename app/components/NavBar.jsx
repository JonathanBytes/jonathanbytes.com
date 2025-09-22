import ThemeSwitch from './theme/ThemeSwitch'
import Dropdown from './Dropdown'
import ListItemLink from './ListItemLink'

export const DesktopNavBar = ({ className }) => {
  return (
    <nav className={className}>
      <ul className={`list-none flex flex-wrap gap-6`}>
        <ListItemLink href="/projects" className="underlined">
          Proyectos
        </ListItemLink>
        <ListItemLink href="/about" className="underlined">
          Sobre mí
        </ListItemLink>
        <Dropdown type="desktop" />
      </ul>
    </nav>
  )
}

export const MobileNavBar = ({ onClick, className, ...props }) => {
  return (
    <nav
      className={`${className} flex flex-col justify-between`}
      id="primary-navigation"
      {...props}
    >
      <ul className={`list-none flex flex-col gap-6 items-center`}>
        <ListItemLink href="/projects" className="underlined">
          Proyectos
        </ListItemLink>
        <ListItemLink href="/about" className="underlined">
          Sobre mí
        </ListItemLink>
        <Dropdown type="mobile" />
        <li>
          <a
            className="underlined"
            href="mailto:contacto@jonathanbytes.com"
            target="_blank"
            rel="noreferrer"
          >
            Contáctame
          </a>
        </li>
      </ul>
      <span className="font-mono flex-end px-4">Theme selector </span>
    </nav>
  )
}
