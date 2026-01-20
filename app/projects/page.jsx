import Link from "next/link";
import { getGithubRepos } from "../../lib/getGithubRepos";
import GithubCard from "../components/GithubCard/GithubCard";
import ShowcaseCard from "../components/ShowcaseCard/ShowcaseCard";

export const metadata = {
  title: "Projects",
  description: "Projects of JonathanBytes website",
};

const projectsNames = [
  "ESPMidi-Footswitch",
  "dotfiles",
  "nextjs-colorscheme-switch",
  "LearningDB",
];

const showcaseProjects = [
  {
    name: "Totally Biased",
    slug: "totally-biased",
    description:
      "A subjective sort app to rank by taste, bias and gut instinct.",
    language: "TypeScript",
    topics: [
      "nextjs",
      "react",
      "ranking",
      "sortable",
      "clerk",
      "convex",
      "tailwindcss",
    ],
    stargazers_count: 5,
    forks_count: 1,
  },
  {
    name: "SATMA",
    slug: "satma",
    description:
      "Early Warning and Environmental Monitoring System for real-time hydrological data and automated alerts.",
    language: "TypeScript",
    topics: [
      "nextjs",
      "fastapi",
      "environmental-monitoring",
      "real-time",
      "geospatial",
      "docker",
    ],
  },
  {
    name: "Climaware",
    slug: "climaware",
    description:
      "Real-time environmental monitoring system with Firebase integration and IoT sensors.",
    language: "TypeScript",
    topics: [
      "nextjs",
      "react",
      "firebase",
      "iot",
      "esp32",
      "real-time-monitoring",
    ],
  },
];

export default async function Projects() {
  const repos = await getGithubRepos(projectsNames);

  return (
    <main>
      <h1>Proyectos</h1>
      <p />

      {/* Showcase Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
          Featured Projects
        </h2>
        <div className="flex gap-4 flex-wrap items-center justify-center w-full">
          {showcaseProjects.map((project) => (
            <ShowcaseCard project={project} key={project.slug} />
          ))}
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
          Open Source Projects
        </h2>
        <div className="flex gap-4 flex-wrap items-center justify-center w-full">
          {repos.map((repo) => (
            <GithubCard repo={repo} key={repo.id} />
          ))}
        </div>
      </section>

      <p />
      <Link href="/" className="btn">
        Volver
      </Link>
      <p />
    </main>
  );
}
