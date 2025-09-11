import { Link } from "react-router-dom";
import semesters from "../../data/data.json";
import { useAppContext } from "../../context/AppContext";

const CoursesPage = ({ sectionDesc }) => {
  const { selectedSemester } = useAppContext();
  return (
    <div className="w-full [&_h2]:cursor-pointer flex flex-col gap-4">
      <section>
        <h1 className="text-lg">Courses in {selectedSemester}</h1>
        <p className="text-gray-400">
          This section contains {sectionDesc} of{" "}
          {selectedSemester.toLowerCase()} courses!
        </p>
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
