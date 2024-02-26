import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-black  fixed w-full ">
      <div className=" flex justify-between items-center h-20 ml-10 mr-10   ">
        <div className="flex justify-center items-center gap-4">
          <i class="text-white text-xl  fa-solid fa-bars hidden max-md:block cursor-pointer"></i>
          <p className="text-red-500">phuwanon.com</p>
        </div>
        <ul className="flex gap-5 text-white max-md:hidden">
          <li>
            <Link
              to="home"
              className=" cursor-pointer hover:text-red-500"
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="education"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              duration={1000}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
