import { Link } from "react-router-dom";
import semesters from "../../data/data.json";
import { useAppContext } from "../../context/AppContext";

const SemesterList = ({ baseUrl }) => {
  const { selectedSemester, setSelectedSemester, setPage } = useAppContext();
  return (
    <div className="bg-violet-100 p-2 flex flex-col w-full lg:max-w-50 gap-2">
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
            className={`py-3 lg:p-0 lg:h-14 flex items-center justify-center rounded-md w-full text-nowrap bg-violet-200 border border-violet-300 border-b-2 hover:border-violet-400 ${
              selectedSemester === semester.title ? "border-violet-400" : ""
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
  );
};

export default SemesterList;
