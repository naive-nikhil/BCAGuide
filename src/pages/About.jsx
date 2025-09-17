import Profile from "../components/about/Profile";
import Carousel from "../components/Carousel";
import AboutMe from "../components/about/AboutMe";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me | BCA Guide</title>
        <meta
          name="description"
          content="Learn more about BCA Guide — a free platform for IGNOU BCA students to access solved papers, assignments, notes, and study materials."
        />
        <meta
          name="keywords"
          content="IGNOU BCA, About Me, BCA Guide, IGNOU notes, solved assignments, BCAGuide, previous year question papers, study materials"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="About Me | BCA Guide" />
        <meta
          property="og:description"
          content="Discover the mission behind BCA Guide and how we help IGNOU BCA students succeed."
        />
        <meta property="og:url" content="https://bcaguide.site/about-me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bcaguide.site/about-me-preview.png"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | BCA Guide" />
        <meta
          name="twitter:description"
          content="Know more about BCA Guide and our mission to help IGNOU students."
        />
        <meta
          name="twitter:image"
          content="https://bcaguide.site/about-me-preview.png"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://bcaguide.site/about-me" />
      </Helmet>
      <h1 className="text-xl text-gray-700">✨About ME 😊</h1>
      <Carousel sidebarComponent={<Profile />} page={<AboutMe />} />
    </>
  );
};

export default About;
