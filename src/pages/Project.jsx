import backIcon from "../assets/back.png";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";

const Project = () => {
  const [selectedSession, setSelectedSession] = useState("june");
  const [selectedYear, setSelectedYear] = useState("");
  const { setPage, selectedSemester, setSelectedCourse, selectedCourse } =
    useAppContext();

  const { session } = useParams();
  const { courseCode } = useParams();
  console.log(session);
  console.log(courseCode);

  useEffect(() => {
    if (!courseCode && session) {
      setSelectedSession(session);
      setPage(1);
    } else if (courseCode && session) {
      setSelectedCourse(courseCode.toUpperCase());
      setPage(2);
    }
  }, [courseCode, session]);

  const selectedCourseTitle = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.title;

  const selectedSessionCourseAssignmentLink = semesters
    .find((sem) => sem.title === selectedSemester)
    .subjects.find((sub) => sub.code === selectedCourse)?.assignments?.[
    selectedSession
  ];

  console.log(selectedSessionCourseAssignmentLink);
  return (
    <div className="flex flex-col">
      <div className="h-[409px]">This is the Project Page</div>
      <FeaturedCarousel />
    </div>
  );
};

export default Project;
