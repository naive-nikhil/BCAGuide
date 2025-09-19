import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SemesterList from "../components/carousel/SemesterList";
import Download from "../components/pyq/Download";
import { resources, coursesByCode } from "../data/flat_data";

const StudyMaterials = () => {
  const { code } = useParams();

  const courseCode = code?.toUpperCase();
  const courseTitle = coursesByCode[courseCode];

  const materialLink = resources?.find(
    (resource) =>
      resource.courseCode === courseCode && resource.type === "material"
  )?.materialLink;

  let page = null;
  if (!courseCode) {
    page = (
      <CoursesPage sectionDesc="Study Materials & Notes" baseUrl={"/study-materials"} />
    );
  } else if (courseCode) {
    page = (
      <Download
        courseCode={courseCode}
        courseTitle={courseTitle}
        type={"Study Material"}
        year={""}
        link={materialLink}
      />
    );
  }

  return (
    <>
      <h1 className="text-xl text-gray-700">Study Materials</h1>
      <Carousel sidebarComponent={<SemesterList />} page={page} />
    </>
  );
};

export default StudyMaterials;
