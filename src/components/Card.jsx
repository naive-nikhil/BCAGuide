const ACCENTS = [
  { card: "bg-blue-200", btn: "bg-blue-300" },
  { card: "bg-violet-200", btn: "bg-violet-300" },
  { card: "bg-emerald-200", btn: "bg-emerald-300" },
];

const Card = ({
  img,
  title = "Course Code",
  subtitle = "Course Title",
  session = "Session Month - Year",
  index,
}) => {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div className="relative min-w-80 flex flex-col justify-between p-2 border border-gray-300 rounded cursor-pointer group h-full max-h-100">
      <div
        className={`relative overflow-hidden h-50 rounded border border-gray-300 ${accent.card}`}
      >
        <img
          src={img}
          className="absolute object-cover -rotate-25 shadow-2xl right-0 -bottom-4 translate-y-1/2 translate-x-1/3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="mt-4 flex flex-col justify-end">
        <h3>{title}</h3>
        <h3 className="text-lg">{subtitle}</h3>
        <h3 className="text-lg">{session}</h3>
        <button
          className={`rounded py-2 cursor-pointer ${accent.btn} mt-2 hover:-translate-y-1 transition duration-300 ease-in-out text-text-primary`}
        >
          View Solution
        </button>
      </div>
    </div>
  );
};

export default Card;
