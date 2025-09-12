import React from "react";
import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/back.png";
import semesters from "../../data/data.json";
import { useAppContext } from "../../context/AppContext";

const SelectBlock = () => {
  const { courseCode, block } = useParams();
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse, page } =
    useAppContext();
  const selectedCourseTitle =
    semesters
      .find((sem) => sem.title === selectedSemester)
      .subjects.find((sub) => sub.code === selectedCourse)?.title ||
    "Select a Course";

  const selectedCourseMaterial = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.material;

  return (
    <div>
      {" "}
      <Link
        to={"/study-materials"}
        className="absolute p-2 bottom-4 left-1/2 -translate-x-1/2 cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
      >
        <img src={backIcon} width={20} className="brightness-20" />
      </Link>
      <div className="flex items-center justify-between p-3 border border-gray-200 rounded border-b-3 cursor-pointer mb-4 text-gray-700">
        <div>
          <h2 className="text-lg">
            {courseCode && courseCode.toUpperCase()} -{" "}
            {selectedCourseTitle || "Select a Course"}
          </h2>
          <p className=" text-text-primary/60">
            Syllabus is organized block wise
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {selectedCourseMaterial &&
          selectedCourseMaterial.map((material, index) => (
            <Link
              to={`${material.id.toLowerCase().replace(/\s/g, "")}`}
              key={index}
              className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
            >
              {material.id} - {material.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default SelectBlock;
