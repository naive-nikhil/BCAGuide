import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import downIcon from "../../assets/down.png";

import { coursesBySemester } from "../../data/flat_data";
import { Helmet } from "react-helmet";

const CoursesPage = ({ sectionDesc, baseUrl }) => {
  const { selectedSemester } = useAppContext();
  const [openSessionSelect, setOpenSessionSelect] = useState(false);
  const [selectedSession, setSelectedSession] = useState(
    "July 2024 & January 2025"
  );

  const semesterTitle = coursesBySemester.find(
    (item) => item.id === Number(selectedSemester)
  )?.title;

  const courses = coursesBySemester.find(
    (item) => item.id === Number(selectedSemester)
  )?.courses;

  // inside CoursesPage
  const metaTitle = `${sectionDesc} for ${
    semesterTitle || "All Semesters"
    } | BCAGuide - IGNOU`;
  
  const metaDescription = `Access IGNOU ${sectionDesc.toLowerCase()} for ${
    semesterTitle || "all semesters"
  }. Find solved previous year question papers, solved assignments, and study notes organized for easy access. ${
    baseUrl?.includes("assignments")
      ? "Current session: " + selectedSession
      : ""
  }`;

  return (
    <div className="w-full [&_h2]:cursor-pointer flex flex-col gap-4 relative">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {baseUrl && baseUrl.includes("assignments") && (
        <div className="text-gray-700 cursor-pointer select-none relative lg:absolute top-0 right-0">
          <h2
            onClick={() => setOpenSessionSelect(!openSessionSelect)}
            className={`flex items-center justify-between gap-4 bg-white p-2 rounded-md border border-gray-300 ${
              openSessionSelect && "rounded-b-none"
            }`}
          >
            {selectedSession}
            <img
              src={downIcon}
              className={`brightness-10 mb-[2px] transition-all duration-300 ease ${
                openSessionSelect ? "rotate-180" : ""
              }`}
              width={12}
            />
          </h2>
          {openSessionSelect && (
            <ul className="absolute rounded-b-md top-full w-full right-0 bg-white z-10 shadow-xl border border-gray-300 flex flex-col">
              <Link
                to={"/assignments/2024-25"}
                onClick={() => {
                  setOpenSessionSelect(false);
                  setSelectedSession("July 2024 & January 2025");
                }}
                className="p-2 text-nowrap hover:bg-green-200"
              >
                July 2024 & January 2025
              </Link>
              <Link
                to={"/assignments/2023-24"}
                onClick={() => {
                  setOpenSessionSelect(false);
                  setSelectedSession("July 2023 & January 2024");
                }}
                className="p-2 text-nowrap hover:bg-green-200"
              >
                July 2023 & January 2024
              </Link>
            </ul>
          )}
        </div>
      )}
      <section>
        <h1 className="text-lg">Courses in {semesterTitle}</h1>
        <p className="text-gray-400">{sectionDesc}</p>
      </section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-0 lg:pb-4">
        {courses &&
          courses.map((course, index) => (
            <Link
              to={course.courseCode.toLowerCase()}
              key={index}
              className="p-2 border border-gray-200 rounded border-b-3 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease"
            >
              <h2 className="text-blue-600">{course.courseCode}</h2>
              <p className=" text-gray-400 text-sm line-clamp-1">
                {course.courseTitle}
              </p>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
