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
      <h1 className="text-xl text-gray-700">
        Project Synopsis & Report [BCSP064]
      </h1>
      <Carousel sidebarComponent={<StepList />} page={ActiveStepComponent} />
    </>
  );
};

export default Project;
