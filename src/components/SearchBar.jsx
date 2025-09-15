import { useState } from "react";
import searchLogo from "../assets/search.png";
import filterLogo from "../assets/filter.png";
import Fuse from "fuse.js";

import { resources, coursesBySemester } from "../data/flat_data";

const labels = {
  paper: "PYQs",
  assignment: "Assignments",
  material: "Materials",
  notes: "Notes",
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

    const normalize = (input) => input.toLowerCase().trim();
    const normalizeCourseCode = (str) =>
      str
        .replace(/[-\s]/g, "")
        .toUpperCase()
        .replace(/^([A-Z]{3})(\d{2})$/, "$10$2");

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

      console.log(filteredResults);

      // Match by Course Code (e.g. BCS011, bcs-11, bcs 11)
      const courseMatch = input.match(/[a-z]{3}\s?-?\d{2,3}/i);
      console.log(courseMatch);
      if (courseMatch) {
        const code = normalizeCourseCode(courseMatch[0]);
        console.log(code);
        filteredResults = filteredResults.filter((r) => r.courseCode === code);

        console.log(filteredResults);
      }

      // Match by Semester (sem 1, semester one, sem one, etc.)
      const semMatch = input.match(
        /sem(ester)?\s?(one|two|three|four|five|six|[1-6])/i
      );
      if (semMatch) {
        const mapSem = {
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 5,
          six: 6,
        };
        const semKey = semMatch[2]?.toLowerCase() || semMatch[0];
        const semNum = mapSem[semKey] || parseInt(semKey, 10);
        filteredResults = filteredResults.filter((r) => r.semester === semNum);
      }

      // Match by Course Title (fuzzy contains check)
      if (input.length > 2) {
        filteredResults = filteredResults.filter((r) =>
          normalize(r.courseTitle).includes(normalize(input))
        );
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
                  onClick={() => setFilter("")}
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
                onClick={() => setFilter("")}
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
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                {item.courseCode} {item.courseTitle}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
