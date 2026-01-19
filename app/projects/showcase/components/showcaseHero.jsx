import {
  GitHub,
  System,
  Star,
  Fork,
  LinkIcon,
} from "../../../components/Icons";

export default function ShowcaseHero({ repo, customName }) {
  if (!repo) return null;

  const {
    name,
    html_url,
    homepage,
    description,
    stargazers_count,
    forks_count,
    language,
    topics = [],
  } = repo;

  return (
    <section className="flex flex-col items-center justify-center py-8 gap-6 text-center">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] m-0">
        {customName || name}
      </h1>

      {/* Description */}
      <p className="text-xl text-[var(--color-foreground)] max-w-3xl opacity-90 leading-relaxed">
        {description}
      </p>

      {/* Topics */}
      {topics.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-4 py-1.5 bg-[var(--color-altbg)] text-[var(--color-foreground)] rounded-full text-sm font-medium hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-colors cursor-default"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center gap-6 text-[var(--color-foreground)] opacity-80 my-2">
        {language && (
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
            <span className="font-medium">{language}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5" />
          <span className="font-medium">{stargazers_count}</span>
        </div>
        <div className="flex items-center gap-2">
          <Fork className="w-5 h-5" />
          <span className="font-medium">{forks_count}</span>
        </div>

        {/* Buttons */}
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          title="Código fuente"
        >
          <GitHub className="w-5 h-5" />
        </a>

        {homepage && (
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="w-5 h-5" />
          </a>
        )}
      </div>
    </section>
  );
}
