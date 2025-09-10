import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 flex-col flex lg:flex-row gap-4 h-[calc(100dvh-60px)]">
        <div className="w-full lg:w-[80%]">
          <SearchBar />
          <Outlet />
        </div>
        <div className="w-full lg:w-[20%] flex flex-col lg:flex-row gap-4">
          <div className="bg-gray-200 rounded-full h-1 w-full lg:h-full lg:w-1"></div>
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Layout;
