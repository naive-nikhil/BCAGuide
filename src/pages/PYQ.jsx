import FeaturedCarousel from "../components/FeaturedCarousel";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SelectPaper from "../components/pyq/SelectPaper";
import DownloadPaper from "../components/pyq/DownloadPaper";

const PYQ = () => {
  const { courseCode, year } = useParams();

  let page = null;
  if (!courseCode && !year) {
    page = <CoursesPage sectionDesc="Previous Year Question Papers" />;
  } else if (courseCode && !year) {
    page = <SelectPaper />;
  } else if (courseCode && year) {
    page = <DownloadPaper />;
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
