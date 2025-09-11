import { useEffect } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SelectPaper from "../components/pyq/SelectPaper";
import DownloadPaper from "../components/pyq/DownloadPaper";

const PYQ = () => {
  const { setPage, setSelectedCourse, page } = useAppContext();
  const { courseCode, year } = useParams();

  useEffect(() => {
    if (!courseCode && !year) {
      setPage(<CoursesPage />);
    } else if (courseCode && !year) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(<SelectPaper />);
    } else if (courseCode && year) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(<DownloadPaper />);
    }
  }, [courseCode, year]);

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Previous Year Question Papers With Solutions
        </h1>
        <Carousel
          sidebarComponent={
            <SemesterList baseUrl={"/previous-year-question-papers"} />
          }
          pages={page}
        />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default PYQ;
