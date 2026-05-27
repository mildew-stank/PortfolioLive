function Project({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: string;
}) {
  return (
    <article>
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <p><div dangerouslySetInnerHTML={{ __html: children }} /></p>
    </article>
  );
}

export default Project;
