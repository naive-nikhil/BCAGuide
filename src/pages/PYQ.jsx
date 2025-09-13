import FeaturedCarousel from "../components/FeaturedCarousel";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SelectPaper from "../components/pyq/SelectPaper";
import Download from "../components/pyq/Download";
import semesters from "../data/data.json";
import { useAppContext } from "../context/AppContext";

const formatYear = (yearParam) => {
  return yearParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const PYQ = () => {
  const { courseCode, year } = useParams();
  const { selectedSemester } = useAppContext();

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode?.toUpperCase())?.title;

  const session = year && year.split("-")[0];
  const formattedYear = year ? formatYear(year) : null;

  const selectedCoursePaperLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode?.toUpperCase())
    ?.papers.session?.[session]?.find(
      (paper) => paper.year === formattedYear
    )?.link;

  let page = null;
  if (!courseCode && !year) {
    page = <CoursesPage sectionDesc="Previous Year Question Papers" />;
  } else if (courseCode && !year) {
    page = <SelectPaper courseCode={courseCode.toUpperCase()} />;
  } else if (courseCode && year) {
    page = (
      <Download
        courseCode={courseCode.toUpperCase()}
        courseTitle={selectedCourseTitle}
        type={"Previous Year Question Paper"}
        year={formattedYear}
        link={selectedCoursePaperLink}
      />
    );
  }

  return (
    <>
      <h1 className="text-xl text-gray-700">Previous Year Question Papers</h1>
      <Carousel
        sidebarComponent={
          <SemesterList baseUrl={"/previous-year-question-papers"} />
        }
        page={page}
      />
    </>
  );
};

export default PYQ;
