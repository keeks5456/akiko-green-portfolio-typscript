import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/yourusername/repos"
      );
      const data = await response.json();
      setRepos(data as Repo[]);
    };

    fetchData();
  }, []);

  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <a href={repo.html_url}>View Repository</a>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjects;
