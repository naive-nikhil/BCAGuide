import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 flex-col flex lg:flex-row w-full gap-4 h-full">
        <div className="w-full lg:w-[calc(100%-300px)]">
          <SearchBar />
          <Outlet />
        </div>
        <div className="w-full lg:w-[300px] flex flex-col lg:flex-row gap-4">
          <div className="bg-gray-200 rounded-full h-1 w-full lg:h-full lg:w-1"></div>
          <Sidebar />
        </div>
      </main>
      <div className="w-full bg-black text-white text-center text-lg p-3">
        Copyright - Vani
      </div>
    </div>
  );
};

export default Layout;
