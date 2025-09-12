import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/back.png";
import { useAppContext } from "../../context/AppContext";
import semesters from "../../data/data.json";
import { useEffect, useState } from "react";

const SelectPaper = ({ courseCode }) => {
  const { selectedSemester } = useAppContext();
  const [session, setSession] = useState("june");

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode)?.title;

  const selectedCoursePapers = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === courseCode)?.papers.session?.[session];

  return (
    <div className="relative">
      <Link
        to="/previous-year-question-papers"
        className="absolute right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
      >
        <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
      </Link>
      <div>
        <h1 className="text-lg">{courseCode}</h1>
        <h2>{selectedCourseTitle}</h2>
        <p className=" text-text-primary/60">
          Papers are organised session wise
        </p>
      </div>
      <div className="flex gap-2 mt-2">
        <div
          onClick={() => setSession("june")}
          className={`bg-green-200 text-gray-700 px-3 py-2 text-sm rounded-md border border-b-2 border-green-300 ${
            session === "june" ? "border-green-400" : ""
          }`}
        >
          June
        </div>
        <div
          onClick={() => setSession("december")}
          className={`bg-green-200 text-gray-700 px-3 py-2 text-sm rounded-md border border-b-2 border-green-300 ${
            session === "december" ? "border-green-400" : ""
          }`}
        >
          December
        </div>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
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
    </div>
  );
};

export default SelectPaper;
