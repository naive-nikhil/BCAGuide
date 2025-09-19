import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SelectPaper from "../components/pyq/SelectPaper";
import Download from "../components/pyq/Download";

import { Helmet } from "react-helmet";

import { resources, coursesByCode } from "../data/flat_data";

const PYQ = () => {
  const { code, session, year } = useParams();

  const courseCode = code?.toUpperCase();
  const courseTitle = coursesByCode[courseCode];

  const paperLink = resources?.find(
    (resource) =>
      resource.courseCode === courseCode &&
      resource.type === "paper" &&
      resource.session === session?.toLowerCase() &&
      resource.year === year
  )?.paperLink;

  let page = null;
  if (!courseCode && !year) {
    page = <CoursesPage sectionDesc="Previous Year Question Papers" />;
  } else if (courseCode && !year) {
    page = (
      <SelectPaper
        courseCode={courseCode.toUpperCase()}
        courseTitle={courseTitle}
      />
    );
  } else if (courseCode && year) {
    page = (
      <Download
        courseCode={courseCode}
        courseTitle={courseTitle}
        type={"Previous Year Question Paper"}
        year={`${session} ${year}`}
        link={paperLink}
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
