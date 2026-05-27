import { useEffect, useState } from "react";
import { fetchFacts } from "../api.ts";
import Fact from "../components/Fact";

interface FactData {
  Id: number;
  Title: string;
  Children: string;
}

function Information() {
  const [facts, setLabors] = useState<FactData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFacts()
      .then((data) => {
        setLabors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // TODO: make a skeleton
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <article>
        <h2>TRACKING INFORMATION</h2>
        {facts.map((fact) => (
          <Fact title={fact.Title}>{fact.Children}</Fact>
        ))}
      </article>
    </>
  );
}

export default Information;
