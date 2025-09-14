import { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAppContext } from "../context/AppContext";

const data = [
  {
    id: 1,
    courses: [
      { courseCode: "BCS011", courseTitle: "Computer Basics And PC Software" },
      { courseCode: "BCS012", courseTitle: "Mathematics" },
      { courseCode: "ECO1", courseTitle: "Business Organization" },
      { courseCode: "FEG02", courseTitle: "Foundataion Course In English 2" },
      {
        courseCode: "BCSL013",
        courseTitle: "Computer Basics And PC Software Lab",
      },
    ],
  },
  {
    id: 2,
    courses: [
      { courseCode: "MCS011", courseTitle: "Problem Solving And Programming" },
      {
        courseCode: "MCS012",
        courseTitle: "Computer Organziation And Assembly Language Programming",
      },
      { courseCode: "MCS013", courseTitle: "Discrete Mathematics" },
      { courseCode: "MCS015", courseTitle: "Communication Skills" },
      { courseCode: "ECO02", courseTitle: "Accountancy 1" },
      { courseCode: "BCSL021", courseTitle: "C Language Programming Lab" },
      {
        courseCode: "BCSL022",
        courseTitle: "Assembly Language Programming Lab",
      },
    ],
  },
  {
    id: 3,
    courses: [
      { courseCode: "MCS014", courseTitle: "System Analysis and Design" },
      { courseCode: "MCS021", courseTitle: "Data and File Structures" },
      {
        courseCode: "MCS023",
        courseTitle: "Introduction To Database Managmement System",
      },
      { courseCode: "BCS031", courseTitle: "Programming In C++" },
      {
        courseCode: "BCSL032",
        courseTitle: "C++ Programming Lab",
      },
      {
        courseCode: "BCSL033",
        courseTitle: "Data And File Structures Lab",
      },
      {
        courseCode: "BCSL034",
        courseTitle: "DBMS Lab",
      },
    ],
  },
  {
    id: 4,
    courses: [
      {
        courseCode: "MCS024",
        courseTitle: "Object Oriented Technology And Java Programming",
      },
      { courseCode: "BCS040", courseTitle: "Statistical Techniques" },
      {
        courseCode: "BCS041",
        courseTitle: "Fundamentals Of Computer Networks",
      },
      { courseCode: "BCS042", courseTitle: "Introduction To Algorithm Design" },
      { courseCode: "BCSL043", courseTitle: "Java Programming Lab" },
      { courseCode: "BCSL044", courseTitle: "Statistical Techniques Lab" },
      { courseCode: "BCSL045", courseTitle: "Algorithms Design Lab" },
      {
        courseCode: "MCSL016",
        courseTitle: "Internet Concepts And Web Design",
      },
    ],
  },
  {
    id: 5,
    courses: [
      {
        courseCode: "BCS051",
        courseTitle: "Introduction To Software Engineering",
      },
      {
        courseCode: "BCS052",
        courseTitle: "Network Programming And Administration",
      },
      { courseCode: "BCS053", courseTitle: "Web Programming" },
      {
        courseCode: "BCS054",
        courseTitle: "Computer Oriented Numerical Techniques",
      },
      { courseCode: "BCS055", courseTitle: "Business Communication" },
      {
        courseCode: "BCSL056",
        courseTitle: "Network Programming Administration Lab",
      },
      { courseCode: "BCSL057", courseTitle: "Web Programming Lab" },
      {
        courseCode: "BCSL058",
        courseTitle: "Computer Oriented Numerical Techniques Lab",
      },
    ],
  },
  {
    id: 6,
    courses: [
      {
        courseCode: "MCS022",
        courseTitle: "Operating System Concepts And Networking Management",
      },
      { courseCode: "BCS062", courseTitle: "E-Commerce" },
      {
        courseCode: "BCSL063",
        courseTitle: "Operating System Concepts And Networking Management Lab",
      },
    ],
  },
];

