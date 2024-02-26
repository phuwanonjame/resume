import React from "react";
import { Element } from "react-scroll";
function Skills() {
  return (
    <Element name="skills" className=" bg-black h-screen w-full" >
            <div className="h-full flex flex-col justify-center items-center ">
      <div>
        <div className=" flex justify-center">
          <h1 className="text-white text-7xl">
            <span className="text-red-500">My </span>Skills
          </h1>
        </div>
      </div>
      <div className="w-full text-white mt-5 flex justify-evenly items-center max-md:flex-col max-md:justify-center max-md:items-center ">
        <div className="">
          <h1 className="pb-5 text-2xl">Coding Skills</h1>

          <div className="border  border-red-800 rounded-md w-96">
            <div className="p-5">
              <div className="flex justify-between">
                <span>HTML</span>
                <span>100%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md bg-white ">
                <div className=" w-[100%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <span>CSS</span>
                <span>100%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md bg-white ">
                <div className=" w-[100%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <span>Javascript</span>
                <span>80%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md   bg-white ">
                    <div className=" w-[80%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <span>python</span>
                <span>50%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md bg-white ">
                <div className=" w-[50%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" pb-5 text-2xl">Professional Skills</h1>
          <div className="border  border-red-800 rounded-md w-96">
            <div className="p-5">
              <div className="flex justify-between">
                <span>Web Design</span>
                <span>100%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md bg-white ">
                <div className=" w-[100%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <span>Web Development</span>
                <span>100%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md bg-white ">
                <div className=" w-[100%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <span>UX/UI Design</span>
                <span>80%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md   bg-white ">
                    <div className=" w-[80%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <span>python</span>
                <span>50%</span>
              </div>

              <div className="p-2">
                <div className="w-full h-4 rounded-md bg-white ">
                <div className=" w-[50%] h-full rounded-md bg-red-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Element>
  );
}

export default Skills;
