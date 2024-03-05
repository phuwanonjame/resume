import React from "react";
import image from "./Untitled-1.png";
import { Element } from "react-scroll";
function About() {
  return (
    <Element
      name="about"
      className=" bg-black pb-5  max-sm:h-[110%] max-md:h-[100%] h-screen w-full"
    >
      <div className="h-full flex flex-col justify-center items-center ">
        <div className="flex justify-center">
          <h1 className="text-white text-7xl max-md:text-5xl  flex gap-5">
            ABOUT <p className="text-red-500">ME</p>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="rounded-3xl w-96" src={image} alt=""></img>
          </div>

          <div className=" w-3/5   max-md:text-xs overflow-hidden max-md:overflow-visible max-md:whitespace-pre-wrap">
            <p className="text-white text-center  ">
              Hello! I am phuwanon kaewdang an aspiring Web Developer, Software
              Engineer. I love and enjoy coding so much. This is not just about
              coding this is life.
            </p>
            <div className="  text-center mt-5 max-md:block">
              <p className="text-white"> Phone: +66 638 829 070</p>
              <p className="text-white">
                Email: Phuwanon_ke62@live.rmutl.ac.th
              </p>
              <p className="text-white">
                address: City Home Rattanathibet Bang Kraso,Nonthaburi 11000
              </p>
            </div>

            {/* <p className="text-white max-md:overflow-hidden max-md:whitespace-pre-wrap max-md:block hidden ">
              A creative thinker with self-motivation and a high level of
              commitment to utilize knowledge and passion in designing,
              developing, and implementing applications to create remarkable
              outcomes...
            </p> */}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
