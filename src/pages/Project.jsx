import { useState } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import heroImg from "../assets/hero.jpg";

import Synopsis from "../components/project/Synopsis";
import Report from "../components/project/Report";
import Viva from "../components/project/Viva";
import Step from "../components/project/Step";

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

const Project = () => {
  const [selectedStep, setSelectedStep] = useState("synopsis");

  const activeStep = steps.find((step) => step.key === selectedStep);
  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Project Synopsis & Report (BCSP064)
        </h1>
        <div className="flex w-full justify-between overflow-hidden rounded-md">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="bg-violet-100 p-2 lg:h-full flex flex-col gap-6 items-center text-lg text-gray-700">
              <h1 className="p-3 bg-violet-300 rounded-md w-full text-center">
                Steps to complete this course
              </h1>
              <div className="flex flex-row lg:flex-col gap-2 lg:gap-6 text-nowrap w-full select-none">
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
            </div>

            <div className="flex-1 bg-white p-4 h-full overflow-auto">
              {activeStep?.component}
            </div>
          </div>

          <div className="relative hidden 2xl:block overflow-hidden w-80 h-150">
            <img
              src={heroImg}
              alt="Image representing a wooden block on table with text 'Do What You Love' written on it."
              className="absolute w-full h-full object-cover -top-50"
            />
          </div>
        </div>
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default Project;
