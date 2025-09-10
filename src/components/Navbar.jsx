import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.png";

const menu = [
  { title: "Home", link: "/" },
  {
    title: "About Me",
    link: "#",
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
      { title: "Study Materials", link: "study-materials" },
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
    link: "#",
  },
  {
    title: "Notifications & Alerts",
    link: "#",
  },
];

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(null);

  return (
    <nav className="bg-gray-200 flex justify-between items-center relative z-100 px-4">
      <h1 className="text-2xl font-medium text-text-primary text-heading py-4 lg:p-0">
        BCA Guide - IGNOU
      </h1>
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
              <ul className="absolute top-full left-0 bg-white text-nowrap shadow-2xl flex flex-col">
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
      <a href="/project-synopsis-and-report" className="w-6 lg:hidden">
        <img src={menuIcon} className="brightness-10" />
      </a>
    </nav>
  );
};

export default Navbar;
