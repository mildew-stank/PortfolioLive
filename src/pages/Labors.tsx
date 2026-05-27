import { useEffect, useState } from "react";
import { fetchLabors } from "../api";
import Labor from "../components/Labor";
import SkeletonGeneric from "../skeletons/SkeletonGeneric";

interface LaborData {
  Id: number;
  Status: string;
  Company: string;
  Role: string;
  Children: string;
}

function Labors() {
  const [labors, setLabors] = useState<LaborData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLabors()
      .then((data) => {
        setLabors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <>
        <h2>WORTHLESS LABORS</h2>
        <SkeletonGeneric />
        <SkeletonGeneric />
        <SkeletonGeneric />
      </>
    );
  if (error)
    return (
      <>
        <h2>WORTHLESS LABORS</h2>
        <div>Error: {error}</div>
      </>
    );

  return (
    <>
      <h2>WORTHLESS LABORS</h2>
      {labors.map((labor) => (
        <Labor
          key={labor.Id}
          status={labor.Status}
          company={labor.Company}
          role={labor.Role}
        >
          {labor.Children}
        </Labor>
      ))}
    </>
  );
}

export default Labors;
