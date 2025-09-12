import { useAppContext } from "../../context/AppContext";

const Step = ({ stepKey, label, shortLabel }) => {
  const { selectedStep, setSelectedStep } = useAppContext();
  const isActive = stepKey === selectedStep;
  return (
    <li
      onClick={() => setSelectedStep(stepKey)}
      className={`py-3 lg:p-0 lg:h-24 flex items-center justify-center relative rounded-md bg-violet-200 w-full text-center border border-violet-300 cursor-pointer border-b-2 hover:border-violet-400 ${
        isActive ? "border-violet-400" : ""
      }`}
    >
      <span className="hidden lg:inline">{label}</span>
      <span className="inline lg:hidden">{shortLabel}</span>
    </li>
  );
};

export default Step;
