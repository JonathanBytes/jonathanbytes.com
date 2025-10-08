import { Repo, Star, Fork } from "../Icons";

const GithubCard = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    stargazers_count,
    forks_count,
    language,
    topics = [],
  } = repo;

  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-sm p-6 bg-[var(--color-background)] border-2 border-[var(--color-altbg)] rounded-lg hover:border-[var(--color-primary)] transition-all hover:shadow-lg hover:opacity-100"
    >
      {/* Header */}
      <div className="flex items-start gap-2 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <Repo className="w-5 h-5 flex-shrink-0 fill-[var(--color-foreground)]" />
          <h3 className="text-lg font-semibold text-[var(--color-primary)] truncate m-0">
            {name}
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Description */}
        <p className="text-sm text-[var(--color-foreground)] m-0 line-clamp-2 ">
          {description || "No description provided"}
        </p>

        <div className="flex flex-col gap-2">
          {/* Topics */}
          {topics.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-2 py-1 bg-[var(--color-altbg)] text-[var(--color-foreground)] rounded-full"
                >
                  {topic}
                </span>
              ))}
              {topics.length > 3 && (
                <span className="text-xs px-2 py-1 text-[var(--color-foreground)] opacity-60">
                  +{topics.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-[var(--color-foreground)] opacity-75">
            {language && (
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
                <span>{language}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <Fork className="w-4 h-4" />
              <span>{forks_count}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default GithubCard;
