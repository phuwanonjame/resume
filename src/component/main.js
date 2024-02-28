import React from "react";
import image from "./Untitled-1.png";
import { Element } from "react-scroll";
function Main() {
  console.log(image);
  return (
    <Element name="home" className=" pt-20 max-md:pt-10 max-sm:p-5  max-md:h-[100%]  bg-black h-screen ">
      
      <div className= "flex justify-center  items-center max-md:flex-col max-md:pt-20">
        <div className="  ">
          <div className="flex flex-col justify-center gap-4 max-md:text-sm max-md:gap-2">
          <p className="  text-white text-6xl   max-md:text-[20px]   ">HI,I’m phuwanon kaewdang</p>
          <p className=" text-5xl text-red-500    max-md:text-sm ">Frontend Developer</p>
          <div className=" ">
          <p className=" max-md:w-64  text-white text-xl  max-md:text-sm max-w-[600px]   ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            molestias quos at vero quam exercitationem debitis animi, a est
            incidunt perspiciatis obcaecati quia maxime temporibus
            necessitatibus quidem et, mollitia quaerat.
          </p>
          <div className="p-5 flex gap-7">
          <a href="https://www.facebook.com/phuwanon.jame"> <i class="fa-brands fa-facebook text-red-600 text-5xl cursor-pointer  "></i></a>
          <a href="https://www.instagram.com/pk1st_1/"> <i class="fa-brands fa-instagram text-red-600 text-5xl cursor-pointer"></i></a>
          <a href="https://github.com/phuwanonjame"> <i class="fa-brands fa-github text-red-600  text-5xl cursor-pointer"></i></a>
          </div>
          <div className="mt-4">
            <button className=" mr-5 w-32 p-4 rounded-md bg-blue-700 text-white">
              Hire Me
            </button>
            <button className=" w- p-4 rounded-md bg-blue-700 text-white">
            Let’s Talk
            </button>
          </div>
          
          
          </div>
          
        </div>
        </div>
        <div>
        <img className="w-full h-full" src={image} alt=""></img>
        </div>
      </div>
    </Element>
  );
}

export default Main;
