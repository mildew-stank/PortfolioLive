import type { ReactNode } from "react";

function Fact({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default Fact;
