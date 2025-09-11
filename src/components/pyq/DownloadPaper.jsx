import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/back.png";
import { useAppContext } from "../../context/AppContext";
import semesters from "../../data/data.json";
import bcs012June2024 from "../../assets/BCS012_JUNE2024.jpg";

const formatYear = (yearParam) => {
  return yearParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const DownloadPaper = () => {
  const { courseCode, year } = useParams();
  const { selectedSemester, selectedCourse, selectedSession } = useAppContext();
  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.title;

  const formattedYear = year ? formatYear(year) : null;

  const selectedCoursePaperLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)
    ?.papers.session?.[selectedSession].find(
      (paper) => paper.year === formattedYear
    )?.link;

  return (
    <div className="relative">
      <Link
        to={`/previous-year-question-papers/${courseCode}`}
        className="absolute lg:relative right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
      >
        <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
      </Link>
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div>
          <h1 className="text-lg flex items-center gap-2">
            {selectedCourse}
            <p className="bg-green-100 text-green-600 text-sm w-fit px-2 rounded">
              Solved
            </p>
          </h1>
          <h2>{selectedCourseTitle}</h2>
          <h3>Previous Year Question Paper - {formattedYear}</h3>
        </div>
        <div className="flex flex-1 flex-col items-center gap-2 border">
          <div className="relative h-70 rounded-md bg-blue-200 w-full overflow-hidden group">
            <img
              src={bcs012June2024}
              className="absolute object-cover -rotate-25 shadow-2xl right-0 -bottom-4 translate-y-1/2 translate-x-1/3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="flex lg:flex-row w-full gap-1">
            <a
              className="w-full block text-center rounded p-2 cursor-pointer bg-blue-200 hover:-translate-y-1 transition duration-300 ease-in-out text-blue-600"
              target="_blank"
              href={selectedCoursePaperLink}
            >
              {" "}
              Download Paper
            </a>

            <br />
            <button
              className={`w-full block text-center text-nowrap rounded p-2 cursor-pointer bg-green-200 hover:-translate-y-1 transition duration-300 ease-in-out text-green-600`}
            >
              Download Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPaper;
