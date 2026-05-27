interface Labor {
  Id: number;
  Status: string;
  Company: string;
  Role: string;
  Children: string;
}

interface Fact {
  Id: number;
  Title: string;
  Children: string;
}

interface Project {
  Id: number;
  Title: string;
  Url: string;
  Children: string;
}

export async function fetchLabors(): Promise<Labor[]> {
  const response = await fetch(`/query/labors`);
  if (!response.ok) {
    throw new Error("Failed to fetch labors");
  }
  return response.json();
}

export async function fetchFacts(): Promise<Fact[]> {
  const response = await fetch(`/query/facts`);
  if (!response.ok) {
    throw new Error("Failed to fetch facts");
  }
  return response.json();
}

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`/query/projects`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}