const EnterData = () => {
  const [formData, setFormData] = useState({
    id: "145",
    type: "",
    semester: "",
    courseCode: "",
    courseTitle: "",
    session: "",
    paperLink: "",
    solutionLink: "",
  });
  const { setUser } = useAppContext();

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // handle all field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "course") {
      // find selected course from the list
      const selectedCourse = courses.find((c) => c.courseCode === value);

      setFormData((prev) => ({
        ...prev,
        courseCode: selectedCourse?.courseCode || "",
        courseTitle: selectedCourse?.courseTitle || "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name === "semester" ? { courseCode: "", courseTitle: "" } : {}), // reset course+title when semester changes
      }));
    }
  };

  // find courses for selected semester
  const selectedSemester = data.find(
    (sem) => sem.id === Number(formData.semester)
  );

  const courses = selectedSemester ? selectedSemester.courses : [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/add-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      alert(result.message);
      setFormData({
        type: "",
        semester: "",
        courseCode: "",
        courseTitle: "",
        session: "",
        paperLink: "",
        solutionLink: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add resource");
    }
  };

  return (
    <div className="absolute top-0 left-0 h-dvh w-full bg-black/70 flex justify-center items-center z-999">
      <form
        onSubmit={handleSubmit}
        className="max-h-150 h-full max-w-170 m-4 w-full bg-white rounded-md relative p-4 flex flex-col gap-2"
      >
        <span
          onClick={handleLogout}
          className="absolute top-4 right-4 cursor-pointer text-sm"
        >
          Logout
        </span>

        <h1 className="text-xl">Upload Data</h1>

        <div className="flex gap-4">
          {/* Type */}
          <div className="flex items-center gap-2 flex-1">
            <label htmlFor="type" className="text-nowrap">
              Select Type
            </label>
            <select
              className="bg-emerald-100 rounded-md px-2 py-1 w-full [&_option]:bg-white"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="paper">Paper</option>
              <option value="assignment">Assignment</option>
              <option value="material">Material</option>
              <option value="notification">Notification</option>
            </select>
          </div>

          {/* Semester */}
          <div className="flex items-center gap-2 flex-1">
            <label htmlFor="semester">Semester</label>
            <select
              className="bg-emerald-100 rounded-md px-2 py-1 w-full [&_option]:bg-white"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
            >
              <option value="">Select Semester</option>
              {data.map((sem) => (
                <option key={sem.id} value={sem.id}>
                  {sem.id}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course */}
        <div className="flex items-center gap-2">
          <label htmlFor="course">Course</label>
          <select
            className="bg-emerald-100 rounded-md px-2 py-1 w-full [&_option]:bg-white"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            disabled={!formData.semester}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.courseCode} value={course.courseCode}>
                {course.courseCode} - {course.courseTitle}
              </option>
            ))}
          </select>
        </div>

        {/* Session */}
        <div className="flex items-center gap-2">
          <legend>Session</legend>
          <label htmlFor="june" className="flex gap-2">
            <input
              type="radio"
              id="june"
              name="session"
              value="June"
              checked={formData.session === "June"}
              onChange={handleChange}
            />
            June
          </label>

          <label htmlFor="december" className="flex gap-2">
            <input
              type="radio"
              id="december"
              name="session"
              value="December"
              checked={formData.session === "December"}
              onChange={handleChange}
            />
            December
          </label>
        </div>

        <div className="flex flex-col">
          {/* Paper Link */}
          <label htmlFor="paperLink">Paper Link</label>
          <input
            type="text"
            id="paperLink"
            name="paperLink"
            value={formData.paperLink}
            onChange={handleChange}
            className="bg-emerald-100 rounded-md px-2 py-1 w-full"
          />
        </div>

        <div className="flex flex-col">
          {/* Solution Link */}
          <label htmlFor="solutionLink">Solution Link</label>
          <input
            type="text"
            id="solutionLink"
            name="solutionLink"
            value={formData.solutionLink}
            onChange={handleChange}
            className="bg-emerald-100 rounded-md px-2 py-1 w-full"
          />
        </div>

        <input type="submit" className="bg-emerald-200 p-2 rounded-md" />
      </form>
    </div>
  );
};

export default EnterData;
