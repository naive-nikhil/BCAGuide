import backIcon from "../assets/back.png";

import { useState, useEffect } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";
import SemesterList from "../components/carousel/SemesterList";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import DownloadAssignment from "../components/assignments/DownloadAssignment";

const Assignments = () => {
  const [selectedSession, setSelectedSession] = useState("june");
  const [selectedYear, setSelectedYear] = useState("");
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse, page } =
    useAppContext();

  const { session } = useParams();
  const { courseCode } = useParams();
  console.log(session);
  console.log(courseCode);

  useEffect(() => {
    if (!courseCode && session) {
      setSelectedSession(session);
      setPage(
        <CoursesPage sectionDesc="Assignments" baseUrl={"/assignments"} s />
      );
    } else if (courseCode && session) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(<DownloadAssignment />);
    }
  }, [courseCode, session]);
  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Previous Year Question Papers With Solutions
        </h1>
        <Carousel
          sidebarComponent={<SemesterList baseUrl={"/assignments"} />}
          pages={page}
        />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default Assignments;
