import { LinkedIn, GitHub, YouTube, Instagram } from "./Icons";

const ListItem = ({ children, href }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  )
}

const SocialMedia = () => {
  return (
    <ul>
      <li>
        <h3>Redes sociales</h3>
      </li>
      <ListItem href='https://www.linkedin.com/in/jonathan-cardona-ram%C3%ADrez-614773186' >
        <LinkedIn />
        LinkedIn
      </ListItem>
      <ListItem href='https://github.com/JonathanBytes'>
        <GitHub />
        GitHub
      </ListItem>
      <ListItem href='https://www.youtube.com/@JonathanCTutoriales'>
        <YouTube />
        YouTube
      </ListItem>
      <ListItem href='https://www.instagram.com/jonathancard10/'>
        <Instagram />
        Instagram
      </ListItem>
    </ul >
  )
}

export default SocialMedia
