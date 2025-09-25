import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.png";

const menu = [
  { title: "Home", link: "/" },
  {
    title: "About Me",
    link: "about-me",
  },
  {
    title: "Resources",
    link: "#",
    submenu: [
      {
        title: "Previous Year Question Papers",
        link: "previous-year-question-papers",
      },
      { title: "Assignments", link: "assignments/2024-25" },
      { title: "Study Materials & Notes", link: "study-materials" },
      {
        title: "Project Synopsis & Report",
        link: "project-synopsis-and-report",
      },
    ],
  },

  // I Will Work on this Later
  // {
  //   title: "Tools",
  //   link: "#",
  //   submenu: [
  //     { title: "Grade Calculator", link: "#" },
  //     { title: "Assignment Submission Tracker", link: "#" },
  //     { title: "Exam Form Reminder", link: "#" },
  //     { title: "Credit Completion Tracker", link: "#" },
  //     { title: "Online Code Compiler", link: "#" },
  //   ],
  // },
  {
    title: "Ask Doubts",
    link: "ask-doubts",
  },
  {
    title: "Notifications & Alerts",
    link: "notifications",
  },
];

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(null);
  const [mobileNavState, setMobileNavState] = useState(false);

  return (
    <nav className="bg-gray-200 flex justify-between items-center z-100 px-4 relative">
      <a
        href="/"
        className="text-2xl font-medium text-text-primary text-heading py-[14px] lg:p-0 select-none"
      >
        BCA Guide - IGNOU
      </a>
      <ul className="[&_li]:cursor-pointer [&_li]:p-4 [&_li]:hover:bg-accent-tertiary [&_li]:flex [&_li]:items-center [&_li]:gap-2 text-text-primary text-lg lg:flex hidden">
        {menu.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setDropdownMenu(index)}
            onMouseLeave={() => setDropdownMenu(null)}
            className="relative"
          >
            {item.link !== "#" ? (
              <Link
                to={item.link}
                className="flex items-center gap-2 w-full h-full"
              >
                {item.title}
                {item.submenu && <span>•</span>}
              </Link>
            ) : (
              <span className="flex items-center gap-2 w-full h-full">
                {item.title}
                {item.submenu && <span>•</span>}
              </span>
            )}
            <span
              className={`absolute bottom-0 left-0 w-0 h-[2px] bg-green-700 transition-all duration-400 ease ${
                dropdownMenu === index ? "w-full" : ""
              }`}
            ></span>
            {dropdownMenu === index && item.submenu && (
              <ul className="absolute top-full left-0 bg-white text-nowrap shadow-2xl flex flex-col z-1">
                {item.submenu.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.link}>
                    <li className="relative">{subItem.title}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <img
        src={menuIcon}
        className="brightness-10 w-6 lg:hidden"
        onClick={() => setMobileNavState(!mobileNavState)}
        alt="Menu Icon"
      />

      {/* Nav Menu For Mobile Screen */}
      {mobileNavState && (
        <div className="absolute top-full left-0 bg-white max-h-fit w-full z-1 lg:hidden shadow-xl">
          <ul className="[&_li]:cursor-pointer [&_li]:p-4 [&_li]:flex [&_li]:flex-col [&_li]:gap-2 text-gray-700 text-lg flex flex-col">
            {menu.map((item, index) => (
              <li
                key={index}
                onClick={() =>
                  index != 2
                    ? setMobileNavState(false)
                    : setDropdownMenu(dropdownMenu === index ? null : index)
                }
                className="relative"
              >
                {item.link !== "#" ? (
                  <Link
                    to={item.link}
                    className="flex items-center gap-2 w-full h-full"
                  >
                    {item.title}
                    {item.submenu && <span>•</span>}
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 w-full h-full">
                    {item.title}
                    {item.submenu && <span>•</span>}
                  </span>
                )}
                {dropdownMenu === index && item.submenu && (
                  <ul className="bg-gray-100/50 text-nowrap flex flex-col -mx-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        onClick={() => {
                          setDropdownMenu(null);
                          setMobileNavState(false);
                        }}
                      >
                        <li className="relative">{subItem.title}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
