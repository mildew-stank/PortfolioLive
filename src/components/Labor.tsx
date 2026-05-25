import type { ReactNode } from "react";

function Labor({
  status,
  company,
  role,
  children,
}: {
  status: string;
  company: string;
  role: string;
  children: ReactNode;
}) {
  return (
    <article>
      <h3>
        {status} at <span>{company}</span>
      </h3>
      <p>{role}</p>
      <p>{children}</p>
    </article>
  );
}

export default Labor;
