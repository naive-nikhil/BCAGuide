import heroImg from "../assets/hero.jpg";

const Carousel = ({ sidebarComponent, pages }) => {
  return (
    <div className="flex w-full justify-between overflow-hidden rounded-md">
      <div className="flex flex-col lg:flex-row w-full">
        {sidebarComponent}

        <div className="flex-1 bg-white p-2 lg:p-4 h-full overflow-auto">
          {pages}
        </div>
      </div>

      <div className="relative hidden 2xl:block overflow-hidden w-80 h-150">
        <img
          src={heroImg}
          alt="Image representing a wooden block on table with text 'Do What You Love' written on it."
          className="absolute w-full h-full object-cover -top-50"
        />
      </div>
    </div>
  );
};

export default Carousel;
