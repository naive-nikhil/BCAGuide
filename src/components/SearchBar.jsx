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
  const [placeholder, setPlaceholder] = useState(
    "Papers, Assignments, Materials & Notes"
  );
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState();

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
        course.courseCode.startsWith(code) ||
        course.courseTitle.toLowerCase().includes(input)
    );

    console.log(filtered);

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

    // Once filter is set, search inside that category
    if (filter) {
      let filteredResults = resources.filter((r) => r.type === filter);

      console.log(courseMatch);
      console.log(input.match(/\d+/));

      if (courseMatch) {
        const url = urls[filter] + `/${courseMatch}`;
        console.log(code);

        console.log(url);

        filteredResults = [
          {
            courseCode: code,
            courseTitle: coursesByCode[code],
            link: url,
          },
        ];
        console.log(filteredResults);
      }

      setResults(filteredResults);
    }
  };

  return (
    <div className="h-full flex flex-col gap-2 relative" tabIndex={0}>
      {/* Search Bar */}
      <div className="relative pl-2 bg-white rounded-lg flex gap-2 items-center border border-gray-300 text-text-primary px-2">
        <img src={searchLogo} className="w-4 brightness-60" />
        {/* Active filter badges */}
        {filter && (
          <div className="hidden lg:flex gap-2">
            {
              <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs flex items-center gap-2">
                {labels[filter]}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    setFilter("");
                    setPlaceholder("Papers, Assignments, Materials & Notes");
                  }}
                >
                  ✕
                </button>
              </span>
            }
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

      {/* Active filter badges */}
      {filter && (
        <div className="flex lg:hidden gap-2">
          {
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs flex items-center gap-2">
              {labels[filter]}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => {
                  setFilter("");
                  setPlaceholder("Papers, Assignments, Materials & Notes");
                }}
              >
                ✕
              </button>
            </span>
          }
        </div>
      )}

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
