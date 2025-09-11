import Step from "./Step";
import Synopsis from "../../components/project/Synopsis";
import Report from "../../components/project/Report";
import Viva from "../../components/project/Viva";

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

const StepList = () => {
  return (
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
          />
        ))}
      </div>
    </div>
  );
};

export default StepList;

export const getActiveStepComponent = (selectedStep) => {
  const activeStep = steps.find((step) => step.key === selectedStep);
  return activeStep?.component || null;
};
