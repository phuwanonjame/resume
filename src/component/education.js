import React from "react";
import image from "./Untitled-2.png";
import { Element } from "react-scroll";
function Education() {
  return (
    <Element name="education" className=" bg-black  max-sm:h-[150%] max-md:h-[110%] max-md:pt-20 h-screen w-full ">
      <div className="h-full flex flex-col justify-center items-center ">
        <div className="text-7xl max-md:text-5xl flex  justify-center ">
          <h1 className="text-white flex">
            <p className="text-red-500">E</p>DUCATION
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center text-center max-md:block max-md:p-5 ">
            <div className="flex justify-center items-center border-r border-white p-10 max-md:border-none">
              <img
                className="w-36 max-md:w-16 "
                src="https://www.rmutt.ac.th/wp-content/uploads/2021/02/20210202-logoRMUT-01.png"
                alt=""
              ></img>
              <div className="flex justify-center items-center p-10 max-md:p-0 max-md:ml-5">
                <img className=" w-40 max-md:w-36" src={image} alt=""></img>
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-around items-center p-10 max-md:gap-2">
              <div className=" p-5 border border-red-700  w-[400px] max-md:w-full">
                <span className="text-2xl text-start text-red-500">(2019-2022)</span>
                <p className="text-white">
                  Bachelor's Degree in Computer Engineering, Rajamangala
                  University of Technology Lanna, Tak 
                </p>
              </div>
              <div className=" p-5 border border-red-700  w-[400px] max-md:w-full ">
                <span className="text-2xl text-start text-red-500">(2017-2019)</span>
                <p className="text-white">
                  Advanced Professional Certificate in Computer Technology,
                  Vocational Certificate (Higher Diploma) Rajamangala University
                  of Technology Lanna, Tak
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Education;