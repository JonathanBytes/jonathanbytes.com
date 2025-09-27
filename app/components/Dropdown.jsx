import { DownArrow } from "./Icons";
import ListItemLink from "./ListItemLink";

const Dropdown = ({ type, onClick }) => {
  return (
    <li
      id="dropdownTrigger"
      className={`relative flex flex-col items-center ${
        type === "mobile" ? "gap-4" : "gap-0"
      }`}
    >
      <div className="flex gap-1 relative cursor-default text-foreground">
        Otros <DownArrow />
      </div>
      <div className="absolute w-16 h-2 -bottom-2"></div>
      <ul
        id="dropdown"
        className={`top-8 rounded pl-2 pr-6 py-1 ${
          type === "mobile"
            ? "mobile-dropdown text-center flex flex-col gap-2"
            : "desktop-dropdown absolute bg-background left-0 shadow-sm"
        }`}
      >
        <ListItemLink
          onClick={onClick}
          className={type === "mobile" ? "underlined" : "sideline"}
          href="/blog"
        >
          Blog
        </ListItemLink>
        <ListItemLink
          onClick={onClick}
          className={type === "mobile" ? "underlined" : "sideline"}
          href="/gallery"
        >
          Galería
        </ListItemLink>
      </ul>
    </li>
  );
};

export default Dropdown;
