import HeroCarousel from "../components/HeroCarousel";

const EBooks = () => {
  return (
    <div>
      <HeroCarousel sectionDesc={"eBooks & PDFs"} totalPages={4}>
        <div>Page1</div>
        <div>Page1</div>
        <div>Page1</div>
      </HeroCarousel>
    </div>
  );
};

export default EBooks;
