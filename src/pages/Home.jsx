import heroImg from "../assets/hero.webp";

const Home = () => {
  return (
    <>
           
      <img
        src={heroImg}
        className="h-full w-full object-cover object-bottom bg-violet-100"
        alt="Image representing a wooden block on table with text 'Do What You Love' written on it"
      />
    </>
  );
};

export default Home;
