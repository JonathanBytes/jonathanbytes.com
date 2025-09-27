import Link from "next/link";

const ListItemLink = ({ children, onClick, href, className }) => {
  return (
    <li className={`${className}`}>
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </li>
  );
};

export default ListItemLink;
