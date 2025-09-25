import QR from "../assets/QR.png";
import StudentCounter from "./sidebar/StudentCounter";

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
    <aside className="w-full text-gray-700 flex flex-col gap-2 lg:justify-between">
      <section>
        <StudentCounter />
        <h2 className="mt-4 text-xl">Important Links</h2>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-blue-700 hover:underline"
              >
                {link.label}
              </a>
              <p className="mt-1 text-gray-400 text-sm line-clamp-none lg:line-clamp-2">
                {link.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-12 lg:mb-0">
        <h2>Support Me</h2>
        <p>
          Made With Love ❤️ <br />
          by a fellow IGNOU BCA Student
        </p>
        <p className="text-sm text-gray-400 mt-1">
          The Platform is 100% Free (No Ads)
        </p>
        <div className="mt-2 w-40">
          <img src={QR} alt="QR Code" className="w-full h-full mt-1"/>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
