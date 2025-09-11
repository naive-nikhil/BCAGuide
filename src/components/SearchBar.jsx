import searchLogo from "../assets/search.png";

const SearchBar = () => {
  return (
    <div className="pl-2 bg-white rounded-lg flex items-center border border-gray-300 text-text-primary overflow-hidden">
      <img src={searchLogo} className="w-4 brightness-60" />
      <input
        type="text"
        placeholder="Search for resources"
        className="w-full py-2 pl-2"
      />
      <button className={`rounded cursor-pointer p-2 px-6 bg-emerald-300`}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
