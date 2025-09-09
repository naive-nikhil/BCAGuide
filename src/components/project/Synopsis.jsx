const Synopsis = () => {
  return (
    <div className="w-full text-gray-700 pb-10">
      <h1 className="text-2xl">Project Proposal & Synopsis</h1>
      <h2 className="text-lg mt-4">Calendar</h2>
      <p>Twice a year as shown below to your concerned regional center.</p>
      <ul className="list-inside list-disc pl-5">
        <li>1st April to 30th June</li>
        <li>1st October to 31st December</li>
      </ul>
      <p className="text-sm">
        <span className="font-bold">Note -</span> Proposal status is usually
        confirmed within 30days of your submission & the same will be conveyed
        to you on your email by your concerned regional center, whether it is
        Approved or Rejected
      </p>
      <h2 className="text-lg mt-4">Guidelines</h2>
      <ol className="list-inside list-decimal space-y-2">
        <li>You need a Project Guide for your course.</li>
        <ul className="list-inside list-disc pl-5 text-gray-600">
          <li>A person having Ph.D/M.Tech in Computer Science, OR</li>
          <li>
            A person having B.E/B.Tech/M.Sc (Computer Science) or M.CA with
            minimum 2 years experience in the Industry / Teaching
          </li>
        </ul>
        <li>
          You can choose any topic you want but avoid buying or using previous
          similar projects. There are very high chances of rejection.{" "}
          <span className="font-bold">(Take this very seriously!)</span>
        </li>
        <li>
          Table of Content
          <ul className="list-inside list-disc pl-5 text-gray-600 pt-2">
            <li>Introduction and Objectives</li>
            <li>Project Category</li>
            <li>Analysis(DFDs & Database Design)</li>
            <li>Project Structure</li>
            <li>Tools / Platforms / Hardware and Software Requirements</li>
            <li>Industry and Client Details</li>
            <li>Future Scope and Enhancements</li>
            <li>Bibliography / References</li>
          </ul>
        </li>
        <li>
          Structure of Synopsis (MUST)
          <ul className="list-inside list-disc pl-5 text-gray-600 space-y-1 pt-2">
            <li>
              Cover Page (make on your own) -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/CoverPageSynopsis_wuk4qk.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <li>
              Project Proposal Proforma -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/proforma_xzwvoh.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Download
              </a>
            </li>
            <li>Project's Guide Resume</li>
            <li>Project's Guide Aadhar Card</li>
            <li>
              Synopsis (Around 20-30 Pages) -{" "}
              <a
                href="https://res.cloudinary.com/dinzuxodt/image/upload/ProjectSynopsisBCA_easzff.pdf"
                target="_blank"
                className="hover:underline text-blue-700"
              >
                Example
              </a>
            </li>
            <p>All this needs to be in a SPIRAL BINDING</p>
          </ul>
        </li>
        <li>
          If Approved you can move to the next step and start working on Project
          Report asap
        </li>
        <li>
          In case of Non Approval, the suggestions for the reformulation will be
          conveyed to you. The revised project synopsis and new proforma should
          be resubmitted along with the copy of earlier non approval proforma
          and synopsis in the next slot. The Guide's Resume and Aadhar needs to
          be attached only once
        </li>
      </ol>
      <h2 className="text-lg mt-4">MUST READ</h2>
      <ul className="list-inside list-disc pl-5 text-gray-600 space-y-1 pt-2">
        <li>
          Follow all guidelines strictly. IGNOU is strict about this and
          rejections are common.
        </li>
        <li>Synopsis must be SPIRAL BOUND</li>
        <li>
          Proforma, Guide's Resume and Aadhar must have guide's signature on it
        </li>
        <li>
          I will recommend to try and build everything on your own. For content
          and help use AI Tools
        </li>
        <li>
          To avoid rejection use proper Data Flow Diagrams(DFDs) and Database
          Design because most rejections are for the same reason
        </li>
        <li>
          I have provided every bit of help I could to complete your course.
        </li>
      </ul>
    </div>
  );
};

export default Synopsis;
