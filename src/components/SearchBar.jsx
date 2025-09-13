import { useState, useEffect } from "react";
import searchLogo from "../assets/search.png";
import data from "../data/data.json";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setResults(filtered);
  }, [searchTerm]);

  console.log(results);

  return (
    <div className="relative pl-2 bg-white rounded-lg flex items-center border border-gray-300 text-text-primary">
      <img src={searchLogo} className="w-4 brightness-60" />
      <input
        type="text"
        placeholder="Search for resources"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
