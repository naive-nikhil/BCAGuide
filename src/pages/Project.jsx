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
      shortLabel: "Proposal",
      number: 1,
      component: <Synopsis />,
    },
    {
      key: "report",
      label: "Project Report",
      shortLabel: "Report",
      number: 2,
      component: <Report />,
    },
    {
      key: "viva",
      label: "Viva Voce",
      shortLabel: "Viva",
      number: 3,
      component: <Viva />,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:max-h-[409px] w-full justify-between ">
        <div className="flex justify-between mb-2">
          <h1 className="text-xl text-text-primary">
            Project Synopsis & Report (BCSP064)
          </h1>
        </div>

        <div className="flex w-full justify-between overflow-hidden rounded-md">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="relative bg-violet-100 p-2 lg:h-full flex flex-col gap-4 lg:gap-6 items-center text-lg text-gray-700">
              <h1 className="p-3 bg-violet-300 rounded-md w-full text-center">
                Steps to complete this course
              </h1>
              <div className="flex flex-row lg:flex-col gap-2 lg:gap-6 text-nowrap w-full mt-2 select-none">
                {steps.map((step) => (
                  <Step
                    key={step.key}
                    stepKey={step.key}
                    label={step.label}
                    shortLabel={step.shortLabel}
                    number={step.number}
                    selectedStep={selectedStep}
                    setSelectedStep={setSelectedStep}
                  />
                ))}
              </div>
              <h2 className="text-sm lg:absolute lg:bottom-0 p-1 lg:p-3">
                Note: All steps must be completed in order to complete this
                course.
              </h2>
            </div>

            <div className="flex-1 bg-white p-4 h-full overflow-auto">
              {steps.find((step) => step.key === selectedStep)?.component}
            </div>
          </div>

          <div className="relative hidden 2xl:block overflow-hidden w-80 h-150">
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
