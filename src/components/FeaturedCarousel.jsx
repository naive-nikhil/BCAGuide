import Card from "../components/Card";

const cards = [
  { img: "/samplePaper.webp" },
  { img: "/samplePaper.webp" },
  { img: "/samplePaper.webp" },
  { img: "/samplePaper.webp" },
  { img: "/samplePaper.webp" },
];

const FeaturedCarousel = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-text-primary flex items-center justify-between">
        <h2 className="text-xl">Featured</h2>
        <h3 className="cursor-pointer">View All</h3>
      </div>
      <div className="flex gap-2 text-text-primary overflow-x-scroll scroll-container lg:h-[calc(calc(calc(100vh-164px)/2)-36px)]">
        {cards.map((card, idx) => (
          <Card key={idx} index={idx} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
