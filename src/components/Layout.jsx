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
            <h2 className="bg-red-500 py-1 px-2 rounded-md text-white">This website is currently in development! Sorry for the inconvenience. Content is being uploaded regularly but will take some time. It is a initiative by me, and I'm alone in solving each and every paper manually and then upload it.</h2> 
            <section className="h-full lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden flex flex-col gap-2 rounded-md">
              <Outlet />
            </section>
            <section className="max-h-fit lg:h-[calc(calc(100vh-164px)/2)] overflow-hidden">
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
