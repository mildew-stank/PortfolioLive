import type { ReactNode } from "react";

function Project({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: ReactNode;
}) {
  return (
    <article>
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <p>{children}</p>
    </article>
  );
}

export default Project;
