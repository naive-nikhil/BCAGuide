import { useState, useEffect } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

import semesters from "../data/data.json";
import { useParams } from "react-router-dom";

import Synopsis from "../components/project/Synopsis";
import Report from "../components/project/Report";
import Viva from "../components/project/Viva";

const Project = () => {
  const [selectedStep, setSelectedStep] = useState("synopsis");

  const stepContent = {
    synopsis: <Synopsis />,
    report: <Report />,
    viva: <Viva />,
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-h-[409px] w-full justify-between ">
        <div className="flex justify-between mb-2">
          <h1 className="text-xl text-text-primary">
            Project Syopsis & Report (BCSP064)
          </h1>
        </div>

        <div className="flex w-full justify-between overflow-hidden rounded-md">
          <div className="flex w-full">
            <div className="relative bg-violet-100 w-fit p-2 h-full flex flex-col gap-6 items-center text-lg text-gray-700">
              <h1 className="p-3 bg-violet-300 rounded-md">
                Steps to complete this course
              </h1>
              <h2
                onClick={() => setSelectedStep("synopsis")}
                className={`relative p-3 rounded-md bg-violet-200 w-full text-center border border-violet-300 cursor-pointer border-b-2 hover:border-violet-400 ${
                  selectedStep === "synopsis" ? "border-violet-400" : ""
                }`}
              >
                Project Proposal & Synopsis{" "}
                <span className="absolute -top-4 left-1/2 border border-emerald-300 -translate-x-1/2 w-6 h-6 flex justify-center items-center rounded-full bg-emerald-200 text-sm">
                  1
                </span>
              </h2>
              <h2
                onClick={() => setSelectedStep("report")}
                className={`relative p-3 rounded-md bg-violet-200 w-full text-center border border-violet-300 cursor-pointer border-b-2 hover:border-violet-400 ${
                  selectedStep === "report" ? "border-violet-400" : ""
                }`}
              >
                Project Report{" "}
                <span className="absolute -top-4 left-1/2 border border-emerald-300 -translate-x-1/2 w-6 h-6 flex justify-center items-center rounded-full bg-emerald-200 text-sm">
                  2
                </span>
              </h2>
              <h2
                onClick={() => setSelectedStep("viva")}
                className={`relative p-3 rounded-md bg-violet-200 w-full text-center border border-violet-300 cursor-pointer border-b-2 hover:border-violet-400 ${
                  selectedStep === "viva" ? "border-violet-400" : ""
                }`}
              >
                Viva Voce{" "}
                <span className="absolute -top-4 left-1/2 border border-emerald-300 -translate-x-1/2 w-6 h-6 flex justify-center items-center rounded-full bg-emerald-200 text-sm">
                  3
                </span>
              </h2>
              <h2 className="text-sm absolute bottom-0 p-3">
                Note: All steps must be completed in order to complete this
                course.
              </h2>
            </div>

            <div className="flex-1 bg-white p-4 h-full overflow-scroll">
              {stepContent[selectedStep] || <></>}
            </div>
          </div>

          <div className="relative overflow-hidden w-80 h-150">
            <img
              src={heroImg}
              className="absolute w-full h-full object-cover -top-50"
            />
          </div>
        </div>
      </div>
      <FeaturedCarousel />
    </div>
  );
};

export default Project;
