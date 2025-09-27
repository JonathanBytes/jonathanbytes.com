import { LinkedIn, GitHub, YouTube, Instagram } from "./Icons";

const ListItem = ({ children, href }) => {
  return (
    <li>
      <a
        className="flex justify-start items-center gap-2 "
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  );
};

const SocialMedia = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <h3 className="font-bold m-0 text-left">Redes</h3>
      </li>
      <ListItem href="https://www.linkedin.com/in/jonathan-cardona-ram%C3%ADrez-614773186">
        <LinkedIn />
        LinkedIn
      </ListItem>
      <ListItem href="https://github.com/JonathanBytes">
        <GitHub />
        GitHub
      </ListItem>
      <ListItem href="https://www.youtube.com/@JonathanCTutoriales">
        <YouTube />
        YouTube
      </ListItem>
      <ListItem href="https://www.instagram.com/jonathancard10/">
        <Instagram />
        Instagram
      </ListItem>
    </ul>
  );
};

export default SocialMedia;
