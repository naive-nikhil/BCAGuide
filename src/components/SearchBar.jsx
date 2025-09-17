import { useCallback, useState } from "react";
import searchLogo from "../assets/search.png";
import Fuse from "fuse.js";

import { coursesByCode } from "../data/flat_data";
import { Link } from "react-router-dom";

const labels = {
  paper: "PYQs",
  assignment: "Assignments",
  material: "Materials",
  note: "Notes",
};

const urls = {
  paper: "/previous-year-question-papers",
  assignment: "/assignments/2024-25",
  material: "/study-materials",
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("paper");
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const placeholder = `Search ${filter}s by course code or title`;
  const url = urls[filter];

  const allCourses = Object.entries(coursesByCode).map(([code, title]) => ({
    courseCode: code,
    courseTitle: title,
  }));

  const fuse = new Fuse(allCourses, {
    keys: ["courseCode", "courseTitle"],
    threshold: 0.3,
  });

  const handleSearch = useCallback((e) => {
    const input = e.target.value;
    setQuery(input);
    if (!query) return setResults([]);

    const filtered = fuse.search(query).map(({ item }) => ({
      ...item,
      link: `${url}/${item.courseCode.toLowerCase()}`,
    }));
    setResults(filtered);
  });

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
              <ul className="absolute top-full p-1 gap-1 bg-emerald-100 text-emerald-700 text-xs flex flex-col rounded z-2">
                {Object.entries(labels).map((label, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCategoryDropdown(false);
                      setFilter(label[0]);
                    }}
                    className="px-2 py-1 rounded bg-black/3 cursor-pointer"
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
        <div className="absolute max-h-42 overflow-y-auto w-full bg-white border border-gray-300 top-full mt-2 rounded-md p-1 text-sm z-2">
          <ul className="flex flex-col gap-1">
            {results.map((item, index) => (
              <Link
                to={item.link}
                onClick={() => {
                  setQuery("");
                  setResults([]);
                }}
                key={index}
                className="bg-black/1 hover:bg-black/3 rounded cursor-pointer py-1 px-2"
              >
                <span className="text-violet-700 py-1 px-2 bg-violet-100 rounded-full text-xs">
                  {item.courseCode}
                </span>{" "}
                {item.courseTitle}
              </Link>
            ))}
          </ul>
        </div>
      )}
      {query && results.length === 0 && (
        <div className="absolute max-h-42 overflow-y-auto flex flex-col w-full bg-white border border-gray-300 top-full mt-2 rounded-md p-1 text-sm z-2 text-center">
          <span className="bg-black/1 hover:bg-black/3 rounded cursor-pointer py-1 px-2">
            No results found
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
