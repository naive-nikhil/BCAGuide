import semesters from "../data/data.json";
import { useAppContext } from "../context/AppContext";
import heroImg from "../assets/hero.jpg";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
import downIcon from "../assets/down.png";
import SemesterList from "./carousel/SemesterList";
import CoursesPage from "./carousel/CoursesPage";

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
          <SemesterList baseUrl={baseUrl} />
          <div className="flex-1 bg-white p-2 lg:p-4 overflow-auto">
            <div
              style={{
                width: `calc(${totalPages * 100}% + ${
                  (totalPages - 1) * 19
                }px)`,
                transform: `translateX(calc(-${
                  (100 / totalPages) * (page - 1)
                }% - ${(page - 1) * 6}px))`,
                height: "",
              }}
              className={`flex gap-4 transition-transform h-full duration-500 ease-in-out`}
            >
              {/* Page 1 - Will remain same across the app */}
              <CoursesPage sectionDesc={sectionDesc} />

              {contentPages.map((page, index) => (
                <div
                  key={index + 2}
                  className="w-full h-fit relative overflow-hidden"
                >
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
