const Carousel = () => {
  return (
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
      <div className="flex-1 bg-white p-2 lg:p-4 h-full overflow-auto">
        {activeStep?.component}
      </div>
    </div>
  );
};

export default Carousel;
