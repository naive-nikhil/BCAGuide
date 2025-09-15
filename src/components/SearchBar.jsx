import { useState, useEffect } from "react";
import searchLogo from "../assets/search.png";
import filterLogo from "../assets/filter.png";
import Fuse from "fuse.js";

import { resources } from "../data/flat_data";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(resources);

  const [filters, setFilters] = useState([]);

  const handleToggle = (filterName) => {
    setFilters(
      (prev) =>
        prev.includes(filterName)
          ? prev.filter((f) => f !== filterName) // remove if exists
          : [...prev, filterName] // add if not
    );
  };

  console.log(filters);

  const fuse = new Fuse(resources, {
    keys: ["title", "course", "type", "year"], // fields to search in
    threshold: 0.4, // fuzziness (lower = stricter, higher = more fuzzy)
    includeScore: true,
  });

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    console.log(input);

    if (!input.trim()) {
      setResults(resources);
      return;
    }

    // Extract year (4-digit number) and course code (like BCS011)
    const yearMatch = input.match(/\b(19|20)\d{2}\b/);
    const courseMatch = input.match(/\b[A-Z]{3}\d{3}\b/i);

    let filtered = resources;

    console.log(yearMatch);

    console.log(courseMatch);

    if (yearMatch) {
      filtered = filtered.filter((r) => r.year === yearMatch[0]);
    }
    if (courseMatch) {
      filtered = filtered.filter(
        (r) => r.courseCode.toLowerCase() === courseMatch[0].toLowerCase()
      );
    }

    // Run fuzzy search
    const fuseResults = fuse.search(input);
    const fuzzyMatched = fuseResults.map((r) => r.item);

    // Final result = intersection of filters + fuzzy OR fallback to fuzzy
    setResults(filtered.length ? filtered : fuzzyMatched);
    console.log(filtered);
  };

  return (
    <div className="relative pl-2 bg-white rounded-lg flex gap-2 items-center border border-gray-300 text-text-primary">
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
        <div className="flex gap-2">
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
      <div className="relative w-full max-w-3">
        <img src={filterLogo} className="brightness-70 cursor-pointer" />
        {/* Filter dropdown */}
        <div className="absolute top-[calc(100%+18px)] flex flex-col gap-1 p-2 rounded-md right-0 w-fit bg-white border border-gray-300 rounded-tr-none z-50 text-sm">
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
      </div>
      <button className={`rounded cursor-pointer p-2 px-6 bg-emerald-300`}>
        Search
      </button>
      <div className="absolute top-full left-0 h-50 w-full bg-white hidden"></div>
    </div>
  );
};

export default SearchBar;
