import { Helmet } from "react-helmet";
import heroImg from "../assets/hero.webp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BCAGuide - IGNOU Papers & Resources</title>

        <meta
          name="description"
          content="Free IGNOU BCA previous year question papers, assignments, and resources for students. All semesters organized in one place."
        />

        <meta
          property="og:title"
          content="BCAGuide – IGNOU Papers & Resources"
        />
        <meta
          property="og:description"
          content="Access previous year question papers, assignments, and notes for IGNOU BCA."
        />
        <meta
          property="og:image"
          content="https://bcaguide.site/home-preview.webp"
        />
        <meta property="og:url" content="https://bcaguide.site/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BCAGuide – IGNOU Papers & Resources"
        />
        <meta
          name="twitter:description"
          content="Access previous year question papers, assignments, and notes for IGNOU BCA."
        />
        <meta
          name="twitter:image"
          content="https://bcaguide.site/home-preview.webp"
        />

        <link rel="canonical" href="https://bcaguide.site/" />
      </Helmet>
      <img
        src={heroImg}
        className="h-full w-full object-cover object-bottom bg-violet-100"
        alt="Image representing a wooden block on table with text 'Do What You Love' written on it."
      />
    </>
  );
};

export default Home;
