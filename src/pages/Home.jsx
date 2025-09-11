import heroImg from "../assets/hero.jpg";
import FeaturedCarousel from "../components/FeaturedCarousel";

const Home = () => {
  return (
    <>
      <section className="h-[calc(calc(100vh-164px)/2)] rounded-md overflow-hidden">
        <img
          src={heroImg}
          className="h-full w-full object-cover object-bottom"
          alt="Image representing a wooden block on table with text 'Do What You Love' written on it."
        />
      </section>
      <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
        <FeaturedCarousel />
      </section>
    </>
  );
};

export default Home;
