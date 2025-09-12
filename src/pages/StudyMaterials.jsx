import backIcon from "../assets/back.png";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import { useState, useEffect } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";

const StudyMaterials = () => {
  const [selectedSession, setSelectedSession] = useState("june");
  const [selectedYear, setSelectedYear] = useState("");
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse } =
    useAppContext();

  const { courseCode, block } = useParams();

  console.log(block);

  useEffect(() => {
    if (!courseCode && !block) {
      setPage(1);
    } else if (courseCode && !block) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(2);
    } else if (courseCode && block) {
      setPage(3);
    }
  }, [courseCode, block]);

  const selectedCourseTitle =
    semesters
      .find((sem) => sem.title === selectedSemester)
      .subjects.find((sub) => sub.code === selectedCourse)?.title ||
    "Select a Course";

  const selectedCourseMaterial = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.material;

  const selectedCourseMaterialDescription =
    semesters
      .find((sem) => sem.title === selectedSemester)
      .subjects.find((sub) => sub.code === selectedCourse)
      ?.material.find(
        (mat) => mat.id.toLowerCase().replace(/\s/g, "") === block
      )?.description || "No description available";

  const selectedCourseMaterialLink =
    semesters
      .find((sem) => sem.title === selectedSemester)
      .subjects.find((sub) => sub.code === selectedCourse)
      ?.material.find(
        (mat) => mat.id.toLowerCase().replace(/\s/g, "") === block
      )?.link || "#";

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Previous Year Question Papers With Solutions
        </h1>
        <Carousel
          sidebarComponent={
            <SemesterList baseUrl={"/previous-year-question-papers"} />
          }
          pages={page}
        />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default StudyMaterials;
