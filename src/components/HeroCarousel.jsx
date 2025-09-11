import semesters from "../data/data.json";
import { useAppContext } from "../context/AppContext";
import heroImg from "../assets/hero.jpg";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import downIcon from "../assets/down.png";

const HeroCarousel = ({ sectionDesc, totalPages, children, baseUrl }) => {
  const [selectedSession, setSelectedSession] = useState(
    "July 2024 & January 2025"
  );

  const [openSessionSelect, setOpenSessionSelect] = useState(false);

  const contentPages = Children.toArray(children);
  if (contentPages.length !== totalPages - 1) {
    console.warn(
      `Expected ${totalPages - 1} content pages but received ${
        contentPages.length
      }`
    );
  }
  const {
    selectedSemester,
    setSelectedSemester,
    setSelectedCourse,
    page,
    setPage,
  } = useAppContext();

  return (
    <>
      {/* <div className="flex justify-end">
        {baseUrl && baseUrl.includes("assignments") && (
          <div className="relative text-gray-700 cursor-pointer select-none">
            <h2
              onClick={() => setOpenSessionSelect(!openSessionSelect)}
              className="flex items-center gap-4 bg-white px-2 rounded-md border border-gray-300"
            >
              {selectedSession}
              <img
                src={downIcon}
                className={`brightness-10 mb-1 transition-all duration-300 ease ${
                  openSessionSelect ? "rotate-180" : ""
                }`}
                width={12}
              />
            </h2>
            {openSessionSelect && (
              <ul className="absolute top-full right-0 bg-white z-10 shadow-2xl border border-gray-300 flex flex-col">
                <Link
                  to={"/assignments/2024-25"}
                  onClick={() => {
                    setOpenSessionSelect(false);
                    setSelectedSession("July 2024 & January 2025");
                  }}
                  className="px-4 py-2 text-nowrap hover:bg-green-200"
                >
                  July 2024 & January 2025
                </Link>
                <Link
                  to={"/assignments/2023-24"}
                  onClick={() => {
                    setOpenSessionSelect(false);
                    setSelectedSession("July 2023 & January 2024");
                  }}
                  className="px-4 py-2 text-nowrap hover:bg-green-200"
                >
                  July 2023 & January 2024
                </Link>
              </ul>
            )}
          </div>
        )}
      </div> */}

      <div className="flex w-full justify-between overflow-hidden rounded-md text-gray-700">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="bg-violet-100 p-2 flex flex-col w-full gap-2">
            <h1 className="lg:hidden text-lg p-3 bg-violet-300 rounded-md w-full text-center">
              Select Semester
            </h1>
            <ul className="text-sm lg:text-lg text-gray-700 cursor-pointer overflow-hidden relative z-10 flex flex-row lg:flex-col gap-2">
              {semesters.map((semester, index) => (
                <Link
                  key={index}
                  to={baseUrl}
                  onClick={() => {
                    setPage(1);
                    setSelectedSemester(semester.title);
                  }}
                  className={`p-3 rounded-md w-full text-nowrap bg-violet-200 border border-violet-300 border-b-2 transition-all duration-200 ease text-center ${
                    selectedSemester === semester.title
                      ? "border-violet-400"
                      : ""
                  }`}
                >
                  {" "}
                  <span className="hidden lg:block">{semester.title}</span>
                  <span className="block lg:hidden">
                    {semester.title.replace(/Semester\s*/i, "")}
                  </span>
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex-1 bg-white">
            <div
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${(100 / totalPages) * (page - 1)}%)`,
              }}
              className={`flex transition-transform h-full duration-500 ease-in-out`}
            >
              {/* Page 1 - Will remain same across the app */}
              <div className="w-full p-5 [&_h2]:cursor-pointer h-full">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <li className="p-3 border border-gray-200 rounded border-b-3 cursor-pointer">
                    <h2 className="text-lg">Courses in {selectedSemester}</h2>
                    <p className=" text-text-primary/60">
                      This section contains {sectionDesc} of{" "}
                      {selectedSemester.toLowerCase()} courses!
                    </p>
                  </li>
                  {semesters
                    .find((sem) => sem.title === selectedSemester)
                    .subjects.map((sub, index) => (
                      <Link
                        to={sub.code.toLowerCase()}
                        key={index}
                        className="p-3 border border-gray-200 rounded border-b-3 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease"
                      >
                        <h2 className="text-blue-600">{sub.code}</h2>
                        <p className=" text-text-primary/60">{sub.title}</p>
                      </Link>
                    ))}
                </ul>
              </div>

              {contentPages.map((page, index) => (
                <div key={index + 2} className="w-full p-5 h-full relative">
                  {page}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden 2xl:block overflow-hidden w-80 h-150">
          <img
            src={heroImg}
            alt="Image representing a wooden block on table with text 'Do What You Love' written on it."
            className="absolute w-full h-full object-cover -top-50"
          />
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
