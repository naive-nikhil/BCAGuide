import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PYQ from "./pages/PYQ";
import Assignments from "./pages/Assignments";
import StudyMaterials from "./pages/StudyMaterials";
import Project from "./pages/Project";
import About from "./pages/About";
import AskDoubt from "./pages/AskDoubt";
import Notifications from "./pages/Notifications";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<About />} />
          <Route path="previous-year-question-papers" element={<PYQ />} />
          <Route
            path="previous-year-question-papers/:courseCode"
            element={<PYQ />}
          />
          <Route
            path="previous-year-question-papers/:courseCode/:year?"
            element={<PYQ />}
          />
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:session" element={<Assignments />} />
          <Route
            path="assignments/:session/:courseCode"
            element={<Assignments />}
          />
          <Route path="study-materials" element={<StudyMaterials />} />
          <Route
            path="study-materials/:courseCode"
            element={<StudyMaterials />}
          />
          <Route
            path="study-materials/:courseCode/:block"
            element={<StudyMaterials />}
          />

          <Route path="project-synopsis-and-report" element={<Project />} />

          <Route path="ask-doubts" element={<AskDoubt />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
