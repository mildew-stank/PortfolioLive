function Labor({
  status,
  company,
  role,
  children,
}: {
  status: string;
  company: string;
  role: string;
  children: string;
}) {
  return (
    <article>
      <h3>
        {status} at <span>{company}</span>
      </h3>
      <p>{role}</p>
      <p>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </p>
    </article>
  );
}

export default Labor;
