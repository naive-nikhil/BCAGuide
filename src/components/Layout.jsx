import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import FeaturedCarousel from "./FeaturedCarousel";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 flex-col flex lg:flex-row w-full gap-4 h-full lg:h-[calc(100vh-60px)]">
        <div className="w-full lg:w-[calc(100%-300px)] flex flex-col gap-4">
          <div className="">
            <SearchBar />
          </div>
          <div className="lg:h-[calc(100vh-132px)] flex flex-col gap-4">
            <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2 rounded-md">
              <Outlet />
            </section>
            <section className="h-[calc(calc(100vh-164px)/2)] overflow-hidden">
              <FeaturedCarousel />
            </section>
          </div>
        </div>
        <div className="w-full lg:w-[300px] flex flex-col lg:flex-row gap-4 overflow-hidden lg:h-[calc(100vh-92px)]">
          <div className="bg-gray-200 rounded-full h-1 w-full lg:h-full lg:w-1"></div>
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Layout;
