import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
 
  const [openmenu, setOpenmenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".max-md\\:block") === null) {
        setOpenmenu(false); 
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className="bg-black  fixed w-full ">
      <div className=" flex justify-between items-center max-md:block h-20 ml-10 mr-10  max-md:ml-0  max-md:mr-0   ">
        <div className="flex justify-center items-center gap-4 max-md:justify-between max-md:w-full  ">
          <i class="text-white text-xl  fa-solid fa-bars hidden max-md:block max-md:text-2xl  cursor-pointer ml-2 " onClick={()=>setOpenmenu(true)} ></i>
          <p className="text-red-500 mr-2">phuwanon.com</p>
        </div>
        <div>
        <ul
            className={`flex gap-5  text-white max-md:absolute max-md:flex-col max-md:w-full max-md:text-center max-md:bg-slate-800 transition-all duration-500 ${
              openmenu ? " top-10" : " top-[-490px]"
            }`}
          >
          <li className="max-md:p-5">
            <Link
              to="home"
              className=" cursor-pointer hover:text-red-500  "
              onClick={()=>setOpenmenu(false)}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="max-md:p-5">
            <Link
              to="about"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              onClick={()=>setOpenmenu(false)}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="max-md:p-5">
            <Link
              to="education"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              onClick={()=>setOpenmenu(false)}
              duration={1000}
            >
              Education
            </Link>
          </li>
          <li className="max-md:p-5">
            <Link
              to="skills"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              onClick={()=>setOpenmenu(false)}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li className="max-md:p-5">
            <Link
              to="contact"
              className=" cursor-pointer  hover:text-red-500"
              smooth={true}
              onClick={()=>setOpenmenu(false)}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
