import semesters from "../data/data.json";
import { useAppContext } from "../context/AppContext";
import heroImg from "../assets/hero.jpg";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import downIcon from "../assets/down.png";

const HeroCarousel = ({
  sectionHeading,
  sectionDesc,
  totalPages,
  children,
}) => {
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
    <div className="flex flex-col max-h-[409px] w-full justify-between ">
      <div className="flex justify-between mb-2">
        <h1 className="text-xl text-text-primary">{sectionHeading}</h1>
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
            <ul className="absolute top-full right-0 bg-white z-10 shadow-2xl border border-gray-300">
              <li
                onClick={() => {
                  setOpenSessionSelect(false);
                  setSelectedSession("July 2024 & January 2025");
                }}
                className="px-4 py-2 text-nowrap hover:bg-green-200"
              >
                July 2024 & January 2025
              </li>
              <li
                onClick={() => {
                  setOpenSessionSelect(false);
                  setSelectedSession("July 2023 & January 2024");
                }}
                className="px-4 py-2 text-nowrap hover:bg-green-200"
              >
                July 2023 & January 2024
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex w-full justify-between overflow-hidden rounded-md">
        <div className="flex w-full">
          <div className="text-lg text-gray-700 cursor-pointer overflow-hidden bg-violet-100 relative z-10">
            {semesters.map((semester, index) => (
              <Link to="/previous-year-question-papers">
                {" "}
                <h1
                  key={index}
                  onClick={() => {
                    setPage(1);
                    setSelectedSemester(semester.title);
                  }}
                  className={`p-4 flex text-nowrap hover:bg-violet-200 border-b-2 border-violet-200 transition-all duration-200 ease ${
                    selectedSemester === semester.title
                      ? "bg-violet-200 border-violet-300"
                      : ""
                  }`}
                >
                  {semester.title}
                </h1>
              </Link>
            ))}
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

        <div className="relative overflow-hidden w-80 h-150">
          <img
            src={heroImg}
            className="absolute w-full h-full object-cover -top-50"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
