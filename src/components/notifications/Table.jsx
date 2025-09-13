import { useState } from "react";

const notifications = [
  {
    id: 1,
    date: "2025-01-12",
    issuedBy: "IGNOU Regional Centre Delhi-1",
    title: "January 2025 Term End Exam date sheet released.",
    description:
      "The official date sheet for the January 2025 Term End Exams has been published. Students should check the schedule carefully and prepare accordingly.",
    link: "https://ignou.ac.in/exam-datesheet-jan-2025",
  },
  {
    id: 2,
    date: "2025-01-25",
    issuedBy: "School of Computer and Information Sciences (SOCIS)",
    title: "Assignment submission guidelines updated.",
    description:
      "SOCIS has issued revised guidelines for assignment submission for the Jan–June 2025 session, including format, deadline, and submission mode.",
    link: "https://ignou.ac.in/assignment-guidelines-2025",
  },
  {
    id: 3,
    date: "2025-02-05",
    issuedBy: "IGNOU HQ",
    title: "Online submission portal for BCSP-064 project proposals opened.",
    description:
      "Students can now submit their BCSP-064 (Project) proposals through the official online portal. Ensure you follow the synopsis format.",
    link: "https://ignou.ac.in/project-submission",
  },
  {
    id: 4,
    date: "2025-02-20",
    issuedBy: "Examination Division",
    title: "Hall tickets for Term End Exams available.",
    description:
      "Admit cards/hall tickets for the January 2025 TEE are now available for download on the IGNOU website.",
    link: "https://ignou.ac.in/hallticket",
  },
  {
    id: 5,
    date: "2025-03-01",
    issuedBy: "IGNOU Regional Centre Pune",
    title: "Semester 6 practical counselling schedule released.",
    description:
      "The counselling schedule for BCSL-063 practicals has been published by RC Pune. Attendance is compulsory.",
    link: "https://rcpune.ignou.ac.in/bcsl063-schedule",
  },
  {
    id: 6,
    date: "2025-03-18",
    issuedBy: "Student Evaluation Division (SED)",
    title: "December 2024 TEE result declared.",
    description:
      "Results for the December 2024 Term End Exams have been announced. Students can check their grades online.",
    link: "https://ignou.ac.in/results",
  },
  {
    id: 7,
    date: "2025-04-02",
    issuedBy: "Library Division",
    title: "New e-resources added to the digital library.",
    description:
      "IGNOU’s digital library now includes new resources for computer science and BCA students.",
    link: "https://ignou.ac.in/digital-library",
  },
  {
    id: 8,
    date: "2025-04-15",
    issuedBy: "SOCIS",
    title: "Workshop on final year project report writing announced.",
    description:
      "SOCIS will conduct an online workshop to guide students in preparing project reports for BCSP-064.",
    link: "https://socis.ignou.ac.in/workshop-project",
  },
  {
    id: 9,
    date: "2025-05-05",
    issuedBy: "IGNOU HQ",
    title: "IGNOU Convocation 2025 registration open.",
    description:
      "Registration for IGNOU’s 2025 Convocation is now open for students who completed their degree in 2024.",
    link: "https://ignou.ac.in/convocation",
  },
  {
    id: 10,
    date: "2025-05-20",
    issuedBy: "Regional Centre Bangalore",
    title: "Special counselling session on Cloud Computing and IoT announced.",
    description:
      "Regional Centre Bangalore will conduct a special counselling session for elective papers on Cloud Computing and IoT.",
    link: "https://rcbangalore.ignou.ac.in/cloud-iot-session",
  },
];

const Table = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleNotification = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <ul className="grid grid-cols-1 gap-4">
      {notifications &&
        notifications.map((notification, index) => (
          <li
            onClick={() => toggleNotification(index)}
            key={notification.id}
            className="border p-4 border-gray-200 transition-all duration-300 ease rounded border-b-3 cursor-pointer"
          >
            <h2 className="text-lg">
              {notification.title}
              {index === 0 && (
                <span className="bg-red-500 rounded-md text-white text-xs px-2 py-[2px] ml-4 inline-block animate-wiggle">
                  New
                </span>
              )}
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Issued By - {notification.issuedBy} •{" "}
              <span className="text-emerald-500 text-nowrap text-heading">
                {notification.date}
              </span>
            </p>
            {openIndex === index && (
              <>
                <p className="text-gray-400 mt-4">{notification.description}</p>
                <a
                  href={notification.link}
                  target="_blank"
                  className="mt-4 p-2 bg-emerald-300 rounded-lg block w-fit"
                >
                  View Attachment
                </a>
              </>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Table;
