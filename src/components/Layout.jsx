import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 flex-col flex lg:flex-row w-full gap-4 h-full lg:h-[calc(100dvh-60px)]">
        <div className="w-full lg:w-[calc(100%-300px)] flex flex-col gap-4">
          <div className="h-[40px]">
            <SearchBar />
          </div>
          <div className="h-[calc(100dvh-132px)] flex flex-col gap-4">
            <Outlet />
          </div>
        </div>
        <div className="w-full lg:w-[300px] flex flex-col lg:flex-row gap-4 overflow-hidden lg:h-[calc(100dvh-92px)]">
          <div className="bg-gray-200 rounded-full h-1 w-full lg:h-full lg:w-1"></div>
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Layout;
