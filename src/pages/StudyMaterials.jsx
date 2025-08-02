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

  const { courseCode, block } = useParams();

  console.log(block)

  useEffect(() => {
    if (!courseCode && !block) {
      setPage(1);
    } else if (courseCode && !block) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(2);
    } else if (courseCode && block) {
      setPage(3);
    }
  }, [courseCode, block]);

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.title || "Select a Course";

    console.log(selectedCourseTitle);

  const selectedCourseMaterial = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.material;

    console.log(selectedCourseMaterial);

  return (
    <div className="flex flex-col">
      <HeroCarousel
        sectionHeading={"Study Materials"}
        sectionDesc={"syllabus"}
        totalPages={3}
        baseUrl={"/study-materials"}
      >
        {/* Page - 2 */}
        <>
          <Link
            to={"/study-materials"}
            className="absolute p-2 bottom-4 left-1/2 -translate-x-1/2 cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
          >
            <img src={backIcon} width={20} className="brightness-20" />
          </Link>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded border-b-3 cursor-pointer mb-4 text-gray-700">
            <div>
              <h2 className="text-lg">
                {courseCode&& courseCode.toUpperCase()} - {selectedCourseTitle || "Select a Course"}
              </h2>
              <p className=" text-text-primary/60">
                Syllabus is organized block wise
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {selectedCourseMaterial &&
              selectedCourseMaterial.map((material, index) => (
                <Link
                  to={`${material.id.toLowerCase().replace(/\s/g, "")}`}
                  key={index}
                  className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
                >
                  {material.id} - {material.title}
                </Link>
              ))}
          </ul>
        </>

        {/* Page - 3 */}
                <div className="flex justify-between gap-4">
                  <div className="w-full flex flex-col justify-between">
                    <Link
                      to={`/study-materials/${courseCode}`}
                      className="p-2 w-fit cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
                    >
                      <img src={backIcon} width={20} className="brightness-20" />
                    </Link>
                    <div>
                      <h1 className="text-lg flex items-center gap-2">
                        {}
                        <p className="bg-green-100 text-green-600 text-sm w-fit px-2 rounded">
                          Solved
                        </p>
                      </h1>
                      <h2>{selectedCourseTitle}</h2>
                      <h3>Previous Year Question Paper - {}</h3>
        
                      <div className="flex w-full gap-1 mt-4">
                        <a
                          className="w-full text-center rounded py-2 cursor-pointer bg-blue-200 mt-2 hover:-translate-y-1 transition duration-300 ease-in-out text-blue-600"
                          target="_blank"
                          href=""
                        >
                          {" "}
                          Download Paper
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
