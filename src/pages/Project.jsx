import StepList from "../components/project/StepList";

import { useAppContext } from "../context/AppContext";
import { getActiveStepComponent } from "../components/project/StepList";
import Carousel from "../components/Carousel";

import { Helmet } from "react-helmet";

const Project = () => {
  const { selectedStep } = useAppContext();
  const ActiveStepComponent = getActiveStepComponent(selectedStep);
  return (
    <>
      <Helmet>
        <title>Project Synopsis & Report | BCA Guide</title>
        <meta
          name="description"
          content="Access IGNOU BCA Project Synopsis and Report guidelines, samples, and resources to prepare your final year project with ease."
        />
        <meta
          name="keywords"
          content="IGNOU BCA, Project Synopsis, Project Report, BCA Guide, IGNOU Project Guidelines, IGNOU Final Year Project, BCAGuide, Project Help"
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Project Synopsis & Report | BCA Guide"
        />
        <meta
          property="og:description"
          content="Download IGNOU BCA Project Synopsis & Report guidelines and resources to prepare your project successfully."
        />
        <meta
          property="og:url"
          content="https://bcaguide.site/project-synopsis-report"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bcaguide.site/project-preview.webp"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Project Synopsis & Report | BCA Guide"
        />
        <meta
          name="twitter:description"
          content="Get IGNOU BCA Project Synopsis & Report help, samples, and complete guidelines."
        />
        <meta
          name="twitter:image"
          content="https://bcaguide.site/project-preview.webp"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bcaguide.site/project-synopsis-report"
        />
      </Helmet>

      <h1 className="text-xl text-gray-700">
        Project Synopsis & Report [BCSP064]
      </h1>
      <p className="py-1 px-2 rounded-md bg-amber-500">Last date for submission of Project Report for the proposals submitted between 1st April & 30th June is 30th September</p>
      <Carousel sidebarComponent={<StepList />} page={ActiveStepComponent} />
    </>
  );
};

export default Project;
