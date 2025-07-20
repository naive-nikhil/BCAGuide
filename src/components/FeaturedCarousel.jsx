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

const FeaturedCarousel = () => {
  return (
    <div className="mt-4">
      <div className="text-text-primary flex items-center justify-between mb-2">
        <h2 className="text-xl">Featured</h2>
        <h3 className="cursor-pointer">View All</h3>
      </div>
      <div className="flex gap-2 text-text-primary mt-2 overflow-x-scroll scroll-container pb-2">
        {cards.map((card, idx) => (
          <Card key={idx} index={idx} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
