import React from "react";
import image from "./Untitled-1.png";
import { Element } from "react-scroll";
function Main() {
  console.log(image);
  return (
    <Element
      name="home"
      className=" pt-20  max-md:pt-10 max-sm:p-5 max-sm:h-[150%]  max-md:h-[100%]  bg-black h-screen "
    >
      <div className="flex justify-center  items-center max-md:flex-col max-md:pt-20">
        <div className="">
          <div className="flex flex-col justify-center gap-4 max-md:text-sm max-md:gap-2">
            <p className=" text-white text-6xl max-md:text-[20px] ">
              HI,I’m phuwanon kaewdang
            </p>
            <div className="w-fit">
              <p className="animation w-fit text-5xl text-red-500 max-md:text-sm ">
                Frontend Developer
              </p>
            </div>
            <div className="">
              <p className="max-md:w-64 text-white max-md:text-xs max-w-[600px] animate-fade-right animate-fill-backwards ">
                A creative thinker with self-motivation and a high level of
                commitment to utilize knowledge and passion in designing,
                developing, and implementing applications to create remarkable
                outcomes for the modern technological world. Quick to learn and
                wholeheartedly dedicated to acquiring new skills, this individual
                is poised to make a significant impact in the fields of design,
                development, and application deployment.
              </p>
              <div className="p-5 flex max-md:justify-center gap-7">
                <a href="https://www.facebook.com/phuwanon.jame">
                  <i class="fa-brands fa-facebook text-red-600 hover:text-white text-5xl cursor-pointer  "></i>
                </a>
                <a href="https://www.instagram.com/pk1st_1/">
                  <i class="fa-brands fa-instagram text-red-600 hover:text-white text-5xl cursor-pointer"></i>
                </a>
                <a href="https://github.com/phuwanonjame">
                  <i class="fa-brands fa-github text-red-600  hover:text-white text-5xl cursor-pointer"></i>
                </a>
              </div>
              <div className="max-md:flex max-md:justify-center mt-4">
                <a
                  href="./resume-phuwanon.pdf"
                  download
                  className=" mr-5 w-46 p-4 rounded-md  bg-blue-700 text-white hover:bg-fuchsia-50  hover:text-black  "
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <img className="w-full h-full " src={image} alt=""></img>
        </div>
      </div>
    </Element>
  );
}

export default Main;
