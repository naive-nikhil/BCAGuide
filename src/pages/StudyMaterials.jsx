import backIcon from "../assets/back.png";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import { useState, useEffect } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import CoursesPage from "../components/carousel/CoursesPage";
import SemesterList from "../components/carousel/SemesterList";
import SelectBlock from "../components/material/SelectBlock";
import DownloadMaterial from "../components/material/DownloadMaterial";

const StudyMaterials = () => {
  const { courseCode, block } = useParams();
  let page = null;
  if (!courseCode && !block) {
    page = (
      <CoursesPage sectionDesc="Study Materials" baseUrl={"/study-materials"} />
    );
  } else if (courseCode && !block) {
    page = <SelectBlock />;
  } else if (courseCode && block) {
    page = <DownloadMaterial />;
  }

  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">Study Materials</h1>
        <Carousel sidebarComponent={<SemesterList />} page={page} />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default StudyMaterials;
