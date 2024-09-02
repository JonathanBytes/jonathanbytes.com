const githubCard = ({ name }) => {
  return (
    <a href="https://github.com/JonathanBytes/dotfiles" className="">
      <img src={`https://gh-card.dev/repos/JonathanBytes/${name}.svg`} />
    </a>
  )
}

export default githubCard
