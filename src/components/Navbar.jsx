import { useState } from "react";
import { Link } from "react-router-dom";

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
        title: "Previous Year Question Paper",
        link: "previous-year-questions",
      },
      { title: "Assignments", link: "assignments" },
      { title: "Study Materials", link: "study-materials" },
      { title: "eBooks & PDFs", link: "ebooks-and-pdfs" },
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
    <nav className="bg-gray-200 flex justify-between items-center relative z-100">
      <h1 className="text-2xl mx-4 font-medium text-text-primary text-heading">
        BCA Guide - IGNOU
      </h1>
      <ul className="flex [&_li]:cursor-pointer [&_li]:p-4 [&_li]:hover:bg-accent-tertiary [&_li]:flex [&_li]:items-center [&_li]:gap-2 text-text-primary text-lg">
        {menu.map((item, index) => (
          <Link key={index} to={item.link}>
            <li
              onMouseEnter={() => setDropdownMenu(index)}
              onMouseLeave={() => setDropdownMenu(null)}
              className="relative"
            >
              {item.title}
              {item.submenu && <span>•</span>}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-green-700 transition-all duration-400 ease ${
                  dropdownMenu === index ? "w-full" : ""
                }`}
              ></span>
              {dropdownMenu === index && item.submenu && (
                <ul className="absolute top-full left-0 bg-white text-nowrap shadow-2xl flex flex-col">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link to={subItem.link}>
                      <li key={subIndex} className="relative">
                        {subItem.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
