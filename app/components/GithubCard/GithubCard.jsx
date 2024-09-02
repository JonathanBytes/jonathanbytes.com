import Image from 'next/image'

const githubCard = ({ name }) => {
  return (
    <a href="https://github.com/JonathanBytes/dotfiles" className="">
      <Image
        src={`https://gh-card.dev/repos/JonathanBytes/${name}.svg`}
        alt={`JonathanBytes ${name} Github repository card`}
      />
    </a>
  )
}

export default githubCard
