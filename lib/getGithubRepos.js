const username = "JonathanBytes";

/**
 * Fetch specific GitHub repositories by name
 * @param {string[]} repoNames - Array of repository names to fetch
 * @returns {Promise<Array>} Array of repository data objects
 */
export async function getGithubRepos(repoNames) {
  try {
    // Fetch each repo individually
    const repoPromises = repoNames.map(async (repoName) => {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );

      if (!response.ok) {
        console.error(`Failed to fetch repo: ${repoName}`);
        return null;
      }

      return await response.json();
    });

    const repos = await Promise.all(repoPromises);
    // Filter out any failed requests
    return repos.filter((repo) => repo !== null);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getGithubRepo(repoName) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    if (!response.ok) {
      console.error(`Failed to fetch repo: ${repoName}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repo:", error);
    return null;
  }
}