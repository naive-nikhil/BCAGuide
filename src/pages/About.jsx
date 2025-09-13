import Profile from "../components/about/Profile";
import Carousel from "../components/Carousel";
import AboutMe from "../components/about/AboutMe";

const About = () => {
  return (
    <>
      {" "}
      <h1 className="text-xl text-gray-700">✨About ME 😊</h1>
      <Carousel sidebarComponent={<Profile />} page={<AboutMe />} />
    </>
  );
};

export default About;
