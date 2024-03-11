import React from "react";
import { Element } from "react-scroll";
function Portfolio() {
  return (
    <Element
      name="portfolio"
      className=" pt-20 max-md:pt-10 max-sm:p-5 max-sm:h-[180%]  max-md:h-[100%]  bg-black h-screen "
    >
      <div className="flex justify-center items-center">
        <h1 className="text-white text-6xl ">
          <span className="text-red-500 text-6xl">Post</span>forlio
        </h1>
      </div>
      <div className=" flex justify-center items-center mt-10 ">
        <div className=" grid grid-cols-3 max-md:gap-3 gap-10 max-md:grid-cols-2">
          <div class="   cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:z-10">
            <img
              src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-coding-professional-hoodie_117038-5487.jpg"
              className="w-64  rounded-md"
              alt=""
            ></img>
            <p className=" text-center text-sm text-red-500 mt-2">
              GRASS JELLY CUTTING MACHINE
            </p>
            <p className="text-white text-center text-xs mt-2">
              Designing software to control machine operations through a
              touchscreen interface using Python, with PyQt5 as ....
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white text-opacity-50 text-xs mt-5 ">
                Python Pyqt5 Mysql
              </p>
              <div className=" flex justify-center items-center gap-2">
                <a
                  className="mt-4"
                  href="https://cdn.discordapp.com/attachments/1015845035440353281/1216289311356354630/Paper_.pdf?ex=65ffd8b1&is=65ed63b1&hm=c3f6faaf170661e6180bb6a150623fd67689629525db917f61fa57534c8c39db&"
                >
                  {" "}
                  <i class="fa-solid fa-download text-white text-opacity-50 hover:text-opacity-100  "></i>
                </a>
                <a href="https://github.com/phuwanonjame/GRASS-JELLY-CUTTING-MACHINE">
                  {" "}
                  <i class="fa-brands fa-github text-white text-opacity-50 hover:text-opacity-100 mt-5"></i>
                </a>
              </div>
            </div>
          </div>
          <div class=" cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <img
              src="https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
              className="w-64 rounded-md"
              alt=""
            ></img>
            <p className="text-red-500 text-sm text-center mt-2">
              Contractor-Manage-SyStem
            </p>
            <p className="text-white text-center text-xs mt-2">
              The platform or computer program used to manage data and processes
              related to contractors or companies hired for projects....
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white text-opacity-50 text-xs mt-5 ">
                React Mssql Tailwindcss
              </p>
              <a href="https://github.com/phuwanonjame/CContractor-Manage-SyStem">
                <i class="fa-brands fa-github text-white text-opacity-50 hover:text-opacity-100 mt-5"></i>
              </a>
            </div>
          </div>
          <div class="cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <img
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
              className="w-64 rounded-md"
              alt=""
            ></img>
            <p className="text-red-500 text-sm text-center mt-2">
              Physical-Inventory
            </p>
            <p className="text-white text-center text-xs mt-2">
              The system used to manage and conduct inventory checks of goods or
              materials in an organization or business often employs ....
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white text-opacity-50 text-xs mt-5 ">
                React Mssql Tailwindcss
              </p>
              <a href="https://github.com/phuwanonjame/CContractor-Manage-SyStem">
                <i class="fa-brands fa-github text-white text-opacity-50 hover:text-opacity-100 mt-5"></i>
              </a>
            </div>
          </div>
          <div class="cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <img
              src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-gamer-headphones_117038-7596.jpg"
              className="w-64 rounded-md"
              alt=""
            ></img>
            <p className="text-white text-center mt-2">Physical-Inventory</p>
            <p className="text-white text-center text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio
            </p>
            <p className="text-white text-opacity-50 text-xs mt-5 ">
              reactjs,tailwindcss
            </p>
          </div>
          <div class="cursor-pointer bg-neutral-600 bg-opacity-30 shadow-sm shadow-red-500 p-5 rounded-md max-w-72 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <img
              src="https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai-ofiice-gamer_117038-5481.jpg"
              className="w-64 rounded-md"
              alt=""
            ></img>
            <p className=" text-center mt-2 text-red-500">Physical-Inventory</p>
            <p className="text-white text-center text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio
            </p>
            <p className="text-white text-opacity-50 text-xs mt-5 ">
              reactjs,tailwindcss
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Portfolio;
