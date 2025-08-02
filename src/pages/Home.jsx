import heroImg from "../assets/hero.jpg";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import bcs054June2024 from "../assets/BCS054_JUNE2024.webp";
import FeaturedCarousel from "../components/FeaturedCarousel";

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
    <div className="flex flex-col">
      <div className="h-[409px]">
        <div className="relative overflow-hidden h-105 rounded-lg">
          <div className="absolute h-full w-full bg-black/20 z-2"></div>
          <img
            src={heroImg}
            className="absolute w-full object-cover -top-140"
          />
        </div>
      </div>
      <FeaturedCarousel />
    </div>
  );
};

export default Home;
