import { LinkedIn, GitHub, YouTube, Instagram } from './Icons'

const ListItem = ({ children, href }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2"
      >
        {children}
      </a>
    </li>
  )
}

const SocialMedia = () => {
  return (
    <ul className="list-none m-0 flex flex-col gap-4">
      <li>
        <h3 className="m-0 p-0">Redes sociales</h3>
      </li>
      <ListItem href="https://www.linkedin.com/in/jonathan-cardona-ram%C3%ADrez-614773186">
        <LinkedIn className="text-background dark:text-foreground" />
        LinkedIn
      </ListItem>
      <ListItem href="https://github.com/JonathanBytes">
        <GitHub className="text-background dark:text-foreground" />
        GitHub
      </ListItem>
      <ListItem href="https://www.youtube.com/@JonathanCTutoriales">
        <YouTube className="text-background dark:text-foreground" />
        YouTube
      </ListItem>
      <ListItem href="https://www.instagram.com/jonathancard10/">
        <Instagram className="text-background dark:text-foreground" />
        Instagram
      </ListItem>
    </ul>
  )
}

export default SocialMedia
