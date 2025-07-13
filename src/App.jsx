import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PYQ from "./pages/PYQ";
import Assignments from "./pages/Assignments";
import StudyMaterials from "./pages/StudyMaterials";
import EBooks from "./pages/EBooks";
import Project from "./pages/Project";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="previous-year-questions" element={<PYQ />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="study-materials" element={<StudyMaterials />} />
          <Route path="ebooks-and-pdfs" element={<EBooks />} />
          <Route path="project-synopsis-and-report" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
