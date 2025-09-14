import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAppContext } from "../context/AppContext";

import { resources, coursesBySemester } from "../data/flat_data";

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
    year: "",
    cycle: "",
    assignmentLink: "",
    materialLink: "",
  });
  const { setUser } = useAppContext();

  console.log(resources.length);

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
  const selectedSemester = coursesBySemester.find(
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 h-dvh w-full bg-black/70 flex justify-center items-center z-999">
      <form
        onSubmit={handleSubmit}
        className="max-h-150 h-fit max-w-170 m-4 w-full bg-white rounded-md relative p-4 flex flex-col gap-4"
      >
        <span
          onClick={handleLogout}
          className="absolute top-4 right-4 cursor-pointer text-sm select-none"
        >
          Logout
        </span>

        <h1 className="text-xl">Upload Data</h1>

        <div className="flex gap-4 flex-col lg:flex-row">
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
              required
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
              required
            >
              <option value="">Select Semester</option>
              {coursesBySemester.map((sem) => (
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

        {formData.type === "paper" && (
          <>
            {/* Session */}
            <div className="flex gap-4 flex-col lg:flex-row">
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

              <label htmlFor="year" className="flex gap-2 items-center w-full">
                Year
                <input
                  name="year"
                  id="year"
                  type="text"
                  value={formData.year}
                  onChange={handleChange}
                  className="bg-emerald-100 rounded-md px-2 py-1 w-full"
                />
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
          </>
        )}

        {formData.type === "assignment" && (
          <>
            <label htmlFor="cycle" className="flex gap-2 items-center w-full">
              Cycle
              <input
                name="cycle"
                id="cycle"
                type="text"
                value={formData.cycle}
                onChange={handleChange}
                className="bg-emerald-100 rounded-md px-2 py-1 w-full"
              />
            </label>

            <div className="flex flex-col">
              {/* Paper Link */}
              <label htmlFor="assignmentLink">Paper Link</label>
              <input
                type="text"
                id="assignmentLink"
                name="assignmentLink"
                value={formData.assignmentLink}
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
          </>
        )}

        {formData.type === "material" && (
          <>
            <div className="flex flex-col">
              {/* Paper Link */}
              <label htmlFor="materialLink">Paper Link</label>
              <input
                type="text"
                id="materialLink"
                name="materialLink"
                value={formData.materialLink}
                onChange={handleChange}
                className="bg-emerald-100 rounded-md px-2 py-1 w-full"
              />
            </div>
          </>
        )}

        <input type="submit" className="bg-emerald-300 p-2 rounded-md" />
      </form>
    </div>
  );
};

export default EnterData;
