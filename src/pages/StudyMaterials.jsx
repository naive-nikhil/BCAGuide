import backIcon from "../assets/back.png";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";

const StudyMaterials = () => {
  const [selectedSession, setSelectedSession] = useState("june");
  const [selectedYear, setSelectedYear] = useState("");
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse } =
    useAppContext();

  const { courseCode } = useParams();
  console.log(courseCode);

  useEffect(() => {
    if (!courseCode) {
      setPage(1);
    } else if (courseCode) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(2);
    }
  }, [courseCode]);

  // const selectedCourseTitle = semesters
  //   .find((sem) => sem.title === selectedSemester)
  //   .subjects.find((sub) => sub.code === selectedCourse)?.title;

  // const selectedSessionCourseAssignmentLink = semesters
  //   .find((sem) => sem.title === selectedSemester)
  //   .subjects.find((sub) => sub.code === selectedCourse)?.assignments?.[
  //   selectedSession
  // ];

  // console.log(selectedSessionCourseAssignmentLink);
  return (
    <div className="flex flex-col">
      <HeroCarousel
        sectionHeading={"Study Materials"}
        sectionDesc={"assignments"}
        totalPages={2}
        baseUrl={"/study-materials"}
      >
        {/* Page - 2 */}
        <div className="flex justify-between gap-4">
          <div className="w-full flex flex-col justify-between">
            <Link
              to={`/study-materials`}
              className="p-2 w-fit cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
            >
              <img src={backIcon} width={20} className="brightness-20" />
            </Link>
            <div>
              <h1 className="text-lg flex items-center gap-2">
                {selectedCourse}
                <p className="bg-green-100 text-green-600 text-sm w-fit px-2 rounded">
                  Solved
                </p>
              </h1>
              <h2>{}</h2>
              <h3>Assignments </h3>

              <div className="flex w-full gap-1 mt-4">
                <a
                  className="w-full text-center rounded py-2 cursor-pointer bg-blue-200 mt-2 hover:-translate-y-1 transition duration-300 ease-in-out text-blue-600"
                  target="_blank"
                  href="/"
                >
                  {" "}
                  Download Assignment
                </a>

                <br />
                <button
                  className={`w-full rounded py-2 cursor-pointer bg-green-200 mt-2 hover:-translate-y-1 transition duration-300 ease-in-out text-green-600`}
                >
                  Download Solution
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-82 border rounded-md border-gray-300 bg-blue-200 w-full overflow-hidden group">
            <img
              src={bcs012June2024}
              className="absolute object-cover -rotate-25 shadow-2xl right-0 -bottom-4 translate-y-1/2 translate-x-1/3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </HeroCarousel>
      <FeaturedCarousel />
    </div>
  );
};

export default StudyMaterials;
