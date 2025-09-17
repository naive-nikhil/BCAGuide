import { Link } from "react-router-dom";
import backIcon from "../../assets/back.png";
import { useState } from "react";
import { resources } from "../../data/flat_data";

const SelectPaper = ({ courseCode, courseTitle }) => {
  const [session, setSession] = useState("june");

  const coursePapers = resources?.filter(
    (resource) =>
      resource.type === "paper" &&
      resource.courseCode === courseCode &&
      resource.session === session
  );

  const paperTitle = [...session][0].toUpperCase() + session.slice(1);

  return (
    <div className="relative">
      <Link
        to={-1}
        className="absolute right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
      >
        <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
      </Link>
      <div>
        <h1 className="text-lg">{courseCode}</h1>
        <h2>{courseTitle}</h2>
        <p className=" text-text-primary/60">
          Papers are organised session wise
        </p>
      </div>
      <div className="flex gap-2 mt-2">
        <div
          onClick={() => setSession("june")}
          className={`bg-green-200 text-gray-700 px-3 py-2 cursor-pointer text-sm rounded-md border border-b-2 border-green-300 ${
            session === "june" ? "border-green-400" : ""
          }`}
        >
          June
        </div>
        <div
          onClick={() => setSession("december")}
          className={`bg-green-200 text-gray-700 px-3 py-2 cursor-pointer text-sm rounded-md border border-b-2 border-green-300 ${
            session === "december" ? "border-green-400" : ""
          }`}
        >
          December
        </div>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        {coursePapers &&
          coursePapers.map((paper, index) => (
            <Link
              to={`${paperTitle}/${paper.year}`}
              key={index}
              className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
            >
              {paperTitle} {paper.year}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default SelectPaper;
