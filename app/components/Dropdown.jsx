import { DownArrow } from './Icons'
import ListItemLink from './ListItemLink'

const Dropdown = ({ onClick }) => {
  return (
    <li
      id="dropdownTrigger"
      className="relative flex flex-col items-center gap-0"
    >
      <div className="flex gap-1 relative cursor-default">
        Otros <DownArrow />
      </div>
      <div className="absolute w-16 h-2 -bottom-2"></div>
      <ul
        id="dropdown"
        className={`absolute top-8 left-0 rounded text-left border pl-2 pr-6 py-1`}
      >
        <ListItemLink onClick={onClick} className="text-left" href="/blog">
          Blog
        </ListItemLink>
        <ListItemLink onClick={onClick} className="text-left" href="/gallery">
          Galería
        </ListItemLink>
      </ul>
    </li>
  )
}

export default Dropdown
