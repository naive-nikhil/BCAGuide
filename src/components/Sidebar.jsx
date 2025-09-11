import QR from "../assets/QR.png";
import xLogo from "../assets/x.png";
import instagramLogo from "../assets/instagram.png";
import studentLogo from "../assets/student.png";

const links = [
  {
    key: "admission",
    label: "Admission Status",
    description:
      "Helps find basic details, such as subjects enrolled, Study Center Code, Admission Details",
    link: "https://isms.ignou.ac.in/changeadmdata/AdmissionStatusNew.ASP",
  },
  {
    key: "grade",
    label: "Grade Card",
    description:
      "Helps you stay updated with your course completion, shows assigments submitted or not, and all the marks in all the subjects.",
    link: "https://gradecard.ignou.ac.in/gradecard/",
  },
  {
    key: "samarth",
    label: "IGNOU Samarth",
    description:
      "Helps you find your ID Card, fill re-registration for next sessions, fill exam forms, download hall tickets, etc",
    link: "https://ignou.samarth.edu.in/index.php/site/login",
  },
  {
    key: "ignou",
    label: "IGNOU Official Website",
    description:
      "Link for IGNOU Official website, students must confirm all the news & notifications on this website only!",
    link: "https://www.ignou.ac.in/",
  },
  {
    key: "result",
    label: "Result",
    description:
      "Helps you find your term end examination and revaluation examination marks",
    link: "https://termendresult.ignou.ac.in/",
  },
];

const Sidebar = () => {
  return (
    <div className="w-full text-text-primary flex flex-col gap-2 lg:justify-between">
      <div>
        <h2 className="flex justify-center items-center gap-2 bg-white rounded h-[40px] border border-gray-300">
          {" "}
          <img src={studentLogo} className="w-4 -mt-[2px] brightness-25" />
          Students Counter - 88,880
        </h2>
        <h2 className="mt-4 text-xl">Important Links</h2>
        {links.map((link) => (
          <div key={link.key}>
            <a
              href={link.link}
              target="_blank"
              className="mt-2 block text-blue-700"
            >
              {link.label}
            </a>
            <p className="mt-1 text-text-primary/60 text-sm">
              {link.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-12 lg:mb-0">
        <h3 className="cursor-pointer">
          Made With Love ❤️ <br />
          by a fellow IGNOU BCA Student
        </h3>
        <h3 className="text-text-primary/60 text-sm">
          The Platform is 100% Free (No Ads)
        </h3>
        <h3 className="mt-2">Support Me</h3>
        <div className="w-28 2xl:w-30">
          <img src={QR} alt="QR Code" className="w-full h-full mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
