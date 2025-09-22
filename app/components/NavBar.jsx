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
        <Dropdown />
      </ul>
    </nav>
  )
}

export const MobileNavBar = ({ onClick, className }) => {
  return <nav className={className}>Mobile</nav>
}
