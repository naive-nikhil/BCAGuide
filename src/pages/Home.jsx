import heroImg from "../assets/hero.webp";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BCAGuide | Papers, Assignments</title>
        <meta
          name="description"
          content="Learn more about BCA Guide — a free platform for IGNOU BCA students to access solved papers, assignments, notes, and study materials."
        />
        <meta
          name="keywords"
          content="IGNOU BCA, About Me, BCA Guide, IGNOU notes, solved assignments, BCAGuide, previous year question papers, study materials"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="BCAGuide | Papers, Assignments" />
        <meta
          property="og:description"
          content="Discover the mission behind BCA Guide and how we help IGNOU BCA students succeed."
        />
        <meta property="og:url" content="https://bcaguide.site/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bcaguide.site/home-preview.png"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BCAGuide | Papers, Assignments" />
        <meta
          name="twitter:description"
          content="Know more about BCA Guide and our mission to help IGNOU students."
        />
        <meta
          name="twitter:image"
          content="https://bcaguide.site/home-preview.png"
        />

        {/* Canonical URL */}
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
