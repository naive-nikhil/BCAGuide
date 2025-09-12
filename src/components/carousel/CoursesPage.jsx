import { Link } from "react-router-dom";
import semesters from "../../data/data.json";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import downIcon from "../../assets/down.png";

const CoursesPage = ({ sectionDesc, baseUrl }) => {
  const { selectedSemester } = useAppContext();
  const [selectedSession, setSelectedSession] = useState(
    "July 2024 & January 2025"
  );

  const [openSessionSelect, setOpenSessionSelect] = useState(false);
  return (
    <div className="w-full [&_h2]:cursor-pointer flex flex-col gap-4 relative">
      {baseUrl && baseUrl.includes("assignments") && (
        <div className="text-gray-700 cursor-pointer select-none relative lg:absolute top-0 right-0">
          <h2
            onClick={() => setOpenSessionSelect(!openSessionSelect)}
            className={`flex items-center justify-between gap-4 bg-white px-2 rounded-md border border-gray-300 ${
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
        <h1 className="text-lg">Courses in {selectedSemester}</h1>
        <p className="text-gray-400">{sectionDesc}</p>
      </section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-0 lg:pb-4">
        {semesters
          .find((sem) => sem.title === selectedSemester)
          .subjects.map((sub, index) => (
            <Link
              to={sub.code.toLowerCase()}
              key={index}
              className="p-2 border border-gray-200 rounded border-b-3 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease"
            >
              <h2 className="text-blue-600">{sub.code}</h2>
              <p className=" text-gray-400 text-sm line-clamp-1">{sub.title}</p>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
