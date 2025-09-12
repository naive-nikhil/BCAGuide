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
    .subjects.find((sub) => sub.code === courseCode.toUpperCase())?.title;

  console.log(selectedCourseTitle);

  const session = year && year.split("-")[0];
  const formattedYear = year ? formatYear(year) : null;

  const selectedCoursePaperLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode)
    ?.papers.session?.[session].find(
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
        year={formattedYear}
        link={selectedCoursePaperLink}
      />
    );
  }

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">Previous Year Question Papers</h1>
        <Carousel
          sidebarComponent={
            <SemesterList baseUrl={"/previous-year-question-papers"} />
          }
          page={page}
        />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default PYQ;
