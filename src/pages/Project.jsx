import FeaturedCarousel from "../components/FeaturedCarousel";
import StepList from "../components/project/StepList";

import { useAppContext } from "../context/AppContext";
import { getActiveStepComponent } from "../components/project/StepList";
import Carousel from "../components/Carousel";

const Project = () => {
  const { selectedStep } = useAppContext();
  const ActiveStepComponent = getActiveStepComponent(selectedStep);
  return (
    <>
      <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2">
        <h1 className="text-xl text-gray-700">
          Project Synopsis & Report (BCSP064)
        </h1>
        <Carousel sidebarComponent={<StepList />} page={ActiveStepComponent} />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default Project;
