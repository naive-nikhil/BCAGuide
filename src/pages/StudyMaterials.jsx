import heroImg from "../assets/hero.jpg";
import Card from "../components/Card";
import bcs012June2024 from "../assets/BCS012_JUNE2024.jpg";
import bcs054June2024 from "../assets/BCS054_JUNE2024.webp";
import { useState } from "react";
import backIcon from "../assets/back.png";

const semesters = [
  {
    title: "Semester One",
    subjects: [
      {
        code: "BCS011",
        title: "Computer Basics And PC Software",
        material: {
          syllabus: [
            { code: "Block 1", title: "Basics of Computer Hardware", link: "" },
            { code: "Block 2", title: "Basics of Computer Software", link: "" },
            { code: "Block 3", title: "Internet Technologies", link: "" },
          ],
          notes: [],
        },
      },
      {
        code: "BCS012",
        title: "Mathematics",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "ECO01",
        title: "Business Organization",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "FEG02",
        title: "Foundation Course In English 2",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL013",
        title: "Computer Basics And PC Software Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
    ],
  },
  {
    title: "Semester Two",
    subjects: [
      {
        code: "MCS011",
        title: "Problem Solving And Programming",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "MCS012",
        title: "Computer Organization And Assembly Language Programming",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "MCS013",
        title: "Discrete Mathematics",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "MCS015",
        title: "Communication Skills",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "ECO2",
        title: "Accountancy 1",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL21",
        title: "C Language Programming Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL22",
        title: "Assembly Language Programming Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
    ],
  },
  {
    title: "Semester Three",
    subjects: [
      {
        code: "MCS014",
        title: "System Analysis And Design",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "MCS021",
        title: "Data And File Structures",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "MCS023",
        title: "Introduction To Database Management System",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS031",
        title: "Programming In C++",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL032",
        title: "C++ Programming Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL033",
        title: "Data And File Structures Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL034",
        title: "DBMS Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
    ],
  },
  {
    title: "Semester Four",
    subjects: [
      {
        code: "MCS024",
        title: "Object Oriented Technology And Java Programming",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS040",
        title: "Statistical Techniques",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS041",
        title: "Fundamentals Of Computer Networks",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS042",
        title: "Introduction To Algorithm Design",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL043",
        title: "Java Programming Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL044",
        title: "Statistical Techniques Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL045",
        title: "Algorithms Design Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "MCSL016",
        title: "Internet Concepts And Web Design Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
    ],
  },
  {
    title: "Semester Five",
    subjects: [
      {
        code: "BCS051",
        title: "Introduction To Software Engineering",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS052",
        title: "Network Programming And Administration",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS053",
        title: "Web Programming",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS054",
        title: "Computer Oriented Numerical Techniques",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS055",
        title: "Business Communication",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL056",
        title: "Network Programming And Administration Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL057",
        title: "Web Programming Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL058",
        title: "Computer Oriented Numerical Techniques Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
    ],
  },
  {
    title: "Semester Six",
    subjects: [
      {
        code: "MCS022",
        title: "Operating System Concepts And Networking Management",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCS062",
        title: "E-Commerce",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
      {
        code: "BCSL063",
        title: "Operating System Concepts And Networking Management Lab",
        papers: {
          session: {
            june: [
              {
                year: "June 2012",
                link: "https://res.cloudinary.com/dinzuxodt/image/upload/BCS-011June2012_ir4hw4.pdf",
              },
            ],
            december: [{ year: "December 2012", link: "#" }],
          },
        },
      },
    ],
  },
];

const cards = [
  { img: bcs012June2024 },
  { img: bcs054June2024 },
  { img: bcs012June2024 },
  { img: bcs054June2024 },
  { img: bcs054June2024 },
  { img: bcs012June2024 },
  { img: bcs054June2024 },
];

const StudyMaterials = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester One");
  const [selectedCourse, setSelectedCourse] = useState({});
  const [selectedOption, setSelectedOption] = useState("syllabus");
  const [selectedBlock, setSelectedBlock] = useState("");

  return (
    <div className="overflow-hidden">
      <h1 className="text-xl text-text-primary mb-4">Study Material & Notes</h1>
      <div className="flex flex-col justify-between h-[calc(100dvh-200px)]">
        <div className="flex text-text-primary max-h-[calc(374px)] border border-gray-200 rounded-md overflow-hidden">
          <div className="[&_h1]:text-lg cursor-pointer overflow-hidden bg-violet-100 rounded-l-md relative z-10">
            {semesters.map((semester, index) => (
              <div
                onClick={() => {
                  setSelectedCourse(false);
                  setSelectedBlock(false);
                  setSelectedSemester(semester.title);
                }}
                className={`p-4 flex justify-between text-nowrap hover:bg-violet-200 border-b-2 border-violet-200 transition-all duration-200 ease ${
                  selectedSemester === semester.title
                    ? "bg-violet-200 border-violet-300"
                    : ""
                }`}
              >
                <h1>{semester.title}</h1>
              </div>
            ))}
          </div>
          <div className="flex-1 bg-white">
            <div
              className={`flex transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(${
                  Object.keys(selectedCourse).length > 0
                    ? selectedBlock
                      ? "-50%"
                      : "-25%"
                    : "0%"
                })`,
                width: "400%",
              }}
            >
              <div className="w-full p-5 [&_h2]:cursor-pointer">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <li className="p-3 border border-gray-200 rounded border-b-3 cursor-pointer">
                    <h2 className="text-lg">Courses in {selectedSemester}</h2>
                    <p className=" text-text-primary/60">
                      This section contains previous year question papers of{" "}
                      {selectedSemester} courses!
                    </p>
                  </li>
                  {semesters
                    .find((sem) => sem.title === selectedSemester)
                    .subjects.map((sub) => (
                      <li
                        onClick={() => setSelectedCourse(sub)}
                        className="p-3 border border-gray-200 rounded border-b-3 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease"
                      >
                        <h2 className="text-blue-600">{sub.code}</h2>
                        <p className=" text-text-primary/60">{sub.title}</p>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="relative h-92 w-full p-5 [&_h2]:cursor-pointer">
                <button
                  className="absolute p-2 bottom-4 left-1/2 -translate-x-1/2 cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
                  onClick={() => setSelectedCourse(false)}
                >
                  <img src={backIcon} width={20} className="brightness-20" />
                </button>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded border-b-3 cursor-pointer mb-4">
                  <div>
                    <h2 className="text-lg">
                      {selectedCourse.code} - {selectedCourse.title}
                    </h2>
                    <p className=" text-text-primary/60">
                      Papers are organised session wise (June & December)
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div
                      onClick={() => setSelectedOption("syllabus")}
                      className={`hover:text-blue-600 ${
                        selectedOption === "syllabus"
                          ? "text-blue-600"
                          : "text-text-primary/60 "
                      }`}
                    >
                      Syllabus
                    </div>
                    <div
                      onClick={() => setSelectedOption("notes")}
                      className={`hover:text-blue-600 ${
                        selectedOption === "notes"
                          ? "text-blue-600"
                          : "text-text-primary/60"
                      }`}
                    >
                      Notes
                    </div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {selectedCourse &&
                    selectedCourse.material?.[selectedOption]?.map(
                      (item, index) => (
                        <li
                          onClick={() => setSelectedBlock(item.code)}
                          key={index}
                          className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
                        >
                          {item.code} - {item.title}
                        </li>
                      )
                    )}
                  <li className="p-2 bg-green-200 hover:-translate-y-1 flex items-center justify-center transition-all duration-300 ease rounded text-green-600 cursor-pointer">
                    Download All Blocks in One PDF
                  </li>
                </ul>
              </div>

              <div className="relative h-92 w-full p-5 [&_h2]:cursor-pointer">
                <button
                  className="absolute p-2 bottom-4 left-1/2 -translate-x-1/2 cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
                  onClick={() => setSelectedCourse(false)}
                >
                  <img src={backIcon} width={20} className="brightness-20" />
                </button>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded border-b-3 cursor-pointer mb-4">
                  <div>
                    <h2 className="text-lg">
                      {selectedBlock.code} - {selectedCourse.title}
                    </h2>
                    <p className=" text-text-primary/60">
                      Papers are organised session wise (June & December)
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div
                      onClick={() => setSelectedOption("syllabus")}
                      className={`hover:text-blue-600 ${
                        selectedOption === "syllabus"
                          ? "text-blue-600"
                          : "text-text-primary/60 "
                      }`}
                    >
                      Syllabus
                    </div>
                    <div
                      onClick={() => setSelectedOption("notes")}
                      className={`hover:text-blue-600 ${
                        selectedOption === "notes"
                          ? "text-blue-600"
                          : "text-text-primary/60"
                      }`}
                    >
                      Notes
                    </div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {selectedCourse &&
                    selectedCourse.material?.[selectedOption]?.map(
                      (item, index) => (
                        <li
                          onClick={() => setSelectedBlock(item.code)}
                          key={index}
                          className="border p-2 border-gray-200 hover:-translate-y-1 transition-all duration-300 ease rounded border-b-3 text-blue-600 cursor-pointer"
                        >
                          {item.code} - {item.title}
                        </li>
                      )
                    )}
                  <li className="p-2 bg-green-200 hover:-translate-y-1 flex items-center justify-center transition-all duration-300 ease rounded text-green-600 cursor-pointer">
                    Download All Blocks in One PDF
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-full p-5 [&_h2]:cursor-pointer flex justify-between gap-4">
                <div className="w-full flex flex-col justify-between">
                  <button
                    className="p-2 w-fit cursor-pointer border rounded-full border-b-3 border-r-2 bg-violet-50 border-violet-500 hover:-translate-y-1 transition-all duration-300 ease"
                    onClick={() => {
                      setSelectedBlock(false);
                    }}
                  >
                    <img src={backIcon} width={20} className="brightness-20" />
                  </button>
                  <div>
                    <h1 className="text-lg flex items-center gap-2">
                      {selectedCourse.code}
                      <p className="bg-green-100 text-green-600 text-sm w-fit px-2 rounded">
                        Solved
                      </p>
                    </h1>
                    <h2>{selectedCourse.title}</h2>
                    <h3>Previous Year Question Paper - {}</h3>

                    <div className="flex w-full gap-1 mt-4">
                      <a
                        className="w-full text-center rounded py-2 cursor-pointer bg-blue-200 mt-2 hover:-translate-y-1 transition duration-300 ease-in-out text-blue-600"
                        target="_blank"
                        href=""
                      >
                        {" "}
                        Download Paper
                      </a>

                      <br />
                      <button
                        className={`w-full rounded py-2 cursor-pointer bg-green-200 mt-2 hover:-translate-y-1 transition duration-300 ease-in-out text-green-600`}
                      >
                        Download Solution
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative h-82 border rounded-md border-gray-300 bg-blue-200 w-full overflow-hidden group">
                  <img
                    src={bcs012June2024}
                    className="absolute object-cover -rotate-25 shadow-2xl right-0 -bottom-4 translate-y-1/2 translate-x-1/3 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-80 h-150 rounded-r-md">
            <img
              src={heroImg}
              className="absolute w-full h-full object-cover -top-50"
            />
          </div>
        </div>

        <div>
          <div className="text-text-primary flex items-center justify-between">
            <h2 className="text-xl">Featured</h2>
            <h3 className="cursor-pointer">View All</h3>
          </div>
          <div className="flex gap-2 text-text-primary mt-2 overflow-x-scroll scroll-container pb-2">
            {cards.map((card, idx) => (
              <Card index={idx} img={card.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
