import Link from "next/link";
import GithubCard from "../components/GithubCard/GithubCard";
import { getGithubRepos } from "../../lib/getGithubRepos";

export const metadata = () => {
  return {
    title: "Projects",
    description: "Projects of JonathanBytes website",
  };
};

const projectsNames = [
  "totally-biased",
  "ESPMidi-Footswitch",
  "dotfiles",
  "nextjs-colorscheme-switch",
  "LearningDB",
];

export default async function Projects() {
  const repos = await getGithubRepos(projectsNames);

  return (
    <main>
      <h1>Proyectos</h1>
      <p />
      <div className="flex gap-4 flex-wrap items-center justify-center w-full">
        {repos.map((repo) => (
          <GithubCard repo={repo} key={repo.id} />
        ))}
      </div>
      <p />
      <Link href="/" className="btn">
        Volver
      </Link>
      <p />
    </main>
  );
}
