import { useState } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import heroImg from "../assets/hero.jpg";


import StepList from "../components/project/StepList";
import SemesterList from "../components/carousel/SemesterList";

import { useAppContext } from "../context/AppContext";
import { getActiveStepComponent } from "../components/project/StepList";

const Project = () => {
  const { selectedStep } = useAppContext();
  const ActiveStepComponent = getActiveStepComponent(selectedStep);
  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Project Synopsis & Report (BCSP064)
        </h1>
        <div className="flex w-full justify-between overflow-hidden rounded-md">
          <div className="flex flex-col lg:flex-row w-full">
            <StepList />

            <div className="flex-1 bg-white p-2 lg:p-4 h-full overflow-auto">
              {ActiveStepComponent}
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
