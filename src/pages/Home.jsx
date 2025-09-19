import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BCAGuide - IGNOU Papers, Assignments & Resources</title>
      </Helmet>
      <h1>Hello 👋</h1>
      <img
        src="/hero.webp"
        className="h-full w-full object-cover object-bottom bg-violet-100"
        alt="Image representing a wooden block on table with text 'Do What You Love' written on it"
      />
    </>
  );
};

export default Home;
