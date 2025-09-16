import { useState } from "react";
import searchLogo from "../assets/search.png";
import filterLogo from "../assets/filter.png";
import Fuse from "fuse.js";

import { resources, coursesBySemester, coursesByCode } from "../data/flat_data";

const labels = {
  paper: "PYQs",
  assignment: "Assignments",
  material: "Materials",
  notes: "Notes",
};

const urls = {
  paper: "/previous-year-question-papers",
  assignment: "/assignments/2024-25",
  material: "/study-material",
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Select Category First");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("paper");

  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (!input) {
      setResults([]);
      return;
    }

    const courseMatch =
      (input.match(/[a-z]*\s?-?/i)?.[0].replace(/[-\s]/g, "") || "") +
      "0" +
      (Number(input.match(/\d+/)?.[0]) || "");

    const code = courseMatch.toUpperCase();

    const allCourses = Object.entries(coursesByCode).map(([code, title]) => ({
      courseCode: code,
      courseTitle: title,
    }));

    const filtered = allCourses.filter(
      (course) =>
        course.courseCode.includes(code) ||
        course.courseTitle.toLowerCase().includes(input)
    );

    setResults(filtered);

    const normalize = (input) => input.toLowerCase().trim();

    if (normalize(input).includes("paper")) {
      setFilter("paper");
      setPlaceholder("Search by Course Code, Title or Semester");
      setQuery("");
    } else if (normalize(input).includes("assignment")) {
      setFilter("assignment");
      setQuery("");
    } else if (normalize(input).includes("material")) {
      setFilter("material");
      setQuery("");
    } else if (normalize(input).includes("note")) {
      setFilter("notes");
      setQuery("");
    }
  };

  return (
    <div className="h-full flex flex-col gap-2 relative" tabIndex={0}>
      {/* Search Bar */}
      <div className="relative pl-2 bg-white rounded-lg flex gap-2 items-center border border-gray-300 text-text-primary px-2">
        <img src={searchLogo} className="w-4 brightness-60" />
        {/* Active filter badges */}
        {filter && (
          <div
            onMouseEnter={() => setCategoryDropdown(true)}
            onMouseLeave={() => setCategoryDropdown(false)}
            className="flex flex-col relative mt-1"
          >
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs flex items-center gap-2">
              {labels[filter]}
              <button className="text-red-500 hover:text-red-700 scale-130 cursor-pointer">
                ▾
              </button>
            </span>
            <div className="w-full h-1 bg-transparent"></div>
            {categoryDropdown && (
              <ul className="absolute top-full p-1 gap-1 bg-emerald-100 text-emerald-700 text-xs flex flex-col rounded">
                {Object.entries(labels).map((label) => (
                  <li
                    onClick={() => {
                      setCategoryDropdown(false);
                      setFilter(label[0]);
                    }}
                    className="px-2 py-1 rounded bg-black/5 cursor-pointer"
                  >
                    {label[1]}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleSearch}
          className="w-full py-2 pl-2"
        />
      </div>

      {/* Results dropdown */}
      {results.length > 0 && (
        <div className="absolute max-h-60 overflow-y-auto w-full bg-white border border-gray-300 top-full mt-2 rounded-md p-2 text-sm">
          <ul className="flex flex-col">
            {results.map((item, index) => (
              <a href={item.link} key={index}>
                {item.courseCode} {item.courseTitle}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
