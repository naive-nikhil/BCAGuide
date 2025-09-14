import FeaturedCarousel from "../components/FeaturedCarousel";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import Download from "../components/pyq/Download";
import { useAppContext } from "../context/AppContext";
import semesters from "../data/data.json";

import { resources, coursesByCode } from "../data/flat_data";

const Assignments = () => {
  const { cycle, code } = useParams();
  const { selectedSemester, selectedCourse } = useAppContext();

  const courseCode = code?.toUpperCase();
  const courseTitle = coursesByCode[courseCode];

  const assignmentLink = resources?.find(
    (resource) =>
      resource.courseCode === courseCode &&
      resource.type === "assignment" &&
      resource.cycle === cycle
  )?.assignmentLink;

  let page = null;
  if (!courseCode && cycle) {
    page = <CoursesPage sectionDesc="Assignments" baseUrl={"/assignments"} />;
  } else if (courseCode && cycle) {
    page = (
      <Download
        courseCode={courseCode}
        courseTitle={courseTitle}
        type={"Assignment"}
        year={cycle}
        link={assignmentLink}
      />
    );
  }

  return (
    <>
      <h1 className="text-xl text-gray-700">Assignments</h1>
      <Carousel sidebarComponent={<SemesterList />} page={page} />
    </>
  );
};

export default Assignments;
