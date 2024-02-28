import React from "react";
import image from "./Untitled-1.png";
import { Element } from "react-scroll";
function About() {
  return (
    <Element name="about" className=" bg-black pb-5  max-md:h-[100%] h-screen w-full">
      <div className="h-full flex flex-col justify-center items-center ">
        <div className="flex justify-center">
          <h1 className="text-white text-7xl max-md:text-5xl  flex gap-5">
            ABOUT <p className="text-red-500">ME</p>
          </h1>
        </div>

        <div className="flex justify-center ">
          <img className="rounded-3xl w-96" src={image} alt=""></img>
        </div>
        <div className="flex justify-center  ">
          <div className=" w-2/4 overflow-hidden max-md:overflow-visible max-md:whitespace-pre-wrap">
            <p className="text-white max-md:overflow-hidden max-md:whitespace-pre-wrap max-md:hidden">
              A creative thinker with self-motivation and a high level of
              commitment to utilize knowledge and passion in designing,
              developing, and implementing applications to create remarkable
              outcomes for the modern technological world. Quick to learn and
              wholeheartedly dedicated to acquiring new skills, this individual
              is poised to make a significant impact in the fields of design,
              development, and application deployment.
            </p>
            <p className="text-white max-md:overflow-hidden max-md:whitespace-pre-wrap max-md:block hidden ">
              A creative thinker with self-motivation and a high level of
              commitment to utilize knowledge and passion in designing,
              developing, and implementing applications to create remarkable
              outcomes...
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" max-md:mt-5 mr-5 w-32 p-4  rounded-md bg-blue-700 text-white">
            READ MORE
          </button>
        </div>
      </div>
    </Element>
  );
}

export default About;
