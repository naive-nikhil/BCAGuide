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
      <div className="h-[409px] rounded-lg overflow-hidden">
        <div className="relative overflow-hidden h-105">
          <div className="absolute h-[409px] w-full bg-black/20">
            <img
              src={heroImg}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
      <FeaturedCarousel />
    </div>
  );
};

export default Home;
