import React from "react";
import { Element } from "react-scroll";

function Contact() {
  return (
   <Element name="contact" className=" bg-black  h-screen w-full">
     <div className="h-full flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl text-white max-md:text-5xl">CONTACT <span className="text-6xl max-md:text-5xl text-red-500">ME!</span></h1>
      </div>
      <div className="w-[100%] max-md:w-[90%] flex justify-center items-center pt-20">
        <div className=" shadow-md shadow-red-500 rounded-md ">
          <div className="p-5 flex gap-2">
            <input type="text" placeholder="Full Name" className="p-2 w-full rounded-md"></input>
            <input type="text" placeholder="Email" className="p-2 w-full rounded-md"></input>
          </div>
          <div className="p-5 flex gap-2">
            <input type="text" placeholder="Mobile Phone" className="p-2 w-full rounded-md"></input>
            <input type="text" placeholder="Email Subject" className="p-2 w-full rounded-md"></input>
          </div>
          <div className="p-5">
            <textarea className="w-full p-2 rounded-md" placeholder="Your Message" rows={10}></textarea>
          </div>
        </div>
      </div>
      </div>
    </Element>
  );
}

export default Contact;