import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 flex gap-4 h-[calc(100dvh-60px)]">
        <div className="min-w-[calc(100%-336px)]">
          <SearchBar />
          <Outlet />
        </div>
        <div className="bg-gray-200 rounded-full w-6"></div>
        <Sidebar />
      </main>
    </div>
  );
};

export default Layout;
