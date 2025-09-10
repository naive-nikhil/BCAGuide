const Step = ({
  stepKey,
  label,
  shortLabel,
  number,
  selectedStep,
  setSelectedStep,
}) => {
  const isActive = stepKey === selectedStep;
  return (
    <h2
      onClick={() => setSelectedStep(stepKey)}
      className={`relative p-3 rounded-md bg-violet-200 w-full text-center border border-violet-300 cursor-pointer border-b-2 hover:border-violet-400 ${
        isActive ? "border-violet-400" : ""
      }`}
    >
      <span className="hidden lg:inline">{label}</span>
      <span className="inline lg:hidden">{shortLabel}</span>

      <span className="absolute -top-4 left-1/2 border border-emerald-300 -translate-x-1/2 w-6 h-6 flex justify-center items-center rounded-full bg-emerald-200 text-sm">
        {number}
      </span>
    </h2>
  );
};

export default Step;
