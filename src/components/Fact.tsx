function Fact({ title, children }: { title: string; children: string }) {
  return (
    <article>
      <h3>{title}</h3>
      <p><div dangerouslySetInnerHTML={{ __html: children }} /></p>
    </article>
  );
}

export default Fact;
