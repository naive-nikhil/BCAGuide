import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import { useState, useEffect } from "react";
import backIcon from "../assets/back.png";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";

const PYQ = () => {
  const [selectedSession, setSelectedSession] = useState("june");
  const [selectedYear, setSelectedYear] = useState("");
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse } =
    useAppContext();

  const { courseCode } = useParams();
  const { year } = useParams();

  console.log(year);

  useEffect(() => {
    if (!courseCode && !year) {
      setPage(1);
    } else if (courseCode && !year) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(2);
    } else if (courseCode && year) {
      setSelectedCourse(courseCode.toUpperCase());
      setSelectedYear(formatYear(year));
      setPage(3);
    }
  }, [courseCode, year]);

  const formatYear = (yearParam) => {
    return yearParam
      .split("-") // ["june", "2015"]
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ["June", "2015"]
      .join(" "); // "June 2015"
  };

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.title;

  const selectedCoursePapers = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.papers.session?.[
    selectedSession
  ];

  const selectedCoursePaperLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)
    ?.papers.session?.[selectedSession].find(
      (paper) => paper.year === selectedYear
    )?.link;

  console.log(selectedCoursePaperLink);

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Previous Year Question Papers With Solutions
        </h1>
        <HeroCarousel
          sectionHeading={"Previous Year Question Papers With Solutions"}
          sectionDesc={"previous year question papers"}
          totalPages={3}
          baseUrl={"/previous-year-question-papers"}
        >
          {/* Page - 2 */}
          <>
            <Link
              to="/previous-year-question-papers"
              className="absolute right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
            >
              <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
            </Link>
            <div>
              <h1 className="text-lg">{selectedCourse}</h1>
              <h2>{selectedCourseTitle}</h2>
              <p className=" text-text-primary/60">
                Papers are organised session wise
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <div
                onClick={() => setSelectedSession("june")}
                className={`bg-green-200 text-gray-700 px-3 py-2 text-sm rounded-md border border-b-2 border-green-300 ${
                  selectedSession === "june" ? "border-green-400" : ""
                }`}
              >
                June
              </div>
              <div
                onClick={() => setSelectedSession("december")}
                className={`bg-green-200 text-gray-700 px-3 py-2 text-sm rounded-md border border-b-2 border-green-300 ${
                  selectedSession === "december" ? "border-green-400" : ""
                }`}
              >
                December
              </div>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {selectedCoursePapers &&
                selectedCoursePapers.map((paper, index) => (
                  <Link
                    to={paper.year.toLowerCase().replace(/\s+/g, "-")}
                    key={index}
                    className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
                  >
                    {paper.year}
                  </Link>
                ))}
            </ul>
          </>

          {/* Page - 3 */}
          <>
            <Link
              to={`/previous-year-question-papers/${courseCode}`}
              className="absolute lg:relative right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
            >
              <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
            </Link>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-col justify-between">
                <h1 className="text-lg flex items-center gap-2">
                  {selectedCourse}
                  <p className="bg-green-100 text-green-600 text-sm w-fit px-2 rounded">
                    Solved
                  </p>
                </h1>
                <h2>{selectedCourseTitle}</h2>
                <h3>Previous Year Question Paper - {selectedYear}</h3>

                <div className="flex lg:flex-row w-full gap-1 mt-4">
                  <a
                    className="w-full block text-center rounded py-2 cursor-pointer bg-blue-200 hover:-translate-y-1 transition duration-300 ease-in-out text-blue-600"
                    target="_blank"
                    href={selectedCoursePaperLink}
                  >
                    {" "}
                    Download Paper
                  </a>

                  <br />
                  <button
                    className={`w-full block rounded py-2 cursor-pointer bg-green-200 hover:-translate-y-1 transition duration-300 ease-in-out text-green-600`}
                  >
                    Download Solution
                  </button>
                </div>
              </div>
              <div className="relative h-50 rounded-md bg-blue-200 w-full overflow-hidden group">
                <img
                  src={bcs012June2024}
                  className="absolute object-cover -rotate-25 shadow-2xl right-0 -bottom-4 translate-y-1/2 translate-x-1/3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          </>
        </HeroCarousel>
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default PYQ;
