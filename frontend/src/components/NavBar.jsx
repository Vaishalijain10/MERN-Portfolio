import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import bgImage from "../Images/NavImage.png";

export default function NavBar() {
  // State to manage the collapse button
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className="relative z-2 p-4 flex justify-between shadow-lg bg-[#1e1e1e] bg-blend-overlay bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgba(30, 30, 30, 0.90)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Collapse button for mobile view */}
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl ml-8">Portfolio</div>
      </div>
      <div>
        <button
          className="md:hidden md:justify-end text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Icon for the collapse button */}
          {isOpen ? (
            <ImCross className="text-[10px] ml-14" />
          ) : (
            <TbLayoutSidebarLeftCollapseFilled className="text-2xl" />
          )}
        </button>
        <div>
          {/* Navigation links */}
          <ul
            className={`flex-col md:flex-row md:flex md:items-center md:justify-end ${
              isOpen ? "flex" : "hidden"
            } transition ease-in-out duration-300`}
          >
            <li className="mr-4">
              <a
                href="/"
                className="cursor-pointer text-white text-xl hover:bg-[rgba(255,255,255,0.3)] hover:font-bold px-2 py-1 rounded transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li className="mr-4">
              <a
                href="#about"
                className="cursor-pointer text-white text-xl hover:bg-[rgba(255,255,255,0.3)] hover:font-bold px-2 py-1 rounded transition-all duration-300"
              >
                About
              </a>
            </li>

            <li className="mr-4">
              <a
                href="#projects"
                className="cursor-pointer text-white text-xl hover:bg-[rgba(255,255,255,0.3)] hover:font-bold px-2 py-1 rounded transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li className="mr-4">
              <a
                href="#contact"
                className="cursor-pointer text-white text-xl hover:bg-[rgba(255,255,255,0.3)] hover:font-bold px-2 py-1 rounded transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
