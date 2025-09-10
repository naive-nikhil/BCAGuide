import QR from "../assets/QR.png";
import xLogo from "../assets/x.png";
import instagramLogo from "../assets/instagram.png";
import studentLogo from "../assets/student.png";

const Sidebar = () => {
  return (
    <div className="w-full text-text-primary flex flex-col justify-between">
      <div>
        <div className="bg-white rounded p-2 border border-gray-300">
          <h2 className="flex items-center gap-2">
            {" "}
            <img src={studentLogo} className="w-4 -mt-[2px] brightness-25" />
            Students Counter - 88,880 Visits
          </h2>
        </div>
        <h2 className="mt-4 text-xl">Important Links</h2>
        <h3 className="mt-2 text-blue-600 cursor-pointer text-lg">
          Admission Status
        </h3>
        <p className="mt-1 text-text-primary/60">
          Helps find basic details, such as subjects enrolled, Study Center
          Code, Admission Details
        </p>
        <h3 className="mt-2 text-blue-600 cursor-pointer text-lg">
          Grade Card
        </h3>
        <p className="mt-1 text-text-primary/60">
          Helps you stay updated with your course completion, shows assigments
          submitted or not, and all the marks in all the subjects.
        </p>
        <h3 className="mt-2 text-blue-600 cursor-pointer text-lg">
          IGNOU Samarth
        </h3>
        <p className="mt-1 text-text-primary/60">
          Helps you find your ID Card, fill re-registration for next sessions,
          fill exam forms, download hall tickets, etc
        </p>
        <h3 className="text-lg text-blue-600 cursor-pointer mt-2">
          IGNOU Official Website
        </h3>
        <p className="mt-1 text-text-primary/60">
          Link for IGNOU Official website, students must confirm all the news &
          notifications on this website only!
        </p>
      </div>
      <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start gap-4 mb-8">
        <div className="self-end lg:self-auto">
          <h3 className="text-lg cursor-pointer mt-2">
            Made With Love ❤️
            <br />
            by a fellow IGNOU BCA Student
          </h3>
          <h3 className="text-text-primary/60">
            The Platform is 100% Free (No Ads)
          </h3>
          <div className="flex lg:hidden items-center mt-2 gap-2">
            <h3 className="text-lg">Follow Us - </h3>
            <img src={xLogo} className="w-6 cursor-pointer" />
            <img src={instagramLogo} className="w-6 cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="mt-2">You Can Support Me</h3>
          <img src={QR} alt="QR Code" className="w-40 mt-2" />
          <div className="hidden lg:flex items-center mt-2 gap-2">
            <h3 className="text-lg">Follow Us - </h3>
            <img src={xLogo} className="w-6 cursor-pointer" />
            <img src={instagramLogo} className="w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
