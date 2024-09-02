import Link from 'next/link'
import GithubCard from '../components/GithubCard/GithubCard'

export const metadata = () => {
  return {
    title: 'Projects',
    description: 'Projects of JonathanBytes website',
  }
}

const projectsNames = [
  'dotfiles',
  'LearningDB',
  'ESPMidi-Footswitch',
  'jonathanbytes.com',
  'nextjs-colorscheme-switch',
]

export default function Projects() {
  return (
    <main>
      <h1>Proyectos</h1>
      <p />
      <div className="flex gap-4 flex-wrap items-center justify-center w-full">
        {projectsNames.map((name) => (
          <GithubCard name={name} />
        ))}
      </div>
      <p />
      <Link href="/" className="btn">
        Volver
      </Link>
      <p />
    </main>
  )
}
