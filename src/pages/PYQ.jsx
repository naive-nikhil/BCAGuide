import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import { useState, useEffect } from "react";
import backIcon from "../assets/back.png";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";

const PYQ = () => {
  const [selectedSession, setSelectedSession] = useState("june");
  const [selectedYear, setSelectedYear] = useState("");
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse } =
    useAppContext();

  const { courseCode } = useParams();
  const { year } = useParams();

  console.log(year);

  useEffect(() => {
    if (!courseCode && !year) {
      setPage(1);
    } else if (courseCode && !year) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(2);
    } else if (courseCode && year) {
      setSelectedCourse(courseCode.toUpperCase());
      setSelectedYear(formatYear(year));
      setPage(3);
    }
  }, [courseCode, year]);

  const formatYear = (yearParam) => {
    return yearParam
      .split("-") // ["june", "2015"]
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ["June", "2015"]
      .join(" "); // "June 2015"
  };

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.title;

  const selectedCoursePapers = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.papers.session?.[
    selectedSession
  ];

  const selectedCoursePaperLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)
    ?.papers.session?.[selectedSession].find(
      (paper) => paper.year === selectedYear
    )?.link;

  console.log(selectedCoursePaperLink);

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Previous Year Question Papers With Solutions
        </h1>
        <Carousel sidebarComponent={<SemesterList />} pages={<CoursesPage />} />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default PYQ;
