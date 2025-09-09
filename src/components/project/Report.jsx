const Report = () => {
  return (
    <div className="w-full text-gray-700 pb-10">
      <h1 className="text-2xl">Project Report (Max Marks - 150)</h1>
      <h2 className="text-lg mt-4">Calendar</h2>
      <p>Twice a year as shown below to your concerned regional center.</p>
      <ul className="list-inside list-disc pl-5">
        <li>
          1st July to 30th September - For proposals approved during 1st April
          to 30th June slot
        </li>
        <li>
          1st January to 31st March - For proposals approved during 1st October
          to 31st December slot
        </li>
      </ul>
      <h2 className="text-lg mt-4">Guidelines</h2>
      <ol className="list-inside list-decimal space-y-2">
        <li>
          Recommended Table of Content
          <ul className="list-inside list-disc pl-5 text-gray-600 pt-2">
            <li>
              Introduction
              <ul className="list-inside list-disc pl-5">
                <li>Background and Motivation</li>
                <li>Problem Statement</li>
                <li>Objectives</li>
                <li>
                  Tools & Environment Used
                  <ul className="list-inside list-disc pl-5">
                    <li>Software Requirements</li>
                    <li>Hardware Requirements</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              System Analysis
              <ul className="list-inside list-disc pl-5">
                <li>Sofware Requirement Specifications (SRS)</li>
                <li>Data Flow Diagrama(DFDs)</li>
                <li>Database Design</li>
                <li>Data Model</li>
              </ul>
            </li>

            <li>
              System Design
              <ul className="list-inside list-disc pl-5">
                <li>System Architecture</li>
                <li>Modularization Details</li>
                <li>Data Integrity & Constraints</li>
                <li>User Interface (UI Design)</li>
              </ul>
            </li>

            <li>
              Implementation and Code
              <ul className="list-inside list-disc pl-5">
                <li>Implementaion of security</li>
                <li>Input & Output Screens</li>
                <li>Program Code</li>
                <li>Deployment & Hosting</li>
              </ul>
            </li>

            <li>
              Testing
              <ul className="list-inside list-disc pl-5">
                <li>Unit Testing (Test cases and results)</li>
                <li>Integration Testing (Test cases and results)</li>
                <li>System Testing (Test cases and results)</li>
                <li>Debugging and Code Improvements</li>
              </ul>
            </li>

            <li>
              Conclusion
              <ul className="list-inside list-disc pl-5">
                <li>Limitations of the Project</li>
                <li>Future Applications of the Project</li>
              </ul>
            </li>

            <li>Bibliography / References</li>
          </ul>
        </li>
        <li>
          Structure of Report (MUST)
          <ul className="list-inside list-disc pl-5 text-gray-600 space-y-1 pt-2">
            <li>
              Cover Page (make on your own) -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/CoverPageReport_hhwgxt.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <li>
              Approved Project Proposal Proforma (Original With IGNOU Stamp)
            </li>
            <li>Project's Guide Resume</li>
            <li>Project's Guide Aadhar Card</li>
            <li>Copy of Earlier Submitted Synopsis</li>
            <li>
              Certificate of Originality -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/ProjectReportBCA-Originality_zd5gb7.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <li>
              Acknowledgement -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/ProjectReportBCA-Acknowledgement-Abstract_gldwps.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <li>
              Abstract -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/ProjectReportBCA-Acknowledgement-Abstract_gldwps.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <li>
              Report (Around 50 - 70 Pages Without Code) -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/ProjectReportBCA_udqtez.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <p>
              All this needs to be in a{" "}
              <span className="font-bold">HARD BINDING!</span>
            </p>
          </ul>
        </li>
        <li>
          If Passed (Min - 50%) you can move to the next step and start
          preparing for Viva Voce
        </li>
      </ol>
      <h2 className="text-lg mt-4">MUST READ</h2>
      <ul className="list-inside list-disc pl-5 text-gray-600 space-y-1 pt-2">
        <li>
          Follow all guidelines strictly. IGNOU is strict about this and
          rejections are common.
        </li>
        <li>
          All this needs to be in a{" "}
          <span className="font-bold">HARD BINDING!</span>
        </li>
        <li>
          Proforma, Guide's Resume, Aadhar, Acknowledgement and Abstract must
          have guide's signature on it
        </li>
        <li>
          I will recommend to try and build everything on your own. For content
          and help use AI Tools
        </li>
        <li>
          Proper Data Flow Diagrams(DFDs), Database Design, Proper Application's
          Images, Complete UI Flow must be added.
        </li>
        <li>
          Important code must be added in the report, if the codebase is large,
          you can add github link.
        </li>
        <li>
          I have provided every bit of help I could to complete your course.
        </li>
      </ul>
    </div>
  );
};

export default Report;
