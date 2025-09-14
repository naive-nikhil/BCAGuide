import { useState, useEffect } from "react";
import searchLogo from "../assets/search.png";
import Fuse from "fuse.js";

function parseQuery(query) {
  const lower = query.toLowerCase();

  // detect type/category
  let type = null;
  if (lower.includes("previous")) type = "paper";
  if (lower.includes("assignment")) type = "assignment";
  // (add more mappings as needed)

  // detect course code (regex for BCSxxx, MCSxxx, ECOxx, etc.)
  const courseMatch = lower.match(/(bcs|mcs|eco)\d{2,3}/i);
  const courseCode = courseMatch ? courseMatch[0].toUpperCase() : null;

  // detect year (4 digits between 1990-2099)
  const yearMatch = lower.match(/\b(19|20)\d{2}\b/);
  const year = yearMatch ? parseInt(yearMatch[0]) : null;

  return { type, courseCode, year };
}

function searchResources(resources, query) {
  const { type, courseCode, year } = parseQuery(query);

  return resources.filter((res) => {
    let ok = true;

    if (type) ok = ok && res.type === type;
    if (courseCode) ok = ok && res.courseCode === courseCode;
    if (year) ok = ok && res.year === year;

    return ok;
  });
}

import { resources } from "../data/flat_data";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(resources);

  const fuse = new Fuse(resources, {
    keys: ["title", "course", "type", "year"], // fields to search in
    threshold: 0.4, // fuzziness (lower = stricter, higher = more fuzzy)
    includeScore: true,
  });

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (!input.trim()) {
      setResults(resources);
      return;
    }

    // Extract year (4-digit number) and course code (like BCS011)
    const yearMatch = input.match(/\b(19|20)\d{2}\b/);
    const courseMatch = input.match(/\b[A-Z]{3}\d{3}\b/i);

    let filtered = resources;

    if (yearMatch) {
      filtered = filtered.filter((r) => r.year === parseInt(yearMatch[0]));
    }
    if (courseMatch) {
      filtered = filtered.filter(
        (r) => r.course.toLowerCase() === courseMatch[0].toLowerCase()
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
    <div className="relative pl-2 bg-white rounded-lg flex items-center border border-gray-300 text-text-primary">
      <img src={searchLogo} className="w-4 brightness-60" />
      <input
        type="text"
        placeholder="Search for resources"
        value={query}
        onChange={handleSearch}
        className="w-full py-2 pl-2"
      />
      <button className={`rounded cursor-pointer p-2 px-6 bg-emerald-300`}>
        Search
      </button>
      <div className="absolute top-full left-0 h-50 w-full bg-white hidden"></div>
    </div>
  );
};

export default SearchBar;
