import heroImg from "../assets/hero.jpg";
import Card from "../components/Card";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import bcs054June2024 from "../assets/BCS054_JUNE2024.webp";

const cards = [
  { img: bcs012June2024 },
  { img: bcs054June2024 },
  { img: bcs012June2024 },
  { img: bcs054June2024 },
  { img: bcs054June2024 },
  { img: bcs012June2024 },
  { img: bcs054June2024 },
];

const Home = () => {
  return (
    <div className="flex h-[calc(100%-58px)] flex-col justify-between">
      <div className="relative overflow-hidden h-105 rounded-lg">
        <div className="absolute h-full w-full bg-black/20 z-2"></div>
        <img src={heroImg} className="absolute w-full object-cover -top-140" />
      </div>
      <div className="overflow-auto scroll-container">
        <div className="text-text-primary flex items-center justify-between">
          <h2 className="text-xl">Featured</h2>
          <h3 className="cursor-pointer">View All</h3>
        </div>
        <div className="flex gap-2 text-text-primary mt-2 overflow-x-scroll scroll-container pb-2">
          {cards.map((card, idx) => (
            <Card index={idx} img={card.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
