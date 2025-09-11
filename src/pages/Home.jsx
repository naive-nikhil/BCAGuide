import heroImg from "../assets/hero.jpg";
import FeaturedCarousel from "../components/FeaturedCarousel";

const Home = () => {
  return (
    <>
      <div className="h-[calc(calc(100dvh-164px)/2)] rounded-md overflow-hidden">
        <img
          src={heroImg}
          className="h-full w-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div className="h-[calc(calc(100dvh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </div>
    </>
  );
};

export default Home;
