import React from "react";
import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/back.png";
import semesters from "../../data/data.json";
import { useAppContext } from "../../context/AppContext";

const SelectBlock = () => {
  
  const { selectedSemester, selectedCourse } = useAppContext();
  const selectedCourseTitle =
    semesters
      .find((sem) => sem.title === selectedSemester)
      .subjects.find((sub) => sub.code === selectedCourse)?.title ||
    "Select a Course";

  const selectedCourseMaterial = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.material;

  return (
    <div className="relative flex flex-col gap-4">
      {" "}
      <Link
        to="/study-materials"
        className="absolute right-0 flex items-center justify-center w-8 h-8 bg-violet-200 border border-r-2 border-b-2 border-violet-300 rounded-full"
      >
        <img src={backIcon} className="w-4 h-auto brightness-20" alt="" />
      </Link>
      <div>
        <h1 className="text-lg">{selectedCourse}</h1>
        <h2>{selectedCourseTitle}</h2>
        <p className=" text-text-primary/60">
          Papers are organised session wise
        </p>
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
