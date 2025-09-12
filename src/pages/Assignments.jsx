import FeaturedCarousel from "../components/FeaturedCarousel";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import Download from "../components/pyq/Download";
import { useAppContext } from "../context/AppContext";
import semesters from "../data/data.json";

const Assignments = () => {
  const { session, courseCode } = useParams();
  const { selectedSemester, selectedCourse } = useAppContext();

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode.toUpperCase())?.title;

  const selectedSessionCourseAssignmentLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.assignments?.[
    selectedSession
  ];

  let page = null;
  if (!courseCode && session) {
    page = <CoursesPage sectionDesc="Assignments" baseUrl={"/assignments"} />;
  } else if (courseCode && session) {
    page = (
      <Download
        courseCode={courseCode.toUpperCase()}
        courseTitle={selectedCourseTitle}
        type={"Assignment"}
        year={session}
        link={selectedSessionCourseAssignmentLink}
      />
    );
  }

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">Assignments</h1>
        <Carousel sidebarComponent={<SemesterList />} page={page} />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default Assignments;
