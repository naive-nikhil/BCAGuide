import { useState } from "react";
import searchLogo from "../assets/search.png";
import filterLogo from "../assets/filter.png";
import Fuse from "fuse.js";

import { resources, coursesBySemester } from "../data/flat_data";

// 🔹 Normalize query variations like "sem 1", "semester one"
const normalizeQuery = (query) => {
  let q = query.toLowerCase().trim();
  q = q.replace(/\bsem\b/g, "semester");
  q = q.replace(/\b1st\b|\bone\b|\bi\b/g, "1");
  q = q.replace(/\b2nd\b|\btwo\b|\bii\b/g, "2");
  q = q.replace(/\b3rd\b|\bthree\b|\biii\b/g, "3");
  q = q.replace(/\bfour\b|\biv\b/g, "4");
  q = q.replace(/\bfive\b|\bv\b/g, "5");
  q = q.replace(/\bsix\b|\bvi\b/g, "6");
  return q;
};

const detectSemester = (query) => {
  const normalized = normalizeQuery(query);
  console.log(normalized);
  const match = normalized.match(/semester\s*(\d)/);
  console.log(match);
  return match ? parseInt(match[1]) : null;
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filterDropdown, setFilterDropdown] = useState(false);

  const handleToggle = (filterName) => {
    setFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((f) => f !== filterName)
        : [...prev, filterName]
    );
  };

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (!input.trim()) {
      setResults([]);
      return;
    }

    const sem = detectSemester(input);
    let filtered = [];

    console.log(sem);

    if (sem) {
      // 🔹 Only semester-based filtering for now
      filtered = coursesBySemester.find((r) => r.id === sem)?.courses;
    }

    console.log(filtered);

    setResults(filtered);
    console.log(results);
  };

  return (
    <div className="h-full flex flex-col gap-2 relative">
      {/* Search Bar */}
      <div className="relative pl-2 bg-white rounded-lg flex gap-2 items-center border border-gray-300 text-text-primary px-2">
        <img src={searchLogo} className="w-4 brightness-60" />
        <input
          type="text"
          placeholder="Search for resources"
          value={query}
          onChange={handleSearch}
          className="w-full py-2 pl-2"
        />

        {/* Active filter badges */}
        {filters.length > 0 && (
          <div className="hidden lg:flex gap-2">
            {filters.map((f) => {
              const labels = {
                pyqs: "PYQs",
                assignments: "Assignments",
                materials: "Materials",
                notes: "Notes",
              };
              return (
                <span
                  key={f}
                  className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs flex items-center gap-2"
                >
                  {labels[f]}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleToggle(f)}
                  >
                    ✕
                  </button>
                </span>
              );
            })}
          </div>
        )}

        {/* Filter dropdown */}
        <div
          onMouseEnter={() => setFilterDropdown(true)}
          onMouseLeave={() => setFilterDropdown(false)}
          className="h-10 relative flex items-center justify-center"
        >
          <div className="flex items-center gap-1 p-2 py-1 rounded-full bg-violet-100">
            <img
              src={filterLogo}
              className="max-w-2 brightness-10 cursor-pointer"
            />
            <span className="text-xs select-none">Filters</span>
          </div>

          {filterDropdown && (
            <div className="absolute top-full flex flex-col pt-2 gap-1 p-2 rounded-b-md right-0 w-fit bg-white border border-gray-300 z-50 text-sm">
              {["pyqs", "assignments", "materials", "notes"].map((key) => {
                const labels = {
                  pyqs: "Previous Year Question Papers",
                  assignments: "Assignments",
                  materials: "Study Materials",
                  notes: "Notes",
                };
                return (
                  <label
                    key={key}
                    htmlFor={key}
                    className="text-nowrap flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={key}
                      checked={filters.includes(key)}
                      onChange={() => handleToggle(key)}
                    />
                    {labels[key]}
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Active filter badges (mobile) */}
      {filters.length > 0 && (
        <div className="flex gap-2 lg:hidden">
          {filters.map((f) => {
            const labels = {
              pyqs: "PYQs",
              assignments: "Assignments",
              materials: "Materials",
              notes: "Notes",
            };
            return (
              <span
                key={f}
                className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs flex items-center gap-2"
              >
                {labels[f]}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleToggle(f)}
                >
                  ✕
                </button>
              </span>
            );
          })}
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
