import FeaturedCarousel from "../components/FeaturedCarousel";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SemesterList from "../components/carousel/SemesterList";
import SelectBlock from "../components/material/SelectBlock";
import Download from "../components/pyq/Download";
import semesters from "../data/data.json";
import { useAppContext } from "../context/AppContext";

const StudyMaterials = () => {
  const { selectedSemester } = useAppContext();
  const { courseCode, block } = useParams();

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode?.toUpperCase())?.title;

  const studyMaterial = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects?.find((sub) => sub.code === courseCode?.toUpperCase())?.material;

  const blockLink = studyMaterial?.[block];

  let page = null;
  if (!courseCode && !block) {
    page = (
      <CoursesPage sectionDesc="Study Materials" baseUrl={"/study-materials"} />
    );
  } else if (courseCode && !block) {
    page = (
      <SelectBlock
        courseCode={courseCode.toUpperCase()}
        courseTitle={selectedCourseTitle}
        material={studyMaterial}
      />
    );
  } else if (courseCode && block) {
    page = (
      <Download
        courseCode={courseCode.toUpperCase()}
        courseTitle={selectedCourseTitle}
        type={"Study Material"}
        year={block.toUpperCase()}
        link={blockLink}
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
