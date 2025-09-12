import { Link } from "react-router-dom";
import backIcon from "../../assets/back.png";
import { useAppContext } from "../../context/AppContext";
import semesters from "../../data/data.json";
import bcs012June2024 from "../../assets/BCS012_JUNE2024.jpg";

const DownloadPaper = ({ courseCode, courseTitle, type, year, link }) => {
  return (
    <div className="relative h-full">
      <div className="flex flex-col lg:flex-row justify-between gap-2 h-full">
        <div className="flex-1 flex flex-col justify-between">
          <Link
            to={`/previous-year-question-papers/${courseCode.toLowerCase()}`}
            className="absolute lg:relative right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
          >
            <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
          </Link>
          <div>
            <h1 className="text-lg flex items-center gap-2">
              {courseCode}
              <p className="bg-green-100 text-green-600 text-sm w-fit px-2 rounded">
                Solved
              </p>
            </h1>
            <h2>{courseTitle}</h2>
            <h3>
              {type} - {year}
            </h3>
          </div>
        </div>
        <div className="flex flex-1 lg:max-w-120 flex-col items-center gap-2">
          <div className="relative h-60 lg:h-full rounded-md bg-blue-200 border border-blue-200 border-r-3 border-b-3 w-full overflow-hidden group">
            <img
              src={bcs012June2024}
              className="absolute object-cover -rotate-25 shadow-2xl right-0 -bottom-4 translate-y-1/2 translate-x-1/3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="flex lg:flex-row w-full gap-1">
            <a
              className="w-full block text-center text-nowrap rounded py-2 lg:p-2 cursor-pointer bg-blue-200 border border-blue-300 border-b-2 hover:border-blue-400 text-blue-600"
              target="_blank"
              href={link}
            >
              {" "}
              Download Paper
            </a>

            <br />
            <button
              className={`w-full block text-center text-nowrap rounded py-2 lg:p-2 cursor-pointer bg-green-200 border border-b-2 border-green-300 hover:border-green-400 text-green-600`}
            >
              Download Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPaper;
