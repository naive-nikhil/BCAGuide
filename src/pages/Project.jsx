import { useState } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import heroImg from "../assets/hero.jpg";

import Synopsis from "../components/project/Synopsis";
import Report from "../components/project/Report";
import Viva from "../components/project/Viva";
import Step from "../components/project/Step";

const Project = () => {
  const [selectedStep, setSelectedStep] = useState("synopsis");

  const steps = [
    {
      key: "synopsis",
      label: "Project Proposal & Synopsis",
      number: 1,
      component: <Synopsis />,
    },
    {
      key: "report",
      label: "Project Report",
      number: 2,
      component: <Report />,
    },
    { key: "viva", label: "Viva Voce", number: 3, component: <Viva /> },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-h-[409px] w-full justify-between ">
        <div className="flex justify-between mb-2">
          <h1 className="text-xl text-text-primary">
            Project Synopsis & Report (BCSP064)
          </h1>
        </div>

        <div className="flex w-full justify-between overflow-hidden rounded-md">
          <div className="flex w-full">
            <div className="relative bg-violet-100 w-fit p-2 h-full flex flex-col gap-6 items-center text-lg text-gray-700">
              <h1 className="p-3 bg-violet-300 rounded-md">
                Steps to complete this course
              </h1>
              {steps.map((step) => (
                <Step
                  key={step.key}
                  stepKey={step.key}
                  label={step.label}
                  number={step.number}
                  selectedStep={selectedStep}
                  setSelectedStep={setSelectedStep}
                />
              ))}
              <h2 className="text-sm absolute bottom-0 p-3">
                Note: All steps must be completed in order to complete this
                course.
              </h2>
            </div>

            <div className="flex-1 bg-white p-4 h-full overflow-auto">
              {steps.find((step) => step.key === selectedStep)?.component}
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
