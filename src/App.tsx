import { Navigate, NavLink, Route, Routes } from "react-router";
import Projects from "./pages/Projects.tsx";
import Information from "./pages/Information.tsx";
import Labors from "./pages/Labors.tsx";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>PORTFOLIO</h1>
      </header>
      <main>
        <nav>
          <NavLink to="/projects">MEANINGLESS PROJECTS</NavLink>
          <NavLink to="/labors">WORTHLESS LABORS</NavLink>
          <NavLink to="/information">TRACKING INFORMATION</NavLink>
        </nav>
        <section>
          <Routes>
            <Route path="/" element={<Navigate to="/projects" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/labors" element={<Labors />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
